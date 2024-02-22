import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Categories from './Pages/Categories/Categories';
import Courses from './Pages/Courses/Courses';
import Login from './Pages/Login/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
