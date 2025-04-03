import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { deleteExpense } from "../../slices/expensesSlice";
import "../Expense/Expense.css";

interface ExpenseProps {
    id: number;
    title: string;
    amount: number;
    category: string;
}

const Expense: React.FC<ExpenseProps> = ({ id, title, amount, category }) => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deleteExpense(id));
    };

    return (
        <div className="expense">
            <span>{category}: {title}</span>
            <span>{amount} ₽</span>
            <button onClick={handleDelete}>Удалить</button>
        </div>
    );
};

export default Expense;
