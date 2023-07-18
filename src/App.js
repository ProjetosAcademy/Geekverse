import {BrowserRouter, Routes, Route, Navigate, useParams} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>         
        </Routes> 
      </BrowserRouter>
    {/* <footer>footer</footer> */}
    </div>
  );
}

export default App;
