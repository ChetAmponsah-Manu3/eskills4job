import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Overview from './pages/OverviewPage';
import StudentPage from './pages/StudentPage';
import TeachersPage from './pages/TeacherPage';
import Footer from './components/Footer';







function App() {

  return (
   <Router>
   <div>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/overview" element={<Overview />} />
       <Route path="/students" element={<StudentPage />} />
       <Route path="/teachers" element={<TeachersPage />} />
       </Routes>
       <Footer/>
   </div>
 </Router>
);


  
};



export default App;
