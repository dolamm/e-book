import "../../css/Payment/Pay.css";
import { FaCcAmazonPay, FaPlusCircle, FaLongArrowAltRight, FaSearch, FaEdit } from "react-icons/fa";
import $ from 'jquery';

export function SuccessPay() {
    $(document).ready(function () {
        let notification = document.getElementById('notification');
        for(let i = 0; i < 3; i++){
            setTimeout(() => {
                notification.innerHTML =  "Redirecting to home page in " + (3 - i) + " seconds" + "<br />";
            }, 1000 * i);
        }
        setTimeout(() => {
            window.location.href = "/";
        }, 3000);
    })
    return (
        <div className='success-payment'>
            
            <FaCcAmazonPay className="success-payment-icon" />
            <h2>THANK YOU!</h2>
            <h4>PAYMENT DONE SUCCESSFULLY</h4>
            <p id="notification"></p>
        </div>
    );
}