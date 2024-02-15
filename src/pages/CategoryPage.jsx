import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <h2>Catégorie : {decodeURIComponent(categoryName)}</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "auto" }}
            />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
