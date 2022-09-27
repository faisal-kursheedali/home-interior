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
                                <a href="/shop" className="footer-list-item-link">Shop</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/cart" className="footer-list-item-link">Cart</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/wishlist" className="footer-list-item-link">Wishlist</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/login" className="footer-list-item-link">Login</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/signup" className="footer-list-item-link">Signup</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-socialmedia">
                        <div className="footer-list-head">Social Media</div>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="/https://twitter.com/faisal_devop" className="footer-list-item-link">Twitter</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/https://github.com/faisal-kursheedali" className="footer-list-item-link">Github</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="https://www.linkedin.com/in/faisal-k-4a02801b2/" className='footer-list-item-link'>Linkedin</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="mailto:faisal.k.ison@gmail.com" className='footer-list-item-link'>Email</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="https://discordapp.com/users/#1279" className='footer-list-item-link'>Discord</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/https://www.instagram.com/demented_devops/" className="footer-list-item-link">Instagram</a>
                            </li>

                        </ul>
                    </div>
                    <div className="footer-project">
                        <div className="footer-list-head">Projects</div>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="https://bui-site.netlify.app/" className="footer-list-item-link">BUI</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/" className="footer-list-item-link">Interior</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="https://mytube-webapp.netlify.app/" className="footer-list-item-link">MyTube</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="https://my-tab.netlify.app/" className="footer-list-item-link">MyTab</a>
                            </li>
                            
                        </ul>

                    </div>
                </div>
                <div className="footer-end">The git-hub link for this web-app is
                    <a href="https://github.com/faisal-kursheedali/home-interior" className='footer-end-link'>here </a>
                </div>
            </div>
        </>
    )
}

export default Footer