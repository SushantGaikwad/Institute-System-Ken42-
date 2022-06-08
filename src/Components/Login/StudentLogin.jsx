import React from "react";
import style from "./Login.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { isAuth } from "../../Context/isAuth";


const StudentLogin = ()=>{
    const {StudentLogin} = React.useContext(isAuth);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = (e)=>{      
        const {name, value} = e.target;
        // console.log(name,value);
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user);
        StudentLogin();
        alert("Login Successfull");
        navigate("/")
    }

    const {email, password} = user;
    return(
        <>
            <form onSubmit={handleSubmit} className={style.main}>
                <h1>Student Login Page</h1>
                <span>Email :</span>
                 <input type="text" placeholder="Enter Email Id" id={style.email} onChange={handleChange} name="email" value={email} /><br />
                <span>Password :</span>
                 <input type="password" placeholder="Enter Password" id={style.password} onChange={handleChange} name="password" value={password} /><br />
                 <input type="submit" value="Login" id={style.login} />
                 <div>Don't have an account? Register Here</div>
                 <Link to="/studentregister" className={style.link_decor}>Register</Link>
            </form>
        </>
    )
}

export default StudentLogin;