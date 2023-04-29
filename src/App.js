import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Layout from "./components/Layout";
import Map from "./screens/Map";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Layout/>}>
          <Route path="map" element={<Map/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
