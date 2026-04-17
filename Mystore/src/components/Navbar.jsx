import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { user, login, logout } = useAuth();

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="navbar">
      <h2 className="logo">ShopEasy</h2>

      <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
          <Link to="/add-product">Add Product</Link> 

        {user ? (
          <>
            <span className="user">Hi, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => login("Akash")}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;