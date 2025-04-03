import "../GoalTracker/GoalTracker.css";

interface GoalTrackerProps {
    expenses: { amount: number }[];
    goal: number;
}

const GoalTracker = ({ expenses, goal }: GoalTrackerProps) => {
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
