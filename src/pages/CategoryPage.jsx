import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <h2>Catégorie : {decodeURIComponent(categoryName)}</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px", height: "auto" }}
              />
              <p>{product.title}</p>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
