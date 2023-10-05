import axios from 'axios';
import React from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import App from './App';
import Login from './Login';

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.post['Accept'] = "application/json";
axios.defaults.withCredentials = true;

const Routess = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <App /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Routess