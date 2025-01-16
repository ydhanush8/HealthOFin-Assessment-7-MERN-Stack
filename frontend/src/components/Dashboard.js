import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import EmployeeRegister from './EmployeeRegister';
import EmployeeData from './EmployeeData';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeComponent, setActiveComponent] = useState('registration');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/signin');
    };

    return (
        <>
        <div className='dashboard-top'>
            <h1>Welcome to the Dashboard</h1>
            <button onClick={handleLogout} className='dashboard-btn'>Logout</button>
        </div>
        <div className="button-group">
        <button onClick={() => setActiveComponent('registration')} className='button-employee'>
            Registration
            </button>
            <button onClick={() => setActiveComponent('usersData')} className='button-employee'>
            Emp Data
            </button>
        </div>

        <div className="component-display">
            {activeComponent === 'registration' ? <EmployeeRegister /> : <EmployeeData />}
        </div>
        </>
    );
};

export default Dashboard;
