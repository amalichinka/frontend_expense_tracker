import { useNavigate } from "react-router-dom";
import "../pages/home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h1>Добро пожаловать в трекер расходов</h1>
            <p className="description">
                Этот трекер поможет вам контролировать ваши расходы и планировать бюджет.
                Вы сможете легко отслеживать свои траты по категориям и достигать финансовых целей.
            </p>
            <button onClick={() => navigate("/tracker")}>Начать</button>

            <div className="features-container">
                <div className="feature">
                    <span className="emoji">😼</span>
                    <p>Учет расходов</p>
                </div>
                <div className="feature">
                    <span className="emoji">😽</span>
                    <p>Цели и бюджет</p>
                </div>
                <div className="feature">
                    <span className="emoji">😸</span>
                    <p>Категории расходов</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
