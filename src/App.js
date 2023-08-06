import './App.css';
import Weather from './Components/Weather';
import Crud from './Components/Crud';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Nores from './Components/Nores';
import Login  from './Components/Login';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      {/* Routing */}
      <Routes>
        {/* Default Home Page */}
        <Route path='/' element={<Home />} />
        <Route path="weather" element={<Weather />} />
        <Route path="crud" element={<Crud />} />
        {/* Error No Page found */}
        <Route path="*" element={<Nores />} />
        <Route path='login' element={<Login />} />
        <Route path='welcome-page/:username' element={<Welcome />} />
      </Routes>

    </div>
  );
}

export default App;
