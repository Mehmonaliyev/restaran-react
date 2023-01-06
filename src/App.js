import { Route, Routes } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Login from './components/Login';
import Kirish from './components/Kirish';
import Book from './components/Book';


function App() {
  return (
    <div className='container-fluid'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/kirish" element={<Kirish/>} />
      </Routes>


    </div>
  );
}

export default App;
