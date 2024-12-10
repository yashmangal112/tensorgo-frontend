import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "../GoogleLoginButton";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      console.log(credentialResponse);
      const response = await axios.post("http://localhost:5000/auth/google", { credentialResponse });
      const userData = response.data.user;

      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/dashboard");
      console.log("User logged in successfully:", userData);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <><div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Welcome to the Customer Service Platform</h1>
        <p className="text-center text-gray-600 mb-8">Please Sign in to continue</p>

        <div className="flex justify-center mb-6">
          <GoogleLoginButton onSuccess={handleLoginSuccess} />
        </div>
      </div>
      <p className="h-2  mt-5 text-white font-semibold bottom-0 relative">Developed by Yash Mangal (2021kuec2047@iiitkota.ac.in)</p>
    </div>
    </>
  );
};

export default Login;
