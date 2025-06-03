// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login/login";
import Home from "../pages/home/home";

const AppRouter = () => {
  return (
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
  );
};

export default AppRouter;
