import { useState, useEffect } from "react";
import "../ExpenseTracker/ExpenseTracker.css";
import TotalExpenses from "../TotalExpenses/TotalExpenses.tsx";
import ExpenseForm from "../ExpenseForm/ExpenseForm.tsx";
import SortingControls from "../SortingControls/SortingControls.tsx";
import Expense from "../Expense/Expense.tsx";
import GoalTracker from "../GoalTracker/GoalTracker.tsx";

export interface ExpenseItem {
    id: number;
    title: string;
    amount: number;
    category: string;
}

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState<ExpenseItem[]>([]);

    useEffect(() => {
        const savedExpenses = localStorage.getItem("expenses");
        if (savedExpenses) {
            setExpenses(JSON.parse(savedExpenses));
        } else {
            setExpenses([
                { id: 1, title: "Ужин в кафе", amount: 800, category: "Кафе и Рестораны" },
                { id: 2, title: "Билеты на поезд", amount: 1500, category: "Путешествия" },
            ]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (title: string, amount: number, category: string) => {
        const newExpense = { id: Date.now(), title, amount, category };
        setExpenses([...expenses, newExpense]);
    };

    const deleteExpense = (id: number) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    const sortExpenses = (order: "asc" | "desc") => {
        const sorted = [...expenses].sort((a, b) =>
            order === "asc" ? a.amount - b.amount : b.amount - a.amount
        );
        setExpenses(sorted);
    };

    return (
        <div className="expense-tracker">
            <h2>Мои расходы</h2>
            <div className="container">
                <div className="expense-form-container">
                    <ExpenseForm onAddExpense={addExpense} />
                </div>
                <div className="expense-list-container">
                    <SortingControls onSort={sortExpenses} />
                    <div className="expense-list">
                        {expenses.map((expense) => (
                            <Expense key={expense.id} {...expense} onDelete={deleteExpense} />
                        ))}
                    </div>
                    <TotalExpenses expenses={expenses} />
                    <GoalTracker expenses={expenses} goal={5000} />
                </div>
            </div>
        </div>
    );
};

export default ExpenseTracker;