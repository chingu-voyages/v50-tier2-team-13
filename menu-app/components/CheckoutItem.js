import { FaMinus, FaPlus } from "react-icons/fa";

const CheckOutItem = ({ item }) => {
  return (
    <div className="checkout-item-card">
      <div className="checkout-item-image-box">
        <img src={item.img} alt={item.dsc} />
      </div>
      <div className="checkout-item-info-button-container">
        <div className="checkout-item-info-box">
          <h3>{item.dsc}</h3>
          <p>£{item.price}</p>
        </div>
        <div className="checkout-item-button">
          <button className="minus-button"><FaMinus /></button>
          <p>1</p>
          <button className="plus-button"><FaPlus /></button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
