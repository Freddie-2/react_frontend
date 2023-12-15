import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Drivers from './components/Drivers';
import Driversmanage from './components/Driversmanage';
import Vehicles from './components/Vehicles';
import Vehiclesmanage from './components/Vehiclesmanage';
import Trips from './components/Trips';
import Tripsmanage from './components/TripsManage';
import Licenses from './components/Licenses';
import Licensesmanage from './components/Licensesmanage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/drivers" element={<Drivers/>} />
         <Route path="/react_frontend/managed" element={<Driversmanage/>} />
         <Route path="/react_frontend/vehicles" element={<Vehicles/>} />
         <Route path="/react_frontend/managev" element={<Vehiclesmanage/>} />
         <Route path="/react_frontend/trips" element={<Trips/>} />
         <Route path="/react_frontend/managet" element={<Tripsmanage/>} />
         <Route path="/react_frontend/licenses" element={<Licenses/>} />
         <Route path="/react_frontend/managel" element={<Licensesmanage/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;