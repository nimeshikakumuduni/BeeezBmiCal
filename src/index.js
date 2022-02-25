import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import HomePage from "./Pages/Home Page/home_page";
// import MyRouter from "./routes/routes";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
