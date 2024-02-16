import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
export default function Login(){
    const[email,setEmail] = useState(null);
    const[password,setPassword] = useState(null);
    const[username,setUsername] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = () => {
        if (email === 'oussama@gmail.com' && username === 'mehdi' && password === 'password') {
            dispatch(login({ email, password, username }));
            navigate('/');
        } else {
            alert('Email or password is incorrect');
        }
    };

    return(
        <>
        <form action="">
        <h1>Login</h1>
            <input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Enter your username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Enter you password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Login</button>
        </form>
        </>
    )
}