import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css";
import axios from "axios";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const data = response.data;
        console.log(response);
        const randomProducts = data.sort(() => 0.5 - Math.random()).slice(0, 4);
        setProducts(randomProducts);
        console.log(` liste produits : ${products}`);
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const data = response.data;
        console.log(response);
        setAllProducts(data);
        console.log(` liste produits : ${allProducts}`);
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }, []);
  const displayFirst5Words = (title) => {
    const words = title.split(" ").slice(0, 5).join(" ");
    return words.length < title.length ? words + "..." : words;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="band_container">
        <div className="band">
          <h1>WELCOME TO KEISLE STORE</h1>
          <p>Use code &quot;igris10&quot; to get 10% discount</p>
          <p>Get the best products at the best prices</p>
        </div>
      </div>
      <nav className="nav-contain">
        <ul>
          <li>
            <Link to="/category/men's clothing">
              <p>Men&apos;s clothing</p>
            </Link>
          </li>
          <li>
            <Link to="/category/women's clothing">
              <p>Women&apos;s clothing</p>
            </Link>
          </li>
          <li>
            <Link to="/category/jewelery">
              <p>Jewelery</p>
            </Link>
          </li>
          <li>
            <Link to="/category/electronics">
              <p>Electronics</p>
            </Link>
          </li>
        </ul>
        <Link to="/login" className="user_login">
          <i className="fa-solid fa-user"></i>
          <p>{isLogin ? `Welcome, ${user.username}` : "Guest"}</p>
        </Link>
        <Link to="/basket">
          <i className="fa-solid fa-basket-shopping"></i>
        </Link>
      </nav>
      <div className="carousel_container">
        <h2>Featured Products</h2>
      </div>

      <Slider {...settings}>
        {products.map((product) => (
          <div className="carrousel" key={product.id}>
            <img src={product.image} alt={product.title} />
            <Link to={`/product/${product.id}`}>
              <h3>{displayFirst5Words(product.title)}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </Slider>

      <div className="allProducts">
        {allProducts.map((product) => (
          <div className="card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="img_container">
                <img src={product.image} alt={product.title} />
              </div>
              <h3>{displayFirst5Words(product.title)}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
