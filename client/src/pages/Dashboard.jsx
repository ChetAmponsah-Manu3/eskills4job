// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    
    const totalStudents = 1110; 
    const totalTeachers = 120; 
    const totalSubjects = 15;  

    
    const user = { name: 'user' }; 

    const notices = [
        { title: 'End of trimester examination approaching', author: 'Mr. Opoku' },
        { title: 'Time Extension Notice of Semester Admission', author: 'Headteacher' },
        { title: 'Implementation of inter-classes quizes every friday', author: 'Madam Fosua' },
    ]

    return (
        <div className="dashboard-container">
            
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>Education Dashboard</h2>
                </div>
                <ul className="sidebar-menu">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/overview">Overview</Link></li>
                    <li><Link to="/subjects">Subject</Link></li>
                    <li><Link to="/students">Student</Link></li>
                    <li><Link to="/teachers">Teacher</Link></li>
                    <li><Link to="/results">Results</Link></li>
                    <li><Link to="/finance">Finance</Link></li>
                </ul>
            </aside>

          
            <main className="main-content">
          
                <header className="dashboard-header">
                    <h1>Dashboard</h1>
                    <div className="header-actions">
                        <input type="text" placeholder="Search..." className="search-input" />
                        <span className="user-name">{user.name}</span>
                    </div>
                </header>

               
                <div className="statistics-cards">
                    <div className="stat-card">
                        <h3>Total Students</h3>
                        <p>{totalStudents}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Total Teachers</h3>
                        <p>{totalTeachers}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Total Subjects</h3>
                        <p>{totalSubjects}</p>
                    </div>
                </div>

                
                <div className="notices-section">
                    <h2>Notice Board</h2>
                    <ul>
                        {notices.map((notice, index) => (
                            <li key={index}>
                                <h3>{notice.title}</h3>
                                <p>By: {notice.author}</p>
                            </li>
                        ))};
                    </ul>
                </div>
            </main>
        </div>
    )
};

export default Dashboard;
