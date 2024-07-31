import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const LoadCredit = ({isActive, handleCreditToggle, loadUserCredit, userCredit, discountCodes}) => {

    const [fundsAvailable, setFundsAvailable] =  useState(userCredit);
    const [addedValue, setAddedValue] = useState(0);

    const handleInputChange = (e) => {
        setCode(e.target.value); 
      };

    const [code, setCode] = useState('');

    const [error, showError] = useState (false);
    const [success, showSuccess] = useState (false);

    const handleOnSubmit = (e) => {
        let validCode = false;
        e.preventDefault();
        discountCodes.map((item) => {
            if (code.toLocaleLowerCase() === item){
                const value = parseInt(code.slice(-2));
                loadUserCredit(value);
                setFundsAvailable(prevFunds => prevFunds + value);
                validCode = true;
                setAddedValue(value);

            }
        })

        if (validCode) {
            showError(false); 
            showSuccess(true);
        } else {
            showError(true); 
        }
    }



    return(
        <div className={`load-credit-container ${isActive ? 'open' : ""} `}>
            <div className="go-back">
            <IoIosArrowBack className="back-arrow" onClick={handleCreditToggle} />
            <p>Back</p>
            </div>
            <form onSubmit={handleOnSubmit}>
                <div className="card-container">
                    <div className="funds-box">
                        <h5>Easy Money</h5>
                        <h2>£{fundsAvailable}.00</h2>
                    </div>
                    <img src="/credit-blank.svg" alt="credit-card"/>
                </div>
                <div className="text-container">
                    <h3>Add Credit</h3>
                    <p>Enter a gift code</p>
                </div>
                <input value={code} onChange={handleInputChange} required type="text" placeholder="0000-0000-00"></input>
                <div className={`error${error?"open" : ""}`}>
                    <h5 className="error-txt">Invalid Discount Code</h5>
                </div>
                <div className={`success${success?"open" : ""}`}>
                <h5 className="success-txt">£{addedValue} Easy Money Added</h5>
                </div>
                <div className="button-box">
                <button type="submit">Add</button>
            </div>
            </form>

        </div>
    )
}

export default LoadCredit