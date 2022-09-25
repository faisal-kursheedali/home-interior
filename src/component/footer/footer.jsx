import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.webp"
const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-about-app">
                        <div className="footer-brand">
                        <img src={logo} alt="" className="footer-brand-img" /><span className="footer-brand-name">Interior</span>

                        </div>
                        is an ecommerce app for buying interior products for domastic purposes.This web app is build by faisal.k <span className="footer-bold">@neog camp</span> with❤️
                    </div>
                    <div className="footer-link">
                        <div className="footer-list-head">Link</div>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="/" className="footer-list-item-link">Home</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/" className="footer-list-item-link">Cart</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-socialmedia">
                        <div className="footer-list-head">Social Media</div>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="/" className="footer-list-item-link">instagram</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/" className="footer-list-item-link">instagram</a>
                            </li>

                        </ul>
                    </div>
                    <div className="footer-project">
                        <div className="footer-list-head">Projects</div>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="/" className="footer-list-item-link">BUI</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/" className="footer-list-item-link">Interior</a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="footer-end">The git-hub link for this web-app is 
                <a href="" className='footer-end-link'>here </a>
                </div>
            </div>
        </>
    )
}

export default Footer