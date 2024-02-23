import Header from '../../components/Header'
import Summary from '../../components/Summary'
import SearchForm from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { useState } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { TrashSimple } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import DeleteTransactionModal from '../../DeleteTransactionModal'
import { useContextSelector } from 'use-context-selector'
const Transactions = () => {
  const { transactions } = useContextSelector(
    TransactionsContext,
    (context) => {
      return {
        transactions: context.transactions,
      }
    },
  )
  const [open, setOpen] = useState(false)

  const handleCloseModal = () => {
    setOpen(false)
  }
  const formatDate = (date: string) => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString('pt-BR')
  }
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{formatDate(transaction.createdAt)}</td>
                <td>
                  <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger asChild>
                      <TrashSimple style={{ cursor: 'pointer' }} size={22} />
                    </Dialog.Trigger>
                    <DeleteTransactionModal onClose={handleCloseModal} />
                  </Dialog.Root>
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

export default Transactions
