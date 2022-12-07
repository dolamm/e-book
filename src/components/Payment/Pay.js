import "../../css/Payment/Pay.css";
import Book from '../../img/book1.png'
import { FaMoneyBillWave } from "react-icons/fa";
import logo from '../../img/logo.png'
import { Footer } from '../Layout/BookFooter';

export function Pay() {
    return (
        <div className='Payment'>
            <p>Để trang thông báo đăng nhập thành công vào: có ava và logout</p>
            <p className="Pay-title">
                <img src={logo} alt="logo" className="logo-pay" />
                <span>Payment</span>
            </p>
            <p className="Pay-product">
                <div className="Pay-Title">
                    <p className="Pay-Title-Product">Product</p>
                    <div className="Pay-Title-Right">
                        <p className="Pay-Title-Unit-Price Pay-Title-Author">Author</p>
                        <p className="Pay-Title-Unit-Price Pay-Title-Total">Total Price</p>
                    </div>
                </div>
                {/* test */}
                <div className="Pay-detail-product">
                    <img src={Book} alt="book" className="Pay-book-img"/>
                    <div className="Pay-book-name">
                        Ten sach. Nếu tên sách dài hơn width hiện ... 
                    </div>
                    <div className="Pay-book-format">
                        Format: Audio hoặc Ebook
                    </div>
                    <div className="Pay-detail-author">
                        Tên tác giả
                    </div>
                    <div className="Pay-detail-Total">
                        50 USD
                    </div>
                </div>
                
                <hr />
                <div className="Pay-money">
                    <div className="Pay-method">
                        <p>Payment methods</p>
                        <button className="Pay-method-choose">
                            <span>Momo</span>
                        </button>
                        <select  className="Pay-method-choose Bank">
                            <option value="Card" selected disabled>credit card</option>
                            <option value="ACB">Ngân hàng TMCP Á Châu (ACB)</option>
                            <option value="Vietcombank">Ngân hàng TMCP Ngoại Thương Việt Nam(Vietcombank)</option>
                            <option value="Agribank">Ngân hàng Nông Nghiệp và Phát triển nông thôn Việt Nam(Agribank)</option>
                        </select >
                        
                    </div>
                    <hr />
                    <div className="Pay-total-money">
                        <span className="Total-payment">Total payment:
                            <span className="Total-payment-money">200 USD</span>
                        </span>
                        <br />
                        <button className="btn-buybook">
                            <FaMoneyBillWave />
                            <b className="btn-buybook-text">Buy</b>
                        </button>
                        <span className="rules">Clicking <span>"Buy"</span> means that you agree to purchase</span>
                    </div>
                </div>
            </p>
            <Footer />
        </div>
    );
}