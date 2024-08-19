import React from 'react';
import './Login.scss';
import { login } from '../../service/userService';
import { useNavigate } from 'react-router-dom';
import { setCookies } from '../../helpers/cookie';
import { useDispatch } from 'react-redux';
import { checkLogin } from '../../actions/Login';
function Login() {

  const navigate = useNavigate();


  const dispatch = useDispatch();



  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    const email = e.target[0].value;
    const password = e.target[1].value
    const response = await login(email, password);


    if (response.length > 0) {
      console.log("response in login.js",response);
      setCookies("id", response[0].id, 1);
      setCookies("fullName", response[0].fullName, 1);
      setCookies("email", response[0].email, 1);
      setCookies("token", response[0].token, 1);
      dispatch(checkLogin(true))
      navigate("/");
    } else {
      alert("Sai tài khoản hoặc mật khẩu")
    }

  }
  return (
    <div className="login-container">
      <h2>Login quiz</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <input type="email" placeholder='Enter the email' />
        </div>
        <div>
          <input type="password" placeholder='Enter the password' />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
