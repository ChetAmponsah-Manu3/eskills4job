//import React from 'react';
import { Link } from 'react-router-dom';
import  './sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/FAQ">FAQ</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
    

        </ul>
    </aside>
  );
}

export default Sidebar;