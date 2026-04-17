import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { OrderProvider } from "./context/OrderContext";

function App() {
  return (
    <ProductProvider>
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <BrowserRouter>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/add-product" element={<AddProduct />} />
              </Routes>

            </BrowserRouter>
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
    </ProductProvider>
  );
}

export default App;