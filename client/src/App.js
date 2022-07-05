import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sports from "./components/pages/Sports.js";
import About from "./components/pages/About.js";
import Navbar from "./components/pages/Navbar.js";
import Login from "./components/pages/Login.js";
import Register from "./components/pages/Register.js";
import Profile from "./components/pages/Profile.js";

const sports = [
  {
      id: 1,
      title: "football"
  },
  {
      id: 2,
      title: "baseball"
  },
  {
      id: 3,
      title: "hockey"
  },
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route index element={<About />}/>
            <Route path="sports" element={<Sports sports={sports}/>}/>
            <Route path="register" element={<Register />}/>
            <Route path="login" element={<Login />}/>
            <Route path="profile" element={<Profile />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;