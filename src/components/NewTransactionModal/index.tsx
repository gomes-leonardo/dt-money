import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContext } from 'react'

const NewTransactionModal = () => {
  const { createTransaction } = useContext(TransactionsContext)

  const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
  })

  type NewTransactionsFormInputs = z.infer<typeof newTransactionFormSchema>

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(data: NewTransactionsFormInputs) {
    await createTransaction({
      ...data,
    })
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Content>
            <Dialog.Title>Nova transação</Dialog.Title>
            <CloseButton>
              <X size={20} />
            </CloseButton>

            <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
              <input
                type="text"
                placeholder="Descrição"
                required
                {...register('description')}
              />
              <input
                type="number"
                placeholder="Preço"
                required
                {...register('price', { valueAsNumber: true })}
              />
              <input
                type="text"
                placeholder="Categoria"
                required
                {...register('category')}
              />
              <Controller
                control={control}
                name="type"
                render={({ field }) => {
                  return (
                    <TransactionType
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <TransactionTypeButton value="income" variant="income">
                        <ArrowCircleUp size={24} />
                        Entrada
                      </TransactionTypeButton>
                      <TransactionTypeButton value="outcome" variant="outcome">
                        <ArrowCircleDown size={24} />
                        Saída
                      </TransactionTypeButton>
                    </TransactionType>
                  )
                }}
              />
              <button type="submit" disabled={isSubmitting}>
                Cadastrar
              </button>
            </form>
          </Content>
        </motion.div>
      </Overlay>
    </Dialog.Portal>
  )
}

export default NewTransactionModal
