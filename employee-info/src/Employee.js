import React, { useState } from "react";

function Employee() {
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    profession: '',
    joining_date: '',
    salary: ''
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
      const response = await fetch('http://localhost:5000/submit-employee', {
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
      alert('Failed to submit employee data');
    }
  };

  return (
    <div className="main-div">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <h2>Employee Details</h2>

          <label>Name</label> <br />
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          /> <br /><br />

          <label>Experience</label> <br />
          <input
            type="text"
            name="experience"
            placeholder="Enter Experience"
            value={formData.experience}
            onChange={handleChange}
            required
          /> <br /><br />

          <label>Profession</label> <br />
          <input
            type="text"
            name="profession"
            placeholder="Video Editor / Web Developer / etc..."
            value={formData.profession}
            onChange={handleChange}
            required
          /> <br /><br />

          <label>Joining Date</label> <br />
          <input
            type="date"
            name="joining_date"
            value={formData.joining_date}
            onChange={handleChange}
            required
          /> <br /><br />

          <label>Salary</label> <br />
          <input
            type="number"
            name="salary"
            placeholder="Enter Salary"
            value={formData.salary}
            onChange={handleChange}
          /> <br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Employee;
