import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const LoadCredit = ({isActive, handleCreditToggle, loadUserCredit}) => {

    const [fundsAvailable, setFundsAvailable] =  useState(0.00);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        loadUserCredit(10);
        setFundsAvailable(prevFunds => prevFunds + 10);
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
                <input required type="text" placeholder="0000-0000-00"></input>
                <div className="button-box">
                <button type="submit">Add</button>
            </div>
            </form>

        </div>
    )
}

export default LoadCredit