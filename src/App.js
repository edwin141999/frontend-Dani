import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Recoverpassword from './components/Recoverpassword';
import Register from './components/Register';
import Update from './components/Update';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/login' element={<Login />} />
          <Route path='/recoverpassword' element={<Recoverpassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/update' element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
