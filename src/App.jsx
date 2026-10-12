import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SubNavbar from "./components/SubNavbar";
import Chackout from "./pages/Chackout";
import Home from "./pages/Home";
import { CartProvider } from "./context/context";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  return (
    <CartProvider>
      <Router>
        <NavBar search={search} setSearch={setSearch} />
        <SubNavbar />
        <Routes>
          <Route
            path="/"
            element={<Home search={search} setSearch={setSearch} />}
          />
          <Route path="/chackout" element={<Chackout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
export default App;
