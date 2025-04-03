import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExpensesPage from "./pages/ExpensesPage";

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<ExpensesPage />} />
        </Routes>
    </Router>
);

export default AppRoutes;
