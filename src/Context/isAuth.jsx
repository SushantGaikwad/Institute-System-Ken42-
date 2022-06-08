import React from "react";

export const isAuth = React.createContext();

export function IsAuthProvider({children}){
    const [studentAuth, setStudentAuth] = React.useState(false);
    const [facultyAuth, setFacultyAuth] = React.useState(false);
    const [adminAuth, setAdminAuth] = React.useState(false);

    const StudentLogin =()=>{
        setStudentAuth(!studentAuth);        
    }
    const FacultyLoginAuth =()=>{
        setFacultyAuth(!facultyAuth);
    }
    const AdminLogin =()=>{
        setAdminAuth(!adminAuth);
    }


    return <isAuth.Provider value={{studentAuth,facultyAuth, adminAuth, StudentLogin, FacultyLoginAuth, AdminLogin}}>{children}</isAuth.Provider>

}