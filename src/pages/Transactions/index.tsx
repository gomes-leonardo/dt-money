import Header from '../../components/Header'
import Summary from '../../components/Summary'
import SearchForm from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { TrashSimple } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import NewTransactionModal from '../../components/NewTransactionModal'
import DeleteTransactionModal from '../../DeleteTransactionModal'
const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

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
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <TrashSimple style={{ cursor: 'pointer' }} size={22} />
                    </Dialog.Trigger>
                    <DeleteTransactionModal />
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
