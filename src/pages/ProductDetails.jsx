import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details: ", error);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
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
    <div className="product_details_container">
      <nav>
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link to="/basket">
          <i className="fa-solid fa-basket-shopping"></i>
        </Link>
      </nav>

      <div className="product_detail">
        <h2>Product Details</h2>

        <img src={product.image} alt={product.title} />
        <p>{product.title}</p>
        <p>⭐{product.rating.rate}</p>

        <p>${product.price}</p>

        <p>Product Description: {product.description}</p>
        <button onClick={() => addToBasket(product)}>Add To Basket</button>
      </div>
    </div>
  );
};

export default ProductDetails;
