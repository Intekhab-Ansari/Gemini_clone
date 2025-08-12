import React, { useState } from "react";

function Attendence() {
    const [formData, setFormData] = useState({
        name: '',
        rollNumber: '',
        standard: '',
        date: '',
        status: 'present',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/submit-attendance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.text();
            alert(result);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit attendance');
        }
    };


    return (
        <>
            <div className="main-box">
                <div className="box-1">
                    <form onSubmit={handleSubmit}>
                        <h2>Student Attendence form</h2>
                        <label>Name: </label><br />
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" required /><br /> <br />

                        <label>Roll Number: </label><br />
                        <input type="number" name="rollNumber" value={formData.rollNumber} onChange={handleChange} placeholder="Enter your Roll Number" required /><br /> <br />

                        <label>Standard: </label><br />
                        <input type="text" name="standard" value={formData.standard} onChange={handleChange} placeholder="Enter your Standard" required /><br /> <br />

                        <label>Date:</label><br />
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required /><br /> <br />

                        <label>Status:</label><br />
                        <input type="radio" name="status" value="Present" checked={formData.status === 'Present'} onChange={handleChange} /> Present
                        <input type="radio" name="status" value="Absent" checked={formData.status === 'Absent'} onChange={handleChange} /> Absent<br /> <br />

                        <button type="submit">Submit</button>

                    </form>
                </div>
            </div>
        </>
    );
}
export default Attendence;