import { VscError } from "react-icons/vsc";
import { useEffect, useState } from "react";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "hdsfiajs",
    photo:
      "https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70&crop=false",
    name: "Macbook",
    price: "8777",
    quantity: 4,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 100;
const discount = 400;
const total = subtotal + tax + shippingCharges;

function Cart() {
  const [couponCode, setCouponCode] = useState("");
  const [isValidcouponCode, setisValidCouponCode] = useState(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) setisValidCouponCode(true);
      else setisValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutID);
      setisValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItems key={idx} cartItems={i} />)
        ) : (
          <h1> No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹ {subtotal}</p>
        <p>ShippingCharges: ₹{shippingCharges}</p>
        <p> Tax: ₹ {tax}</p>

        <p>
          discount: <em className="red">- ₹{discount}</em>
        </p>
        <p>
          <b>Total:₹{total} </b>
        </p>
        <input
          type="text"
          placeholder="{coupon Code}"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidcouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid counpon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
}

export default Cart;
