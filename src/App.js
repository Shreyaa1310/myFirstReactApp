import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Food from './Components/Food';
import SignUp from './Components/SignUp';
import Festival from './Components/Festival';
import NavBar from './Components/NavBar';
import Tourism from './Components/Tourism';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
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
          <Route path="/festival" element={<Festival />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/aboutus" element={<AboutUs/>} />

          </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
