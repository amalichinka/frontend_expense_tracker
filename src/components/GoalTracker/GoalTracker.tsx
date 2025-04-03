import "../GoalTracker/GoalTracker.css";
import { useAppSelector } from "../../store/hooks";

interface GoalTrackerProps {
    goal: number;
}

const GoalTracker = ({ goal }: GoalTrackerProps) => {
    const expenses = useAppSelector((state) => state.expenses.items);
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const percentage = Math.min((total / goal) * 100, 100);

    return (
        <div className="goal-tracker">
            <div className="progress-bar" style={{ width: `${percentage}%` }} />
            <p>Цель: {goal} ₽ ({percentage.toFixed(1)}%)</p>
        </div>
    );
};

export default GoalTracker;
