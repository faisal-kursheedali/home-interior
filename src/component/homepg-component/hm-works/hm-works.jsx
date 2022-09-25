import React from 'react'
import "./hm-works.css"
import {FaRegMoneyBillAlt} from "react-icons/fa"
import {FiHome} from "react-icons/fi"
import {BiCube} from "react-icons/bi"
import HomePgCentertxt from '../hm-centertxt/hm-centertxt'

const HomePgWorks = () => {
    return (
        <>
        <HomePgCentertxt value={"WE MAKE ELITE MODERN FURNITURE FOR THE CONTEMPORARY HOME."}/>
        
            <div className="home-cmpny-works-container">
                <div className="home-cmpny-works">
                    <div className="home-cmpny-work-icn">
                        <FaRegMoneyBillAlt />
                    </div>
                    <div className="home-cmpny-work-txt">
                        High-end design without high-end prices.
                    </div>
                </div>
                <div className="home-cmpny-works">
                    <div className="home-cmpny-work-icn">
                        <FiHome />
                    </div>
                    <div className="home-cmpny-work-txt">
                    Try at home for 30 days risk free.
                    </div>
                </div>
                <div className="home-cmpny-works">
                    <div className="home-cmpny-work-icn">
                        <BiCube />
                    </div>
                    <div className="home-cmpny-work-txt">
                    Fast and free shipping to your home or office.
                    </div>
                </div>
            </div>
        </>

    )
}

export default HomePgWorks