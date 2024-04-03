import React from "react";
import './LoginForm.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUserAlt className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <RiLockPasswordFill className="icon"/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" onClick={() => navigate('/home-page')}>Login</button>

                <div className="register-link">
                    <p>
                        Don't have an account? <a href="#">Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;