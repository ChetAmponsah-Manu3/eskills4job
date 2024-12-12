import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './TeacherPage.css';


const mockTeacherProfile = {
  teacher_id: 101,
  id: 2001,
  first_name: "Esther",
  last_name: "Smith",
  gender: "F",
  phone_number: "0576543210",
  qualification: "Ph.D. in Mathematics",
};


const mockResults = [
  { student_id: 1, subject: "Mathematics", score: 85 },
  { student_id: 2, subject: "Mathematics", score: 90 },
];

function Profile() {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    
    setTeacher(mockTeacherProfile);
  }, []);

  if (!teacher) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>Teacher Profile</h2>
      <table className="profile-table">
        <tbody>
          <tr>
            <th>Teacher ID</th>
            <td>{teacher.teacher_id}</td>
          </tr>
          <tr>
            <th>User ID</th>
            <td>{teacher.id}</td>
          </tr>
          <tr>
            <th>First Name</th>
            <td>{teacher.first_name}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{teacher.last_name}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{teacher.gender === "M" ? "Male" : "Female"}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{teacher.phone_number}</td>
          </tr>
          <tr>
            <th>Qualification</th>
            <td>{teacher.qualification}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ResultsManagement() {
  const [results, setResults] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newResult, setNewResult] = useState({ student_id: "", subject: "", score: "" });

  useEffect(() => {
    
    setResults(mockResults);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewResult({ ...newResult, [name]: value });
  };

  const handleAddResult = () => {
    setResults([...results, newResult]);
    setNewResult({ student_id: "", subject: "", score: "" });
  };

  const handleEditResult = (index) => {
    setEditIndex(index);
    setNewResult(results[index]);
  };

  const handleUpdateResult = () => {
    const updatedResults = [...results];
    updatedResults[editIndex] = newResult;
    setResults(updatedResults);
    setEditIndex(null);
    setNewResult({ student_id: "", subject: "", score: "" });
  };

  const handleDeleteResult = (index) => {
    const updatedResults = results.filter((_, i) => i !== index);
    setResults(updatedResults);
  };

  return (
    <div>
      <h2>Results Management</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Subject</th>
            <th>Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.student_id}</td>
              <td>{result.subject}</td>
              <td>{result.score}</td>
              <td>
                <button onClick={() => handleEditResult(index)}>Edit</button>
                <button onClick={() => handleDeleteResult(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>{editIndex !== null ? "Edit Result" : "Add New Result"}</h3>
      <div className="result-form">
        <input
          type="text"
          name="student_id"
          placeholder="Student ID"
          value={newResult.student_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={newResult.subject}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="score"
          placeholder="Score"
          value={newResult.score}
          onChange={handleInputChange}
        />
        {editIndex !== null ? (
          <button onClick={handleUpdateResult}>Update</button>
        ) : (
          <button onClick={handleAddResult}>Add</button>
        )}
      </div>
    </div>
  );
}

function TeachersPage() {
  return (
    <div className="teachers-container">
      
      <nav className="sidebar">
        <h2>Teacher Portal</h2>
        <ul>
          <li><Link to="/teacher">Profile</Link></li>
          <li><Link to="/teacher/results">Manage Results</Link></li>
        </ul>
      </nav>

    
      <div className="content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/results" element={<ResultsManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default TeachersPage;
