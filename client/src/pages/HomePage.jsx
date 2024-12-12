//import React, { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
 {/* const navigate = useNavigate();

  useEffect(() => {

    navigate("/login");
  }, [navigate]);*/}

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome To Calvary College</h1>
        <p>Education is Key</p>
      </header>

      

        <section className="quick-links">
          
          <div className="link-grid">
            <a href="/login" className="link-card">Login</a>
              </div>
        </section>
      </div>
    
  );
};

export default HomePage;
