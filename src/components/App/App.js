import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppUI } from "./AppUI";
import { Login } from "../Login/Login";
import { Dashboard } from "../Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppUI />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
