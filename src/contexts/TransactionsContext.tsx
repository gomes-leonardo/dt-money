import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export interface Transaction {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}
interface TransactionContextType {
  transactions: Transaction[]
}

interface TransactionProviderProps {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const apiUrl = 'http://localhost:3333/transactions'

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      console.log(response.data)
      setTransactions(response.data)
    })
  }, [])
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
