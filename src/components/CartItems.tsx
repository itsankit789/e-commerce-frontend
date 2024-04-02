import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
type CartItemsProps = {
  cartItems: any;
};
function CartItems({ cartItems }: CartItemsProps) {
  // productId: "hdsfiajs",
  // photo:
  //   "https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70&crop=false",
  // name: "Macbook",
  // price: "8777",
  // quantity: 4,
  // stack: 10,
  const { photo, productId, name, price, quantity } = cartItems;

  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button>-</button>
        <p> {quantity}</p>
        <button> +</button>
      </div>

      <button>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItems;
