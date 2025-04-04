import { useAppDispatch } from "../../store/hooks";
import { sortExpenses } from "../../slices/expensesSlice";
import "../SortingControls/SortingControls.css";

const SortingControls = () => {
    const dispatch = useAppDispatch();

    const handleSort = (order: "asc" | "desc") => {
        dispatch(sortExpenses(order));
    };

    return (
        <div className="sorting-controls">
            <button onClick={() => handleSort("asc")}>Сортировать ↑</button>
            <button onClick={() => handleSort("desc")}>Сортировать ↓</button>
        </div>
    );
};

export default SortingControls;
