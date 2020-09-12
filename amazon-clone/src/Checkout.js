import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ bascket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt="add"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg?fbclid=IwAR0qEshFLDDHGSboWp6XdbZ9SPWKS_bF9VzU0H3oNP03M9FntnNM-MKTYAA"
        />
        {bascket?.length === 0 ? (
          <div>
            <h3>{user?.email}</h3>
            <h2 className="checkout__title">Your shopping bascket is empty</h2>
            <p>
              You have no items in your bascket. To buy one or more product "Add
              to bascket" next to the item
            </p>
          </div>
        ) : (
          <div >
            <h2 className="checkout__title">Your shopping bascket.</h2>
            <div className="flip">
            
           
            {/* list out all of the checkout products */}
            <FlipMove > 
            {bascket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
              ))} 
            </FlipMove>
            </div>
            
            </div>
          
        )}
      </div>
     
      {bascket?.length >= 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
      
    </div>
  );
}

export default Checkout;
