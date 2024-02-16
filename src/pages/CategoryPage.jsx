import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const isItemAdded = useSelector((state) => state.basket.isItemAdded);

  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/category/${encodeURIComponent(
          categoryName
        )}`
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [categoryName]);

  const addToBasket = (product) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: product,
    });

    setTimeout(() => {
      dispatch({ type: "RESET_ADD_STATUS" });
    }, 3000);
  };

  return (
    <div>
      <Link to="/basket">
        <h1>Basket</h1>
      </Link>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <h2>Catégorie : {decodeURIComponent(categoryName)}</h2>
      {isItemAdded && <p>Item successfully added to the basket!</p>}
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <div>
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "auto" }}
                />
                <p>{product.title}</p>
              </Link>
              <p>${product.price}</p>
              <button onClick={() => addToBasket(product)}>
                Add to Basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
