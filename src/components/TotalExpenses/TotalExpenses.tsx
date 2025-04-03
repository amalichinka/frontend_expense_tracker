import "../TotalExpenses/TotalExpenses.css";
import { useAppSelector } from "../../store/hooks";

const TotalExpenses = () => {
    const total = useAppSelector((state) =>
        state.expenses.items.reduce((sum, expense) => sum + expense.amount, 0)
    );

    return <div className="total-expenses">Итого: {total} ₽</div>;
};

export default TotalExpenses;
