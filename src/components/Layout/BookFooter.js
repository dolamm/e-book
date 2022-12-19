import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import {app, auth} from '../Firebase';
import { Link } from "react-router-dom";
import "../../css/Layout/Footer.css"
import { FaFacebook, FaInstagram, FaGithub,  } from "react-icons/fa";
import logo from '../../img/logo.png'

export function Footer() {
    return (    
        <div className="Footer">
            <ul className="Footer-item">
                <li>
                    <img src={logo} alt="logo-footer" className="logo-footer" />
                </li>
                <li>
                    Address: 35 Lê Văn Chí, P. Linh Trung, Quận Thủ Đức, TP.HCM
                </li>
                <li>
                    <a className="map" href="/">Show on map</a>
                </li>
            </ul>

            <ul className="Footer-item">
                <li>
                    <h5 className="Footer-title">Need Help</h5>
                </li>
                <li>
                    <b>Phone: +(84)-0382279474</b>
                </li>
                <li>Mail contact: 
                    <ul className="email">
                        <li>
                            <a className="email-address" href="mailto:20521328@gm.uit.edu.vn">20521328@gm.uit.edu.vn</a>
                        </li>
                        <li>
                            <a className="email-address" href="mailto:20520930@gm.uit.edu.vn">20520930@gm.uit.edu.vn</a>
                        </li>
                        <li>
                            <a className="email-address" href="mailto:20521001@gm.uit.edu.vn">20521001@gm.uit.edu.vn</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul className="Footer-item">
                <li>
                    <h5 className="Footer-title">Social Network</h5>
                </li>
                <li>
                    <FaFacebook/> Facebook
                </li>
                <li>
                    <FaInstagram/> Instagram
                </li>
                <li>
                    <FaGithub/> Github
                </li>
            </ul>

            <ul className="Footer-item">
                <li>
                    <h5 className="Footer-title">Authors</h5>
                </li>
                <li>
                    Nguyễn Thanh Hiếu
                </li>
                <li>
                    Trương Quốc Thắng
                </li>
                <li>
                    Đỗ Công Lâm
                </li>
            </ul>
            <ul className="Footer-item">
                <li>
                    <h5 className="Footer-title">Category</h5>
                </li>
                <li>Action 
                    
                </li>
                <li>Kids 
                    
                </li>
                <li>Comedy 
                    
                </li>
                <li>Drama 
                    
                </li>
            </ul>

            <hr className="style"/> 
            <p className="copyright">
                Copyright &copy; 2022 BookStory. All rights reserved.
            </p>
    </div>  
)}