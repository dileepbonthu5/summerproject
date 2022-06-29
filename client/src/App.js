import './App.css';
import Sports from "./components/Sports";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
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
      <Navbar />
      <About />

      <h1>SportsApp</h1>
      <Sports sports={sports}/>
    </div>
  );
}

export default App;