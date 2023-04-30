import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes initialEntries={["/login"]}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
