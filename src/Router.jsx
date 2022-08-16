import { Route, Routes } from "react-router-dom";
import { Category } from "./pages/Category";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}
