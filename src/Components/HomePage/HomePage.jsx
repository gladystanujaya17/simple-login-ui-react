import './HomePage.css';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="wrapper">
            <h2>Welcome to Home Page</h2>
            <button type="submit" onClick={() => navigate('/')}>Log out</button>
        </div>
       
    );
};

export default HomePage;