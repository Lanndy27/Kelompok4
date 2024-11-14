import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TipsBahan from "./pages/Tips Bahan";
import TipsWarna from "./pages/Tips Warna";
import TipsAksesoris from "./pages/Tips Aksesoris";
import ProdukKaos from "./pages/Produk Kaos";
import ProdukJaket from "./pages/Produk Jaket";
import ProdukAksesoris from "./pages/Produk Aksesoris";

const App = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Tips-Bahan" element={<TipsBahan />} />
      <Route path="/Tips-Warna" element={<TipsWarna />} />
      <Route path="/Tips-Aksesoris" element={<TipsAksesoris />} />
      <Route path="/Produk-Kami/Kaos" element={<ProdukKaos />} />
      <Route path="/Produk-Kami/Jaket" element={<ProdukJaket />} />
      <Route path="/Produk-Kami/Aksesoris" element={<ProdukAksesoris />} />{" "}
      {/* Add the new route */}
    </Routes>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
