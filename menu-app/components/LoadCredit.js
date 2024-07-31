import { IoIosArrowBack } from "react-icons/io";

const LoadCredit = ({isActive, handleCreditToggle}) => {

    const fundsAvailable = "£0.00";


    return(
        <div className={`load-credit-container ${isActive ? 'open' : ""} `}>
            <div className="go-back">
            <IoIosArrowBack className="back-arrow" onClick={handleCreditToggle} />
            <p>Back</p>
            </div>
            <form>
                <div className="card-container">
                    <div className="funds-box">
                        <h5>Easy Money</h5>
                        <h2>{fundsAvailable}</h2>
                    </div>
                    <img src="/credit-blank.svg" alt="credit-card"/>
                </div>
                <div className="text-container">
                    <h3>Add Credit</h3>
                    <p>Enter a gift code</p>
                </div>
                <input type="text" placeholder="0000-0000-00"></input>
            </form>
            <div className="button-box">
                <button>Add</button>
            </div>
        </div>
    )
}

export default LoadCredit