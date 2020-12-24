import React from "react";
import "./Home.css";
import Product from './Product';
function Home(){
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" alt="" 
                src="https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg"
                />
                {/* Product id ,title , price , rating , image  */}
                
                <div className="home__row">
                    <Product 
                    title ="The Jhansi Rani Book" 
                    price={200.90}
                    imgname="https://youngindiabooks.com/sites/default/files/styles/large/public/book_cover_472.jpg?itok=Ry5ZRioU"
                    rating={5}
                    id={1233}
                    />
                    <Product 
                    title ="Vase" 
                    price={130.12}
                    imgname="https://images-na.ssl-images-amazon.com/images/I/51mfjWJLERL._AC_SL1000_.jpg"
                    rating={4}
                    id={1222}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    title ="Baby Dress" 
                    price={200.90}
                    imgname="https://images-na.ssl-images-amazon.com/images/I/710uus91eBL._AC_UX385_.jpg"
                    rating={5}
                    id={1236}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    title ="Knife" 
                    price={200.90}
                    imgname="https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16"
                    rating={3}
                    id={1237}
                    />
                    <Product 
                    title ="Grass Plant" 
                    price={278.90}
                    imgname="https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Plants+Dec-19-Dec-20/fibre-optic-grass-plant.jpg"
                    rating={5}
                    id={1238}
                    />
                    <Product 
                    title ="Echo" 
                    price={1200.90}
                    imgname="https://www.therange.co.uk/_m3/1/4/1569833410_2_1676.jpg"
                    rating={5}
                    id={1239}
                    />
                </div>
            </div>
            {/*  */}
        </div>
    );
}
export default Home;