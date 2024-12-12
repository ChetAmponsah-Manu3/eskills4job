import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './StudentPage.css';


const mockStudentProfile = {
  student_id: 1,
  id: 1001,
  first_name: "Mark",
  last_name: "Akraku",
  gender: "M",
  phone_number: "0244567890",
  level: "Class5",
  year_of_entry: 2018,
};

function Profile() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    
    setStudent(mockStudentProfile);
  }, []);

  if (!student) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>Student Profile</h2>
      <table className="profile-table">
        <tbody>
          <tr>
            <th>Student ID</th>
            <td>{student.student_id}</td>
          </tr>
          <tr>
            <th>User ID</th>
            <td>{student.id}</td>
          </tr>
          <tr>
            <th>First Name</th>
            <td>{student.first_name}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{student.last_name}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{student.gender === "M" ? "Male" : "Female"}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{student.phone_number}</td>
          </tr>
          <tr>
            <th>Level</th>
            <td>{student.level}</td>
          </tr>
          <tr>
            <th>Year of Entry</th>
            <td>{student.year_of_entry}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Results() {
  return <div><h2>Results</h2><p>Here is the results section.</p></div>;
}

function Subjects() {
  return <div><h2>Subjects</h2><p>Here is the subjects section.</p></div>;
}

function Finance() {
  return <div><h2>Finance</h2><p>Here is the finance section.</p></div>;
}

function StudentPage() {
  return (
    <div className="student-container">
     
      <nav className="sidebar">
        <h2>Student Portal</h2>
        <ul>
          <li><Link to="/">Profile</Link></li>
          <li><Link to="/student/results">Results</Link></li>
          <li><Link to="/student/subjects">Subjects</Link></li>
          <li><Link to="/student/finance">Finance</Link></li>
        </ul>
      </nav>

      
      <div className="content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/student/results" element={<Results />} />
          <Route path="/student/subjects" element={<Subjects />} />
          <Route path="/student/finance" element={<Finance />} />
        </Routes>
      </div>
    </div>
  );
}

export default StudentPage;
