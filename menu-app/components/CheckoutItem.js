import { FaMinus, FaPlus } from "react-icons/fa";

const CheckOutItem = ({ item, AddItemToOrder, RemoveItemFromOrder }) => {
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
          <button
            onClick={(e) => {
              e.preventDefault();
              RemoveItemFromOrder(item);
            }}
            className="minus-button"
          >
            <FaMinus />
          </button>
          <p>{item.quantity}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              AddItemToOrder(item);
            }}
            className="plus-button"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
