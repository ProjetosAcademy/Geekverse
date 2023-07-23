import {BrowserRouter, Routes, Route, Navigate, useParams} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/register' element={<Register/>}/>         
          <Route path='/login' element={<Login/>}/>         
          <Route path='/' element={<Home/>}/>         
        </Routes> 
    <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
