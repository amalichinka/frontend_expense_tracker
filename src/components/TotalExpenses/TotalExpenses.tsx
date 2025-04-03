import "../TotalExpenses/TotalExpenses.css";

interface TotalExpensesProps {
    expenses: { amount: number }[];
}

const TotalExpenses = ({ expenses }: TotalExpensesProps) => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    return <div className="total-expenses">Итого: {total} ₽</div>;
};

export default TotalExpenses;
