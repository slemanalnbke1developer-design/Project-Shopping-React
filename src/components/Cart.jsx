import { useContext } from "react";
import { CartContext } from "../context/context";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2 className="mt-5 pt-5">Your Cart is Empty</h2>
        <Link to="/">
          <Button variant="primary" className="mt-3">
            Go to Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h3 className="my-5 pt-5">Shopping Cart</h3>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Card className="mt-4">
        <Card.Body className="text-end">
          <h5>Total: {totalPrice} USD</h5>
          <Link to="/checkout">
            <Button variant="success" className="mt-3">
              Proceed to Checkout
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
