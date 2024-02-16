import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <div>
      <Link to="/basket">
        <p>Basket</p>
      </Link>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <h2>Product Details</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>⭐{product.rating.rate}</p>

      <p>${product.price}</p>

      <p>Product Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
