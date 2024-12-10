import React from "react";
import ReactDOM from "react-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Replace with your actual Google Client ID
const CLIENT_ID = '900269774170-hld2nm5d0mckm8vobb1c6ke2ac72p4of.apps.googleusercontent.com';


ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
