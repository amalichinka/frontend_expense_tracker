import "../SortingControls/SortingControls.css";

interface SortingControlsProps {
    onSort: (order: "asc" | "desc") => void;
}

const SortingControls = ({ onSort }: SortingControlsProps) => {
    return (
        <div className="sorting-controls">
            <button onClick={() => onSort("asc")}>Сортировать ↑</button>
            <button onClick={() => onSort("desc")}>Сортировать ↓</button>
        </div>
    );
};

export default SortingControls;
