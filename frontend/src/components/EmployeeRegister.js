import React, { useRef } from "react";
import API from "../Api";

function EmployeeRegister() {
    const nameInputRef = useRef();
    const jobTitleInputRef = useRef();
    const departmentInputRef = useRef();
    const locationInputRef = useRef();
    const ageInputRef = useRef();
    const salaryInputRef = useRef();

    let sendSignupDataToServerThroughFD = async () => {
        let data = {
            name: nameInputRef.current.value,
            jobTitle: jobTitleInputRef.current.value,
            department: departmentInputRef.current.value,
            age: ageInputRef.current.value,
            location: locationInputRef.current.value,
            salary: salaryInputRef.current.value,
        };
        console.log(data);

        try {
            let response = await API.post("http://localhost:3001/employeeAdd", data, {
                headers: { "Content-Type": "application/json" },
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <div className="App">
            <br></br>
            <form>
                <h2 style={{ textAlign: "center", color: "#202020" }}>User Registration Form</h2>
                <input className="input" type="text" placeholder="Name" ref={nameInputRef} required />
                <input className="input" type="number" placeholder="Age" ref={ageInputRef} required />
                <input className="input" type="text" placeholder="Job Title" ref={jobTitleInputRef} />
                <input className="input" type="text" placeholder="Department" ref={departmentInputRef} />
                <input className="input" type="text" placeholder="Location" ref={locationInputRef} />
                <input className="input" type="text" placeholder="Salary" ref={salaryInputRef} />
                <button
                    className="btn"
                    type="button"
                    onClick={() => {
                        sendSignupDataToServerThroughFD();
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default EmployeeRegister;
