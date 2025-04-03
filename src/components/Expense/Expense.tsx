import "../Expense/Expense.css";

interface ExpenseProps {
    id: number;
    title: string;
    amount: number;
    category: string;
    onDelete: (id: number) => void;
}

const Expense = ({ id, title, amount, category, onDelete }: ExpenseProps) => {
    return (
        <div className="expense">
            <span>{category}: {title}</span>
            <span>{amount} ₽</span>
            <button onClick={() => onDelete(id)}>Удалить</button>
        </div>
    );
};

export default Expense;
