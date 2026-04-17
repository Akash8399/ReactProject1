import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem, updateQty } = useCart();

  return (
    <div style={styles.card}>
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <p>Qty: {item.qty}</p>

      <button onClick={() => updateQty(item.id, "inc")}>+</button>
      <button onClick={() => updateQty(item.id, "dec")}>-</button>
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;

const styles = {
  card: {
    border: "1px solid #aaa",
    padding: "10px",
    margin: "10px",
  },
};