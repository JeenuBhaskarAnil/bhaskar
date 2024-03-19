import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import OrderDelivered from "./OrderDelivered";

import axios from "axios";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [showOrder, setShowOrder] = useState(false);

  const totalPrice = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const [billDetails, setOrderDetails] = useState({
    'username' : '',
    'tableno' : '',
    'totalPrice' : totalPrice,
  });

  
  const orderHanlder = (e) => {
    // console.log(cartCtx);
    // console.log(billDetails.username);
    // alert("HI");
    if (billDetails.username && billDetails.tableno) {
      axios.post('http://localhost:4222/addorder', { items: cartCtx.items, billDetails })
      .then((res) => {
        // console.log(cartCtx.items);
        console.log("Order Placed!");
        // console.log(billDetails)
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });

      cartCtx.clearall();
      setShowOrder(true);
    } else {
      alert('Please provide valid username and tableno\nIt helps us to serve your order quickly!');
    }
    
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {!showOrder ? (
        <>
          {cartItems}
          <div className={classes.total}>
            <span>Total Price</span>
            <span>{totalPrice}</span>
          </div>
          <div className={classes.actions}>
            <label>Table No: </label>
            <input
              type="Number"
              min={0}
              max={100}
              name="tableno"
              className={classes.fortableno}
              value={billDetails.tableno}
              onChange={(e) => setOrderDetails({ ...billDetails, tableno: e.target.value})}/>
            <label>Username: </label>
            <input 
              type="text"
              name="username"
              className={classes.usernamefield}
              value={billDetails.username}
              onChange={(e) => setOrderDetails({ ...billDetails, username: e.target.value})}/>
            
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
            {hasItems && (
              <button className={classes.button} onClick={orderHanlder}>
                Order
              </button>
            )}
          </div>
        </>
      ) : (
        <OrderDelivered onClose={props.onClose} />
      )}
    </Modal>
  );
};

export default Cart;
