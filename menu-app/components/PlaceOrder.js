import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import CheckOutItem from "./CheckoutItem";

const PlaceOrder = ({
  handleOrderToggle,
  calculateTip,
  adjustCredit,
  isOrderOpen,
  orderItems,
  orderSubTotal,
  AddItemToOrder,
  RemoveItemFromOrder,
  formatToTwoDecimalPlaces,
  
}) => {
  const [deliveryFee, setDeliveryFee] = useState(2.99);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [tipAdded, setTipAdded] = useState(false);
  const [tipValue, setTipValue] = useState(0.00);


  useEffect(() => {
    if (!isOrderOpen) {
      setError(false);
      setSuccess(false);
    }
  }, [isOrderOpen]);

  return (
    <div className={`place-order-container ${isOrderOpen ? "open" : ""}`}>
      <div className="go-back">
        <IoIosArrowBack className="back-arrow" onClick={handleOrderToggle} />
        <p>Back</p>
      </div>
      {orderSubTotal > 0 ? (
        <>
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
              <button
              onClick={(e) => {
                e.preventDefault();
                setTipValue(0.00);
              }}

              >0%</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (tipAdded) {
                    formatToTwoDecimalPlaces(setTipValue(calculateTip(5)));
                  } else {
                    formatToTwoDecimalPlaces(setTipValue(calculateTip(5)));
                    setTipAdded(true);
                  }
                }}
              >
                5%
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (tipAdded) {
                    formatToTwoDecimalPlaces(setTipValue(calculateTip(10)));
                  } else {
                    formatToTwoDecimalPlaces(setTipValue(calculateTip(10)));
                    setTipAdded(true);
                  }
                }}
              >
                10%
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (tipAdded) {
                    formatToTwoDecimalPlaces(setTipValue(calculateTip(15)));
                  } else {
                    formatToTwoDecimalPlaces(setTipValue(calculateTip(15)));
                    setTipAdded(true);
                  }
                }}
              >
                15%
              </button>
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
                    key={item.id}
                    AddItemToOrder={AddItemToOrder}
                    RemoveItemFromOrder={RemoveItemFromOrder}
                    item={item}
                  />
                ))
              ) : (
                <div></div>
              )}
            </div>
            <div className="order-totals">
              <div>
                <p>Subtotal</p>
                <p>£{orderSubTotal + tipValue}</p>
              </div>
              <div>
                <p>Delivery</p>
                <p>£{deliveryFee}</p>
              </div>
              <div className={`error ${error ? "open" : ""}`}>
                <h5 className="error-txt">Insufficient Funds Available</h5>
              </div>
              <div className={`success ${success ? "open" : ""}`}>
                <h5 className="success-txt">Order Placed Successfully</h5>
              </div>
            </div>
          </div>
          <div className="button-box">
            <button
              onClick={(e) => {
                e.preventDefault();
                let newTotal = orderSubTotal + deliveryFee + tipValue;

                if (adjustCredit(newTotal) === -1) {
                  setError(true);
                } else {
                  setSuccess(true);
                }
              }}
            >
              Pay
            </button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <img src="/empty-bag.svg" alt="Empty cart" />
          <button onClick={handleOrderToggle}>Return to Menus</button>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
