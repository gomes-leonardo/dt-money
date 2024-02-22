import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import {
  ActionModalButton,
  CancelButton,
  CloseButton,
  Content,
  Description,
  Overlay,
} from './styles'
import { Warning, X } from 'phosphor-react'

import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

const DeleteTransactionModal = () => {
  const { transactions, deleteTransaction } = useContext(TransactionsContext)

  const handleDeleteTransaction = (id: number) => {
    deleteTransaction(id)
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
            <Warning size={32} color="red" />
            <Dialog.Title>Você tem certeza?</Dialog.Title>
            <Description>
              Essa ação não pode ser desfeita os valores da transação serão
              excluídos completamente.
            </Description>
            <CloseButton>
              <X size={20} />
            </CloseButton>
            <ActionModalButton
              onClick={() => handleDeleteTransaction(transactions[0].id)}
              variant="red"
            >
              Deletar transação
            </ActionModalButton>
            <CancelButton>
              <ActionModalButton variant="green">Cancelar</ActionModalButton>
            </CancelButton>
          </Content>
        </motion.div>
      </Overlay>
    </Dialog.Portal>
  )
}

export default DeleteTransactionModal
