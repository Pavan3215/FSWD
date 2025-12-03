import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(v => v !== "")) {
      addStudent(formData);
      setFormData({
        name: "",
        email: "",
        course: ""
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {["name", "email", "course"].map((field) => (
        <div key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type={field === "email" ? "email" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentForm;
studentform.js
