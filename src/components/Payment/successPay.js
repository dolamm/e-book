import "../../css/Payment/Pay.css";
import { FaCcAmazonPay, FaPlusCircle, FaLongArrowAltRight, FaSearch, FaEdit } from "react-icons/fa";


export function successPay() {
    return (
        <div className='success-payment'>
            
            <FaCcAmazonPay className="success-payment-icon" />
            <h2>THANK YOU!</h2>
            <h4>PAYMENT DONE SUCCESSFULLY</h4>
            <p>Click here to return to homepage</p>
            <button>Home</button>
        </div>
    );
}