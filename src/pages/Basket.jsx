import { useSelector } from "react-redux";
import "./Basket.css";
import { Link } from "react-router-dom";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket.basket);

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
                {item.title} - Quantity: {item.quantity} - Total: $
                {item.price * item.quantity}
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
        </div>
      )}
    </div>
  );
};

export default Basket;
