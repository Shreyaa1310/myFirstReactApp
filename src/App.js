import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Food from './Components/Food';
import Technology from './Components/Technology';
import NavBar from './Components/NavBar';
import Tourism from './Components/Tourism';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
                    <Route path='/tourism' element={<Tourism/>} />

          <Route path='/food' element={<Food/>} />
          <Route path="/technology" element={<Technology/>}/>
          </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
