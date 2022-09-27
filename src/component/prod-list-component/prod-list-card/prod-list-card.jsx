import React, { useState } from 'react'
import "./prod-list-card.css";
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsFillCartFill, BsCart2 } from "react-icons/bs"
import Rating from '../../rating/rating';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist } from '../../../app/actions/product';
import { setAuthMsg } from '../../../app/feature/auth';


const ProdListCard = ({ data }) => {
    const state = useSelector(store => store.products);
    const authState = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    const [cart, setCart] = useState(state.cart.find(i => i._id === data._id?true:false));
    const [wishlist, setWishlist] = useState(state.wishlist.find(i => i._id === data._id?true:false));

    return (
        <>
            <div className="prod-list-card-container"
                onMouseEnter={() => setHover(prev => prev = true)}                      // onMouseEnter={() => setHover(prev => {
                onMouseLeave={() => setHover(prev => prev = false)}
            >
                {
                    hover ? (
                        <>
                            <div className="prod-list-card-hover-item" id={`ref${data.id}`}>
                                <div className="prod-list-card-wishlist">
                                    {
                                        wishlist ? <AiFillHeart style={{ color: "red" }}
                                            onClick={
                                                () => {
                                                    if (authState.token) {
                                                        dispatch(removeFromWishlist(data._id));
                                                        setWishlist(prev => prev = false);

                                                    }
                                                }
                                            }
                                        /> : <AiOutlineHeart style={{ color: "red" }} onClick={() => {
                                            if (authState.token) {

                                                dispatch(addToWishlist(data));
                                                setWishlist(prev => prev = true);
                                            }else{
                                                dispatch(setAuthMsg({content:"need to login",type:"error"}))
                                              }
                                        }} />
                                    }

                                </div>

                                <div className="prod-list-card-cart">
                                    {
                                        cart ? <BsFillCartFill style={{ color: "blue" }}
                                            onClick={
                                                () => {
                                                    if (authState.token) {
                                                        dispatch(removeFromCart(data._id));
                                                        setCart(prev => prev = false);

                                                    }
                                                }
                                            }
                                        /> : <BsCart2 style={{ color: "blue" }}
                                            onClick={() => {
                                                if (authState.token) {

                                                    dispatch(addToCart(data));
                                                    setCart(prev => prev = true);
                                                }else{
                                                    dispatch(setAuthMsg({content:"need to login",type:"error"}))
                                                  }
                                            }}
                                        />
                                    }
                                </div>
                            </div>
                        </>
                    ) : ""
                }

                {/* </>): ""
                        } */}
                
                <img className="prod-list-card-img" alt='' src={data.img} onClick={()=>navigate(`/product${data._id}`,{state:data})} />
                <div className="prod-list-card-content" onClick={()=>navigate(`/product${data._id}`,{state:data})}>
                    <div className="prod-list-card-name">{data.name}</div>
                    <div className="prod-list-card-price">{data.price}</div>
                    <div className="prod-list-card-rating">
                        <Rating rating={data.rating} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProdListCard