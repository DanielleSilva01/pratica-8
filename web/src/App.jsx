import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1> Estudo de Caso</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
