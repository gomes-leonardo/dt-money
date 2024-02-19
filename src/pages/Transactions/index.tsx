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

const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)
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
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

export default Transactions
