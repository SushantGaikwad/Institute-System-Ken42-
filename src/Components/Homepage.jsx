import React from "react";
import Navbar from "./Navbar";
import style from "./Homepage.module.css"


const Homepage = () =>{

    return(
        <>
                <Navbar />
                <div className={style.body}>
                <h1>This is Homepage</h1> 
                </div>
              
                
        </>
    )

}


export default Homepage;