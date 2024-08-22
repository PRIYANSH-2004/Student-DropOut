import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'; // Importing an alert icon from react-icons

const students = [
  {
    id: 1,
    name: 'John Doe',
    grade: 'A',
    gender: 'Male',
    maritalStatus: 'Single',
    financialCondition: 'Good',
    age: 20,
    riskLevel: 'low',
    image: 'path_to_image1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    grade: 'B',
    gender: 'Female',
    maritalStatus: 'Married',
    financialCondition: 'Average',
    age: 22,
    riskLevel: 'middle',
    image: 'path_to_image2.jpg',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    grade: 'C',
    gender: 'Female',
    maritalStatus: 'Single',
    financialCondition: 'Poor',
    age: 21,
    riskLevel: 'high',
    image: 'path_to_image3.jpg',
  },
  // Add more students as needed
];

const handleAlert = (name) => {
  alert(`Alert: ${name} is at risk of dropping out.`);
};

const StudentDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <div className="student-profiles">
        {students.map((student) => (
          <div key={student.id} className="student-profile">
            <img src={student.image} alt={student.name} className="student-image" />
            <h2>{student.name}</h2>
            <p>Grade: {student.grade}</p>
            <p>Gender: {student.gender}</p>
            <p>Marital Status: {student.maritalStatus}</p>
            <p>Financial Condition: {student.financialCondition}</p>
            <p>Age: {student.age}</p>
            <p>Risk Level: {student.riskLevel}</p>
            <div className="alert-section">
              {student.riskLevel === 'middle' || student.riskLevel === 'high' ? (
                <FaExclamationTriangle
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => handleAlert(student.name)}
                />
              ) : (
                <span>No Alert</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
