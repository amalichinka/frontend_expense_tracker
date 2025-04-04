import "../ExpenseTracker/ExpenseTracker.css";
import TotalExpenses from "../TotalExpenses/TotalExpenses";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import SortingControls from "../SortingControls/SortingControls";
import Expense from "../Expense/Expense";
import GoalTracker from "../GoalTracker/GoalTracker";
import { useAppSelector } from "../../store/hooks";

const ExpenseTracker = () => {
    const expenses = useAppSelector((state) => state.expenses.items);

    return (
        <div className="expense-tracker">
            <h2>Мои расходы</h2>
            <div className="container">
                <div className="expense-form-container">
                    <ExpenseForm />
                </div>
                <div className="expense-list-container">
                    <SortingControls />
                    <div className="expense-list">
                        {expenses.map((expense) => (
                            <Expense key={expense.id} {...expense} />
                        ))}
                    </div>
                    <TotalExpenses />
                    <GoalTracker goal={100000} />
                </div>
            </div>
        </div>
    );
};

export default ExpenseTracker;
