
import { useNavigate } from "react-router-dom";
import {TextField, Button} from "@mui/material";
import "./login.css";




const Login = () =>{
    const navigate = useNavigate();
    const navigateToHome = () =>{
        navigate("/home");
    }
    return (
        <div className ="login-container"> 
            <div className="centered-login-box">
                <TextField id="email" label="Email" variant="outlined"/>
                <TextField id="password"  type="password" label="Password" variant="outlined"/>
                <Button variant="contained" onClick={navigateToHome}>Login</Button>
            </div>
       </div>
    )
}

export default Login;

