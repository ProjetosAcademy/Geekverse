import {BrowserRouter, Routes, Route, Navigate, useParams} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>         
        </Routes> 
      </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
