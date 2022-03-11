import './App.css';
import EasyRentalAppBar from './components/EasyRentalAppBar';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import RegisterConfirmation from './components/RegisterConfirmation';
import UserHome from './components/UserHome';
import RegisterProduct from './components/RegisterProduct';

function App() {
  return (
    <div className="App">
      <div>
      <EasyRentalAppBar/>
      <Routes>
        <Route  path="/"  element={<Login/>} />
        <Route  path="/registerUser"  element={<Register/>} />
        <Route  path="/registerConfirmation"  element={<RegisterConfirmation/>} />
        <Route  path="/userHome"  element={<UserHome/>} />
        <Route  path="/registerProduct"  element={<RegisterProduct/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
