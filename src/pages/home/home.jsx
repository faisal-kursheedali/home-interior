import React, { useEffect } from 'react'
import "./home.css"
import img from "../../assets/home/home-header.jpg"
// import img from "window.location.origin/assets/home/home-header.jpg"
import bed from "../../assets/catagory/bed/bed1.jpg"
// import bed2 from "../../assets/catagory/bed/bed2.jpg"
// import bed3 from "../../assets/catagory/bed/bed3.jpg"
import deco from "../../assets/catagory/interior/dec1.jpg"
import table from "../../assets/catagory/table/table1.jpg"
import p1 from "../../assets/catagory/avatar/profile1.jpg"
import p2 from "../../assets/catagory/avatar/profile2.jpg"
import p3 from "../../assets/catagory/avatar/profile3.jpg"
import { HomeCatagory, HomemHeader, HomeOffer, HomePgBanner,  HomePgEmply, HomePgWorks } from '../../component'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../app/actions/product'



const Home = () => {
  const state = useSelector(store => store.products);
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getAllProducts())
  }, [dispatch])
  function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 
  const offer = state.allProducts.filter(i => i.offer === true && i);
 
  // console.log(Math.floor(randomNumber(0,offer.length)));
  // const random =Math.floor((Math.random() * (offer.length - 0 + 1)) + min);
  return (
    <>
      {/* <style>
      .home-catagory{{
        background: linear-gradient(-45deg, rgba(0, 0, 0, 0.533), transparent), url("../../assets/home/home-header.jpg") center center / cover;
      }}
    </style> */}
      <div className="home-container">

        <HomemHeader />



        {/* <HomePgCentertxt value={"WE SELL ALL PRODUCTS OF THIS CATAGORY"}/> */}
        {
          offer.length > 0 ? (
            <>
              <HomePgBanner data={offer[Math.floor(randomNumber(0,offer.length))]} rightSide={true} />
              <HomePgBanner data={offer[Math.floor(randomNumber(0,offer.length))]} rightSide={false} />
              <HomeOffer offerAlert={"offer ends on 31/02/2023"} offerArr={offer} offerAlertColor={"green"} offerHead={"Now at offer"} offerText={"hurry up dont miss this chance"} />
            </>
          ) : ""
        }



        <HomeCatagory catagoryArr={[
          {
            _id: 5002,
            img: bed,
            headTxt: "bed",
            subTxt: "feel the good quality of bed "
          }
          ,
          {
            _id: 5003,
            img: img,
            headTxt: "sofa",
            subTxt: "get the unique modals of sofa"
          }
          ,
          {
            _id: 5004,
            img: deco,
            headTxt: "interior",
            subTxt: "make your interior perfect with interior"
          }
          ,
          {
            _id: 5005,
            img: table,
            headTxt: "table",
            subTxt: "get the best table product"
          }
        ]} />
        {/* <HomeCatagory catagoryArr={state.categories}/> */}


        <HomePgWorks />
        <HomePgEmply emplyArr={[
          {
            _id: 5006,
            name: "Maya",
            position: "HR",
            img: p3
          },
          {
            _id: 5007,
            name: "David",
            position: "Team lead",
            img: p2
          },
          {
            _id: 5009,
            name: "Jon",
            position: "Design lead",
            img: p1
          },
        ]} />
      </div>
    </>
  )
}

export default Home