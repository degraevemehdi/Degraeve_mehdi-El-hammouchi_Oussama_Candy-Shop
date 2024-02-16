import { useSelector } from "react-redux";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket.basket);

  return (
    <div>
      <h1>Basket</h1>
      {basketItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div>
          <p>Your basket contains:</p>
          <ul>
            {basketItems.map((item) => (
              <li key={item.id}>
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
