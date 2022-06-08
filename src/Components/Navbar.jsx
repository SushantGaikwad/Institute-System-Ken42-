import React from "react";
import style from "./Navbar.module.css";


const Navbar = () =>{

    return(
        <>
            <div>                
                <nav className={style.navbar}>                        
                        <div>Dashboard</div>
                        <div>Admin Login</div>
                </nav>
            </div>        
        </>
    )

}


export default Navbar;