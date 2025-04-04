import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Expense {
    id: number;
    title: string;
    amount: number;
    category: string;
}

interface ExpensesState {
    items: Expense[];
}

const initialState: ExpensesState = {
    items: [],
};

const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<Omit<Expense, 'id'>>) => {
            const newExpense: Expense = {
                id: Date.now(),
                ...action.payload,
            };
            state.items.push(newExpense);
        },
        deleteExpense: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(expense => expense.id !== action.payload);
        },
        sortExpenses: (state, action: PayloadAction<'asc' | 'desc'>) => {
            state.items.sort((a, b) =>
                action.payload === 'asc' ? a.amount - b.amount : b.amount - a.amount
            );
        },
    },
});

export const { addExpense, deleteExpense, sortExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;
