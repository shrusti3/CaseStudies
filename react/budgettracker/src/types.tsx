export type Currency = 'USD' | 'EUR';

export interface IncomeEntry {
  amount: number;
  currency: Currency;
}

export interface ExpenseEntry {
  amount: number;
  currency: Currency;
}
