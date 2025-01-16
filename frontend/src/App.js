import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ChangePassword from './components/ChangePassword';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
      <div className='form-container'>
        <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/change-password" element={<ChangePassword/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
