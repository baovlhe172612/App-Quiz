import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCookies } from '../../helpers/cookie';


function PrivateRoutes() {
  const token = getCookies("token");

  // Kiểm tra nếu không có token thì điều hướng đến trang 403
  return token ? <Outlet /> : <Navigate to="/error403" />;
}

export default PrivateRoutes;
