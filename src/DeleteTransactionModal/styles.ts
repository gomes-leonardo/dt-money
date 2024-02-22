import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'
export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  max-width: 20rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 0.5rem;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`
export interface ActionModalButtonProps {
  variant: 'green' | 'red'
}

export const ActionModalButton = styled.button<ActionModalButtonProps>`
  background: ${(props) => props.theme[`${props.variant}-500`]};
  color: ${(props) => props.theme.white};
  padding: 0.75rem;
  border: 0;
  border-radius: 6px;
  width: 80%;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme[`${props.variant}-700`]};
    transition: background-color 0.2s;
  }
`

export const CancelButton = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  width: 100%;
`

export const Description = styled(Dialog.Description)`
  margin: 18px 0 18px 0;
`
