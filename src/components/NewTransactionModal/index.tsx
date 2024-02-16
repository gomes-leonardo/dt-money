import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import { CloseButton, Content, Overlay } from './styles'
import { X } from 'phosphor-react'

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

              <button type="submit">Cadastrar</button>
            </form>
          </Content>
        </motion.div>
      </Overlay>
    </Dialog.Portal>
  )
}

export default NewTransactionModal
