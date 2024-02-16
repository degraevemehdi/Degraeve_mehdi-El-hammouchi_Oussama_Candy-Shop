import { useDispatch, useSelector } from "react-redux";

import "./Basket.css";
import { Link } from "react-router-dom";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket.basket);
  const isLogin = useSelector((state) => state.auth.isLogin);

  const dispatch = useDispatch();


 const handleEmptyBasket = () => {
  if (isLogin) {
    dispatch({ type: "EMPTY_BASKET" });
  } else {
    alert("You must be logged in to empty the basket.");
  }
};

  

  return (
    <div className="basket_container">
      <nav>
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link to="/basket">
          <i className="fa-solid fa-basket-shopping"></i>
        </Link>
      </nav>
      <h1>Basket</h1>
      {basketItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div>
          <ul>
            {basketItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt="" />
                <div className="basket-item">
                  <p>{item.title} </p>
                  <p>Quantity: {item.quantity} </p>
                  <p>Total: $
                  {item.price * item.quantity}</p> 

                </div>
              </li>
            ))}
          </ul>
          <p>
            Total: $
            {basketItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </p>
          <button onClick={handleEmptyBasket}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Basket;
