import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteAllCookies } from '../../helpers/cookie';
import { useDispatch } from 'react-redux';
import { checkLogin } from '../../actions/Login';

function Logout() {

    // Coá nhiệm vụ xoá hết các cookie đi

    const navigate = useNavigate();
    const dispatch = useDispatch();

    deleteAllCookies();
    useEffect(() =>{
      dispatch(checkLogin(false))
        navigate("/login")
    },[])
  return (
    <div>Logout</div>
  )
}

export default Logout