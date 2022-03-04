import './App.css';
import EasyRentalAppBar from './components/EasyRentalAppBar';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <div className="App">
      <div>
        <EasyRentalAppBar/>
        <Register/>
        <Login/>
      </div>
    </div>
  );
}

export default App;
