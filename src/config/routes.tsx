import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import User from "../pages/User";
import Home from "../pages/Home";

export default function Routage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </Router>
  );
}