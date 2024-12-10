import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vZXhhbXBsZS5jb20vcGhvdG8uanBnIn0.-e93x55LTAU1qUpYlNzuFR-cN7JeBz7lQxzpYSwg4T0";
const decoded = jwtDecode(token);

const GoogleLoginButton = ({ onSuccess }) => {
  const handleSuccess = async (response) => {
    try {
      // Decode the credential to get user information
      const decodedToken = jwtDecode(response.credential);
      const userData = {
        name: decodedToken.name,
        email: decodedToken.email,
        picture: decodedToken.picture,
        googleID: decodedToken.sub,

      };
      onSuccess(userData);
      console.log(userData);
      
    } catch (error) {
      console.error("Error decoding Google credential:", error);
    }
  };

  const handleFailure = (error) => {
    console.error("Google Login Error:", error);
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleFailure}
    />
  );
};

export default GoogleLoginButton;
