import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";


const Navbar = () =>{

    return(
        <>
            <div>                
                <div className={style.navbar}>
                        <div className={style.dashboard}>
                            <Link to="/" className={style.link_decor}>Dashboard</Link>
                        </div>
                        <div className={style.login_buttons}>
                            <div>
                                <Link to="/studentlogin" className={style.link_decor}>Student Login</Link>
                            </div>
                            <div>
                            <Link to="/facultylogin" className={style.link_decor}>Faculty Login</Link>
                            </div>
                            <div>
                            <Link to="/adminlogin" className={style.link_decor}>Admin Login</Link>
                            </div>
                        </div>                        
                </div>
            </div>        
        </>
    )

}


export default Navbar;