import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Fighters from "./pages/Fighters";
import FighterDetail from "./pages/FighterDetail";
import CreateFighter from "./pages/createfighter.jsx";
import EditFighter from "./pages/EditFighter";
import "./index.css";

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#222222' }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/peleadores" element={<Fighters />} />
            <Route path="/peleador/:id" element={<FighterDetail />} />
            <Route path="/crear" element={<CreateFighter />} />
            <Route path="/editar/:id" element={<EditFighter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
