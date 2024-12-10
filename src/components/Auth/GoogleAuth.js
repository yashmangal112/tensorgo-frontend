import React from "react";
import { GoogleLogin } from "react-oauth/google";
import axios from "axios";

const GoogleAuth = ({ onLogin }) => {
  const handleSuccess = async (response) => {
    const result = await axios.post("/auth/google/callback", { token: response.tokenId });
    onLogin(result.data.user);
  };

  const handleFailure = (error) => {
    console.error("Google Login Failed", error);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleAuth;
