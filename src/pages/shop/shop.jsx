import React,{useEffect} from 'react'
import "./shop.css"
import { ProdShop } from '../../component'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../app/actions/product'


const Shop = () => {
    const state=useSelector(store=>store.products);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
    const data=[
        {
            _id:200,
            name:"sofa",
            img:`${window.location.origin}/assets/home/home-header.jpg`,
            price:"RS 4500",
            desc:"hello plz by this product for my company growth",
            rating:3.5,
            wishlist:false,
            cart:false
        }
        ,
        {
            _id:201,
            name:"sofa",
            img:`${window.location.origin}/assets/home/home-header.jpg`,
            price:"RS 4500",
            desc:"hello plz by this product for my company growth",
            rating:3.5,
            wishlist:true,
            cart:true
        }
        ,
        {
            _id:202,
            name:"sofa",
            img:`${window.location.origin}/assets/home/home-header.jpg`,
            price:"RS 4500",
            desc:"hello plz by this product for my company growth",
            rating:3.5,
            wishlist:true,
            cart:false
        }
        ,
        {
            _id:203,
            name:"sofa",
            img:`${window.location.origin}/assets/home/home-header.jpg`,
            price:"RS 4500",
            desc:"hello plz by this product for my company growth",
            rating:3.5,
            wishlist:true,
            cart:false
        }
        ,
        {
            _id:204,
            name:"sofa",
            img:`${window.location.origin}/assets/home/home-header.jpg`,
            price:"RS 4500",
            desc:"hello plz by this product for my company growth",
            rating:3.5,
            wishlist:true,
            cart:true
        }
        ,
        {
            _id:205,
            name:"sofa",
            img:`${window.location.origin}/assets/home/home-header.jpg`,
            price:"RS 4500",
            desc:"hello plz by this product for my company growth",
            rating:3.5,
            wishlist:false,
            cart:true
        }
        ,
        {
            _id:206,
            name:"sofa",
            img:`${window.location.origin}/assets/home/home-header.jpg`,
            price:"RS 4500",
            desc:"hello plz by this product for my company growth",
            rating:3.5,
            wishlist:false,
            cart:true
        }
        ,
        {
            _id:207,
            name:"sofa",
            img:`${window.location.origin}/assets/home/home-header.jpg`,
            price:"RS 4500",
            desc:"hello plz by this product for my company growth",
            rating:3.5,
            wishlist:true,
            cart:true
        }
        ,
        {
            _id:208,
            name:"sofa",
            img:`${window.location.origin}/assets/home/home-header.jpg`,
            price:"RS 4500",
            desc:"hello plz by this product for my company growth",
            rating:3.5,
            wishlist:true,
            cart:true
        }
        ,
        {
            _id:209,
            name:"sofa",
            img:`${window.location.origin}/assets/home/home-header.jpg`,
            price:"RS 4500",
            desc:"hello plz by this product for my company growth",
            rating:3.5,
            wishlist:true,
            cart:true
        }
    ]
  return (
    <>
    <ProdShop data={state.allProducts}/>
    </>
  )
}

export default Shop