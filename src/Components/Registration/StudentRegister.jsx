import style from "./StudentRegister.module.css"
import {React, useState} from "react"
import { useNavigate } from "react-router-dom"


const StudentRegister = ()=>{

    const [student, setStudent] = useState({

        name : "",
        email : "",
        contact : "",
        rollNo : "",
        term : "",
        year : "",
        fees : "",
        password : "",

    })

    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setStudent({
            ...student,
            [name]:value
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        fetch(`https://reqres.in/api/users`,{
            method : "POST",
            body : JSON.stringify(student),
            headers:{
                "Content-Type" : "application/json"
            }
        }).then((res)=> res.json())
        .then((res)=> console.log(res));

        alert("Registration Successfull");
        navigate("/studentlogin")
    }

    const {name,email,contact,rollNo,term,year,fees,password} = student
    return(

        <>
            <form className={style.main} onSubmit={handleSubmit}>
                <h1>Student Registration Page</h1>
                <span>Name : </span>
                 <input type="text" placeholder="Enter Full Name" id={style.userId} onChange={handleChange} name="name" value={name} /><br />
                 <span>Email : </span>
                 <input type="text" placeholder="Enter Email" id={style.email} onChange={handleChange} name="email" value={email} /><br />
                 <span>Contact : </span>
                 <input type="text" placeholder="Enter Contact" id={style.contact} onChange={handleChange} name="contact" value={contact} /><br />
                 <span>Roll No : </span>
                 <input type="text" placeholder="Enter Roll Number" id={style.roll} onChange={handleChange} name="rollNo" value={rollNo} /><br />
                 <span>Term : </span>
                 <input type="text" placeholder="Enter Term" id={style.contact} onChange={handleChange} name="term" value={term}  /><br />
                 <span>Current Year : </span>
                 <input type="text" placeholder="Enter Year" id={style.year} onChange={handleChange} name="year" value={year} /><br />
                 <span>Fees Paid : </span>
                 <input type="text" placeholder="Enter Fees" id={style.fees} onChange={handleChange} name="fees" value={fees} /><br />
                 <span>Password : </span>
                 <input type="password" placeholder="Enter Password" id={style.password} onChange={handleChange} name="password" value={password} /><br />

                <input type="submit" text="Submit" id={style.submit}/>          

                 
            </form>
        </>

    )

    
}

export default StudentRegister;