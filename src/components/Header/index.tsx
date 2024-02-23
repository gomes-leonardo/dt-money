import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo.svg'
import NewTransactionModal from '../NewTransactionModal'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleCloseModal = () => {
    setOpen(false)
  }
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal onClose={handleCloseModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
