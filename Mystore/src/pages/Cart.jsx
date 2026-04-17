import { useCart } from "../context/CartContext";
import "../styles/cart.css"

const Cart = () => {
  const { cart, updateQty, removeItem, totalPrice } = useCart();

  return (
    <div className="container">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              
              {/* PRODUCT IMAGE */}
              <img src={item.image} alt={item.name} />

              {/* DETAILS */}
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p className="price">₹{item.price}</p>

                {/* QUANTITY */}
                <div className="qty-box">
                  <button onClick={() => updateQty(item.id, "dec")}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, "inc")}>+</button>
                </div>
              </div>

              {/* REMOVE BUTTON */}
              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* TOTAL SECTION */}
          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;