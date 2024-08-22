import React from 'react';
import './InstructorDashboard.css'; // Import the CSS file

const instructors = [
  {
    id: 1,
    name: 'Dr. Alice Johnson',
    department: 'Computer Science',
    age: 45,
    gender: 'Female',
    courses: ['Data Structures', 'Algorithms', 'Database Systems'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  },
  {
    id: 2,
    name: 'Mr. Robert Smith',
    department: 'Mathematics',
    age: 39,
    gender: 'Male',
    courses: ['Calculus', 'Linear Algebra', 'Statistics'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  },
  {
    id: 3,
    name: 'Ms. Laura White',
    department: 'Physics',
    age: 42,
    gender: 'Female',
    courses: ['Quantum Mechanics', 'Electromagnetism', 'Thermodynamics'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  },
  // Add more instructors as needed
];

const StudentDashboard = () => {
  return (
    <div className="dashboard">
      <h1><center>Instructor Dashboard</center></h1>
      <div className="instructor-profiles">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="instructor-profile">
            <img src={instructor.image} alt={instructor.name} className="instructor-image" />
            <h2>{instructor.name}</h2>
            <p>Department: {instructor.department}</p>
            <p>Age: {instructor.age}</p>
            <p>Gender: {instructor.gender}</p>
            <p>Courses Taught:</p>
            <ul>
              {instructor.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
