import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logoutUser } from '../store/UserAuthSlice';


function Logout() {
    const navigate = useNavigate();
    const dispatch=useDispatch()

    
  const handleLogout = () => {

    navigate("/");
    dispatch(logoutUser())
  };
  return (
    <button
    className="bg-red-600 place-content-center p-4 rounded-3xl text-white"
    onClick={handleLogout}
  >
    Logout
  </button>
  )
}

export default Logout