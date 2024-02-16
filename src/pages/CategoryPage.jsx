import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./CategoryPage.css";

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

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
    <div className="category_container">
      <nav>
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link to="/basket">
          <i className="fa-solid fa-basket-shopping"></i>
        </Link>
      </nav>

      <h2>Category : {decodeURIComponent(categoryName)}</h2>

      <div className="women_clothing">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>${product.price}</p>
            </Link>
            <button onClick={() => addToBasket(product)}>Add To Basket</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
