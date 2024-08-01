import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import CheckOutItem from "./CheckoutItem";

const PlaceOrder = ({ handleOrderToggle, isOrderOpen, orderItems }) => {
  const [orderSubTotal, setOrderSubTotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(2.99);

  return (
    <div className={`place-order-container ${isOrderOpen ? "open" : ""}`}>
      <div className="go-back">
        <IoIosArrowBack className="back-arrow" onClick={handleOrderToggle} />
        <p>Back</p>
      </div>
      <div className="page-title">
        <h2>Place Your Order</h2>
      </div>

      <div className="address-title">
        <h3>Delivery Address</h3>
      </div>

      <div className="address-section">
        <div className="lhs">
          <div className="address-icon">
            <IoLocationOutline className="location-icon" />
          </div>
          <div className="address-box">
            <div className="address-details">
              <p>10 Default Street</p>
              <p>London</p>
            </div>
          </div>
        </div>
        <div className="rhs">
          <div className="arrow-icon-box">
            <IoIosArrowForward className="arrow-fwd-icon" />
          </div>
        </div>
      </div>

      <div className="tip-section">
        <div className="tip-title">
          <h3>Add Tip</h3>
        </div>
        <div className="buttons-box">
          <button>0%</button>
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
        </div>
      </div>

      <div className="summary-section">
        <div className="tip-title">
          <h3>Order Summary</h3>
        </div>
        <div className="order-box">
          {orderItems && orderItems.length > 0 ? (
            orderItems.map((item) => (
            <CheckOutItem 
                item={item} />
          )) 
        ): (
            <div></div>
          )}
        </div>
        <div className="order-totals">
          <div>
            <p>Subtotal</p>
            <p>£{orderSubTotal}</p>
          </div>
          <div>
            <p>Delivery</p>
            <p>£{deliveryFee}</p>
          </div>
        </div>
      </div>

      <div className="button-box">
        <button>Pay</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
