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

const NewTransactionModal = () => {
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

            <form action="">
              <input type="text" placeholder="Descrição" required />
              <input type="number" placeholder="Preço" required />
              <input type="text" placeholder="Categoria" required />

              <TransactionType>
                <TransactionTypeButton value="income" variant="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton value="outcome" variant="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
              <button type="submit">Cadastrar</button>
            </form>
          </Content>
        </motion.div>
      </Overlay>
    </Dialog.Portal>
  )
}

export default NewTransactionModal
