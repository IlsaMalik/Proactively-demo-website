import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Doctors from './pages/Doctors/Doctors';
import Patients from './pages/Patients/Patients';
import ListPractice from './pages/ListPractice/ListPractice';
import Employers from './pages/Employers/Employers';
import Courses from './pages/Courses/Courses';
import Books from './pages/Books/Books';
import Speakers from './pages/Speakers/Speakers';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/list-practice" element={<ListPractice />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/books" element={<Books />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;