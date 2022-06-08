import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import StudentLogin from './Components/Login/StudentLogin';
import StudentRegister from './Components/Registration/StudentRegister';
import FacultyRegister from './Components/Registration/FacultyRegister';
import FacultyLogin from './Components/Login/FacultyLogin';
import AdminLogin from './Components/Login/AdminLogin';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">

        <Navbar />
        <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/studentlogin" element={<StudentLogin />} />
            <Route path="/facultylogin" element={<FacultyLogin />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/studentregister" element={<StudentRegister />} />
            <Route path="/facultyregister" element={<FacultyRegister />} />
        </Routes>
    </div>
  );
}

export default App;
