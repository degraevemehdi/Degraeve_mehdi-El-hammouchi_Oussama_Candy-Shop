import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';
import './Homepage.css'
import axios from 'axios';
import Slider from 'react-slick';

function Homepage() {
    const[products, setProducts] = useState([]);
    useEffect(()=>{
            axios.get('https://fakestoreapi.com/products')
        .then(response =>{
            const data = response.data 
            console.log(response);
            const randomProducts = data.sort(() => 0.5 - Math.random()).slice(0, 4);
            setProducts(randomProducts);
            console.log(` liste produits : ${products}`);

        })
        .catch(error => {
            console.log(`Error : ${error}`);
        })
    },[]);
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
                dots: true
                }
            },
            {
                breakpoint: 600, 
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, 
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };
        
        return (
            <div>
            <h2>Featured Products</h2>
            <Slider {...settings}>
                {products.map(product => (
                <div className="carrousel" key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </div>
                ))}
            </Slider>
            </div>
        );
}

export default Homepage