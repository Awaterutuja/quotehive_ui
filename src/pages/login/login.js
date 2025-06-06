
import { useNavigate } from "react-router-dom";
import {TextField, Button} from "@mui/material";
import "./login.css";
import { useState } from "react";




const Login = () =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const navigateToHome = () =>{
        navigate("/home", {state: {email: email}});
    }
    return (
        <div className ="login-container"> 
            <div className="centered-login-box">
                <TextField id="email" label="Email" variant="outlined" value={email} onChange={e=> setEmail(e.target.value)}/>
                <TextField id="password"  type="password" label="Password" variant="outlined"/>
                <Button variant="contained" onClick={navigateToHome}>Login</Button>
            </div>
       </div>
    )
}

export default Login;

