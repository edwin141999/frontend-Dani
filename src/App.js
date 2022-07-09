import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Recover from './components/Recover';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Password from './components/Password';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/login' element={<Login />} />
          <Route path='/recover' element={<Recover />} />
          <Route path='/password' element={<Password />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
