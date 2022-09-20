import { Outlet, Navigate } from "react-router-dom";

const ProtectRoute = () => {
  const currentUser = JSON.parse(localStorage.getItem("userCred"));
  
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;
