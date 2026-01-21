
import { useReducer } from 'react';
import type { IncomeEntry, ExpenseEntry, Currency } from './types';

interface BudgetState {
  income: IncomeEntry[];
  expenses: ExpenseEntry[];
  selectedCurrency: Currency;
}

type BudgetAction =
  | { type: 'addIncome'; payload: IncomeEntry }
  | { type: 'addExpense'; payload: ExpenseEntry }
  | { type: 'changeCurrency'; payload: Currency };

function budgetReducer(
  state: BudgetState,
  action: BudgetAction
): BudgetState {
  switch (action.type) {
    case 'addIncome':
      return {
        ...state,
        income: [...state.income, action.payload]
      };

    case 'addExpense': {
      const totalIncome = state.income.reduce(
        (sum, i) => sum + i.amount,
        0
      );
      const totalExpense = state.expenses.reduce(
        (sum, e) => sum + e.amount,
        0
      );

      // Prevent negative balance
      if (totalExpense + action.payload.amount > totalIncome) {
        return state;
      }

      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    }

    case 'changeCurrency':
      return {
        ...state,
        selectedCurrency: action.payload
      };

    default:
      return state;
  }
}

const BudgetTracker = () => {
  const [state, dispatch] = useReducer(budgetReducer, {
    income: [],
    expenses: [],
    selectedCurrency: 'USD'
  });

  const totalIncome = state.income.reduce((s, i) => s + i.amount, 0);
  const totalExpense = state.expenses.reduce((s, e) => s + e.amount, 0);
  const netBalance = totalIncome - totalExpense;

  return (
    <div>
      <h2>Budget Tracker</h2>

      <p>Income: {totalIncome} {state.selectedCurrency}</p>
      <p>Expenses: {totalExpense} {state.selectedCurrency}</p>
      <p>Net Balance: {netBalance} {state.selectedCurrency}</p>

// add expense button adds value as 100USD/100EUR to the total income
      <button
        onClick={() =>
          dispatch({
            type: 'addIncome',
            payload: { amount: 100, currency: state.selectedCurrency }
          })
        }
      >
        Add Income
      </button>
// add expense button takes expense value as 50USD/50EUR
      <button
        onClick={() =>
          dispatch({
            type: 'addExpense',
            payload: { amount: 50, currency: state.selectedCurrency }
          })
        }
      >
        Add Expense
      </button>

      <button
        onClick={() =>
          dispatch({
            type: 'changeCurrency',
            payload: state.selectedCurrency === 'USD' ? 'EUR' : 'USD'
          })
        }
      >
        Toggle Currency
      </button>
    </div>
  );
};

export default BudgetTracker;
