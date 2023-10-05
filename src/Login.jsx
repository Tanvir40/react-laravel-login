import React, {useState} from 'react';
import FormInput from './components/FormInput';
import "./App.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [loginInput, setLogin] = useState({
       email: 'tonmoy199844@gmail',
       password: 'Abcd@1234',
       error_list: [],
    });
    const handleInput = (e) => {
      e.persist();
      setLogin({...loginInput, [e.target.email]: e.target.value});
  }

  const loginSubmit = (e) => {
    e.preventDefault();
      const data = {
        email: loginInput.email,
        password: loginInput.password,
      }
      console.log(data)

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/login` , data).then(res => {

        if(res.data.status === 200){

          localStorage.setItem('auth_token' ,res.data.token);
          localStorage.setItem('auth_name' ,res.data.name);
          navigate('/');

        }else if(res.data.status === 401){

        }else{
          setLogin({...loginInput, error_list: res.data.validation_errors });
        }

      });
    });
  }
    
  return (
    <div className="app">
      <form onSubmit={loginSubmit}>
        <h1>Login Form</h1>
        
        <input  type="email" name="email" placeholder="Enter Your Email" onChange={handleInput} />
        <span>{loginInput.error_list.email}</span>
< br/>
        <input type="password" name="password" placeholder="Enter Your Password" onChange={handleInput} />
        <span>{loginInput.error_list.password}</span>

       {/* <FormInput erroMessage={loginInput.error_list.password} labelMessage="Email" type="email" name="email" placeholder="Enter Your Email" onChange={handleInput} />

       <FormInput erroMessage={loginInput.error_list.password} labelMessage="Password" type="password" name="password" placeholder="Enter Your Password" patTern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z0-9\d@$!%*#?&]{8,20}$" onChange={handleInput} /> */}

       <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login