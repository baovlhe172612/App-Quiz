import React from 'react';
import { checkExist, register } from '../../service/userService';
import { generateToken } from '../../helpers/generateToken';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(fullName);
    console.log(email);
    console.log(password)
    const checkEmailExist = await checkExist("email", email);
    console.log(checkEmailExist);
    try {

      const checkEmailExist = await checkExist("email", email);
      console.log(checkEmailExist);

      if (checkEmailExist.length > 0) {
        alert("Email đã tồn tại");
      } else {
        const options = {
          fullName: fullName,
          email: email,
          password: password,
          token: generateToken(),
        };

        const response = await register(options);
        console.log("response", response);

        if (response) {
          navigate("/login");
        } else {
          alert("Đăng kí thành công");
        }
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Có lỗi xảy ra trong quá trình đăng kí. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Enter the userName" />
        </div>
        <div>
          <input type="email" placeholder="Enter the email" />
        </div>
        <div>
          <input type="password" placeholder="Enter the password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
