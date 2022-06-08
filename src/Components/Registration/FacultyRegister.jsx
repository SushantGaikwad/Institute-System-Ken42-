import style from "./StudentRegister.module.css"


const FacultyRegister = ()=>{

    const handleSubmit = ()=>{



    }

    return(

        <>
            <form className={style.main} onSubmit={handleSubmit}>
                <h1>Factuly Registration Page</h1>
                <span>Name : </span>
                 <input type="text" placeholder="Enter Full Name" id={style.userId} /><br />
                 <span>Email : </span>
                 <input type="text" placeholder="Enter Email" id={style.email} /><br />
                 <span>Contact : </span>
                 <input type="text" placeholder="Enter Contact" id={style.contact} /><br />
                 <span>Emp Id : </span>
                 <input type="text" placeholder="Enter Emp Id" id={style.roll} /><br />
                 <span>Subject : </span>
                 <input type="text" placeholder="Enter Subject" id={style.contact} /><br />                 
                 <span>Password : </span>
                 <input type="password" placeholder="Enter Password" id={style.password} /><br />

                <input type="submit" text="Submit" id={style.submit}/>          

                 
            </form>
        </>

    )

    
}

export default FacultyRegister;