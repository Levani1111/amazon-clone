import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR0qEshFLDDHGSboWp6XdbZ9SPWKS_bF9VzU0H3oNP03M9FntnNM-MKTYAA"
          alt="amazon-prime banner"
        />
        <div className="home__row">
          <Product
            id="3254354345"
            title="Nwe Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="12321"
            title="Apple Watch Series 5 (GPS + Cellular, 40mm) - ​ Stainless Steel Case with Milanese Loop"
            price={20}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91rEoDeRRWL._AC_SX522_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Apple iPhone 11 (64GB, Purple) [Locked] + Carrier Subscription"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71xn9bCRfhL.jpg"
          />
          <Product
            id="12311212"
            title="Xbox One S 1TB Console"
            price={122.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31Wb4aWDHfL.jpg"
          />

          <Product
            id="12321341"
            title="Apple iPad Air (10.5-inch, Wi-Fi, 256GB) - Gold"
            price={619}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61xJ-9TqlsL._AC_SY550_.jpg"
          />
          <Product
            id="23445930"
            title="Logitech G935 Wireless DTS:X 7.1"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61gOvvFploL._AC_SL1000_.jpg"
          />
          <Product
            id="90829332"
            title="New Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage,"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71bElkQQ7LL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Apple iPhone 11 (64GB, Purple) [Locked] + Carrier Subscription"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX335_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
