import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './style'
import useSummary from '../../hooks/useSummary'

const Summary = () => {
  const summary = useSummary()

  const setColorBasedOnCondition = () => {
    if (summary.total > 0) {
      return 'green'
    } else if (summary.total < 0) {
      return 'red'
    } else if (summary.total === 0) {
      return 'none'
    }
  }
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>
          {summary.income.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>
          {summary.outcome.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </SummaryCard>
      <SummaryCard variant={setColorBasedOnCondition()}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>
          {summary.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </SummaryCard>
    </SummaryContainer>
  )
}

export default Summary
