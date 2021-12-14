import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { KidsPage, WomenPage, MenPage } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/women" element={<WomenPage />} />
        </Routes>
        <Routes>
          <Route path="/men" element={<MenPage />} />
        </Routes>
        <Routes>
          <Route path="/kids" element={<KidsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
