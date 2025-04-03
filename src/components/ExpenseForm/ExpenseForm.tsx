import { useState } from "react";
import "../ExpenseForm/ExpenseForm.css";

interface ExpenseFormProps {
    onAddExpense: (title: string, amount: number, category: string) => void;
}

const ExpenseForm = ({ onAddExpense }: ExpenseFormProps) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Кафе и Рестораны");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !amount || parseFloat(amount) <= 0) return;
        onAddExpense(title, parseFloat(amount), category);
        setTitle("");
        setAmount("");
    };

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Название"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Сумма"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="Кафе и Рестораны">Кафе и Рестораны</option>
                <option value="Путешествия">Путешествия</option>
                <option value="Услуги">Услуги</option>
                <option value="Транспорт">Транспорт</option>
                <option value="Супермаркеты">Супермаркеты</option>
            </select>
            <button type="submit">Добавить</button>
        </form>
    );
};

export default ExpenseForm;
