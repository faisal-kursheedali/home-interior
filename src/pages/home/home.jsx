import React from 'react'
import "./home.css"
import img from "../../assets/home/home-header.jpg"
// import img from "window.location.origin/assets/home/home-header.jpg"
import bed from "../../assets/catagory/bed/bed1.jpg"
import bed2 from "../../assets/catagory/bed/bed2.jpg"
import bed3 from "../../assets/catagory/bed/bed3.jpg"
import deco from "../../assets/catagory/interior/dec1.jpg"
import table from "../../assets/catagory/table/table1.jpg"
import p1 from "../../assets/catagory/avatar/profile1.jpg"
import p2 from "../../assets/catagory/avatar/profile2.jpg"
import p3 from "../../assets/catagory/avatar/profile3.jpg"
import { HomeCatagory, HomemHeader, HomeOffer, HomePgBanner, HomePgCentertxt, HomePgEmply, HomePgWorks } from '../../component'


const Home = () => {
  const sampleArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <>
    {/* <style>
      .home-catagory{{
        background: linear-gradient(-45deg, rgba(0, 0, 0, 0.533), transparent), url("../../assets/home/home-header.jpg") center center / cover;
      }}
    </style> */}
     <div className="home-container">

        <HomemHeader/>
       
        
        
        {/* <HomePgCentertxt value={"WE SELL ALL PRODUCTS OF THIS CATAGORY"}/> */}
        
        <HomePgBanner data={{
          _id:5000,
          img:bed2,
          head:"Mugal bed",
          sub:"THis is the mugals bed used in their rules",
          small:"Exclusive only one available",
          // smallClr:"green",
          // rightSide:true
        }}
        releated={[
          
        ]}
        />
        <HomePgBanner data={{
          _id:5001,
          img:bed3,
          head:"Mugal bed",
          sub:"THis is the mugals bed used in their rules",
          small:"Exclusive only one available",
          smallClr:"green",
          rightSide:true
        }}/>
        <HomeOffer offerAlert={"offer ends on 31/02/2023"} offerArr={[img,bed,bed2,bed3,table,deco]} offerAlertColor={"green"} offerHead={"Now at offer"} offerText={"hurry up dont miss this chance"}/>
        <HomeCatagory catagoryArr={[
          {
            _id:5002,
            img:bed,
            headTxt:"bed",
            subTxt:"This is bed catagory"
          }
          ,
          {
            _id:5003,
            img:img,
            headTxt:"sofa",
            subTxt:"This is sofa catagory"
          }
          ,
          {
            _id:5004,
            img:deco,
            headTxt:"interior",
            subTxt:"This is interior catagory"
          }
          ,
          {
            _id:5005,
            img:table,
            headTxt:"table",
            subTxt:"This is table catagory"
          }
        ]}/>


        <HomePgWorks/>
        <HomePgEmply emplyArr={[
        {
          _id:5006,
          name:"Maya",
          position:"HR",
          img:p3
        },
        {
          _id:5007,
          name:"David",
          position:"Team lead",
          img:p2
        },
        {
          _id:5009,
          name:"Jon",
          position:"Design lead",
            img:p1
          },
        ]}/>
     </div>
    </>
  )
}

export default Home