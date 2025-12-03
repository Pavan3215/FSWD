import React from "react";

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Registered Students</h2>

      {students.length > 0 ? (
        students.map((student, index) => (
          <div key={index}>
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Course: {student.course}</p>
          </div>
        ))
      ) : (
        <p>No students registered</p>
      )}
    </div>
  );
};

export default StudentList;
stlist.js
