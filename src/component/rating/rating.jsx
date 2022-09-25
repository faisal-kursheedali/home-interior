import React from 'react'
import "./rating.css";
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';

const Rating = ({rating}) => {
    return (
        <>
            <div className="rating-container">
                {
                    [1, 2, 3, 4, 5].map(j => {
                        return (j <= rating ? <AiFillStar style={{ color: "gold" }} /> : <AiOutlineStar />)
                    })
                }
            </div>
        </>
    )
}

export default Rating