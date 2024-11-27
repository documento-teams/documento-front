import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function RouteComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}