import {React,useEffect,useContext,useState} from "react";
import Navbar from "./Navbar";
import style from "./Dashboard.module.css"
import { isAuth } from "../Context/isAuth";
// import { Chart, Title, Tooltip, ArcElement,Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";
// Chart.register(
//     Title, Tooltip, ArcElement,Legend
// );
import Chart from "react-apexcharts";

const Dashboard = ()=>{
    const{studentAuth, facultyAuth, adminAuth} = useContext(isAuth);
    const [users, setUsers] = useState(null);
    const [count, setCount] = useState([]);
    const [label, setLabels] = useState([]);

    useEffect(() => {
        fetchStudents();
    },[])


    const fetchStudents = async ()=>{

        try {
            let data = await fetch("https://institute-system.herokuapp.com/students");
            let res = await data.json();

            setUsers(res);
            let obj = {};
            for(let i = 0; i < res.length; i++){

                if(obj[res[i].term] == undefined){
                    obj[res[i].term] = 1;
                }
                else{
                    obj[res[i].term]++;
              }
               
            }
            let arr = [];
            let label = [];
            for(let k in obj){
                arr.push(obj[k]);
                label.push("Term :"+k);
            }
            setCount(arr);
            setLabels(label);
            console.log(count);
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <>
                <Navbar />
                <div className={style.body}>
                <h1>This is Dashboard</h1>
                {studentAuth ?                     
                <div>You have Logged as Student</div>
                : adminAuth ? 
                <div>You have Logged as Admin</div>
                : facultyAuth ?
                <div>You have Logged as Faculty</div>
                :
                <div>You have not Logged yet</div>
                }
                <br />
                <br />
                <br />
                {
                    adminAuth ? 
                    <table>
                    <thead className={style.thead}>
                        <td>Sr.No</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Term</td>
                        <td>Gender</td>
                    </thead>
                    <tbody>
                         { users ? 
                    
                            users.map((data,i) =>{
                            return (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.first_name}</td>
                                    <td>{data.last_name}</td>
                                    <td>{data.term}</td>
                                    <td>{data.gender}</td>
                                </tr>
                            )
                        })
                        : <div></div>
                    }
                    </tbody>
                    </table>
                   
                    : <div></div>
                }
                <br />
                <br />
                <br />
                <br />
                
                {
                    adminAuth ? 
                    users ? 
                    
                    <Chart
                        type="pie"
                        width={2000}
                        height={550}
                        series={count}
                        options={{
                            title:{text : "Students Pie Chart "},
                            // colors:["#cecece","#fecede","#fefefe","#dcdcdcyellow","brown","pink","green"],
                            labels:label
                        }}
                    > 
                    </Chart>
                        : <div></div>
                    : <div></div>
                }



                </div>
              
                
        </>
    )

}


export default Dashboard;