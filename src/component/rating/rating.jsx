import React from 'react'
import "./rating.css";
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';

const Rating = ({rating}) => {
    return (
        <>
            <div className="rating-container">
                {
                    [1, 2, 3, 4, 5].map((j,index) => {
                        return (j <= rating ? <AiFillStar style={{ color: "gold" }} key={index} /> : <AiOutlineStar key={index}  />)
                    })
                }
            </div>
        </>
    )
}

export default Rating