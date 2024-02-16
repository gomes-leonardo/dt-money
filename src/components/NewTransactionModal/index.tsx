import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay } from './styles'

const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova transação</Dialog.Title>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <button type="submit">Cadastrar</button>
          </form>
          <Dialog.Close>X</Dialog.Close>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}

export default NewTransactionModal
