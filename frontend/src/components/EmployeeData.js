import React, { useEffect, useState } from "react";
import '../App.css'
import API from '../Api';

function EmpData() {
    const [Emp, setEmp] = useState([]);

    useEffect(() => {
        fetchEmp();
    }, []);

    const fetchEmp = async () => {
        try {
            const response = await API.get("/dashboardEmp");
            setEmp(response.data);
        } catch (err) {
            console.error("Error fetching Emp:", err);
        }
    };


    const deleteEmp = async (id) => {
        try {
            if (!id) {
                console.error("Invalid singleEmp ID");
                return;
            }
            await API.delete(`/dashboardEmp/${id}`);
            setEmp((prev) => prev.filter((emp) => emp._id !== id)); 
        } catch (err) {
            console.error("Error deleting singleEmp:", err);
        }
    };

    return (
        <div className="emp-data-app">
            <h1>Emp Data</h1>
            <div className="table-cover">

            <input placeholder="Search Employee" className="emp-data-input"/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>JobTitle</th>
                        <th>Department</th>
                        <th>Location</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <br/>
                <tbody>
                    {Emp.map((emp) => 
                        <tr key={emp._id}>
                            <>
                                <td>{emp.name}</td>
                                <td>{emp.jobTitle}</td>
                                <td>{emp.department}</td>
                                <td>{emp.location}</td>
                                <td>{emp.age}</td>
                                <td>{emp.salary}</td>
                            </>
                            <td>
                                <>
                                    <button onClick={() => deleteEmp(emp._id)} className="delete-btn" >Delete</button>
                                </>
                            </td>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
            </div>
    );
}

export default EmpData;