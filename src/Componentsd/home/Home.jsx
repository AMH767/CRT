import { Link } from 'react-router-dom'
import "./home.css"
const Home = () => {
    return (
        <Link to={"/boxQuiz"} className="start-button">
            Начать
        </Link>
    );
}

export default Home;