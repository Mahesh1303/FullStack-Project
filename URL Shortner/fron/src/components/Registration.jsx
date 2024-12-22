import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/UserAuthSlice";
import Header from "./Header";

function Registration() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:500/user", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        alert("User Created Successfully");
        dispatch(loginUser({ email }));  // Automatically log the user in after registration
        navigate("/url");
      }
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
       <Header/>
    <div className="flex justify-center items-center h-screen w-full  ">

      <div className="max-w-md w-full bg-slate-200 p-8 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-600 mb-6">
          Registration
        </h1>
        <form onSubmit={handleRegisterSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-600 font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-3 rounded-full hover:bg-red-600 transition duration-300"
          >
            Register
          </button>

          {/* Already Have an Account Link */}
          <div className="text-center mt-4">
            <Link to="/" className="text-blue-500 hover:underline">
              Already have an account? Login here.
            </Link>
          </div>
        </form>
      </div>
    </div>


    </div>
     
  );
}

export default Registration;
