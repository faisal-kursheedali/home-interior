import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id:uuid(),
    name:"bed",
    img:`${window.location.origin}/assets/catagory/bed/bed1.jpg`,
    price:4500,
    desc:"good sofa made during the time of mugals in India",
    rating:4.3,
    catagory:"bed",
    offer:true,
    offerHead:"mugal bed",
    offerSub:"exclusively avilable on interior only"
  },
  {
    _id:uuid(),
    name:"royal bed",
    img:`${window.location.origin}/assets/catagory/bed/bed2.jpg`,
    price:7000,
    desc:"hello plz by this product for my company growth",
    rating:4.5,
    catagory:"bed",
    offer:false,
    offerHead:"mugal bed",
    offerSub:"exclusively avilable on interior only"
  },
  {
    _id:uuid(),
    name:"shelf",
    img:`${window.location.origin}/assets/catagory/interior/dec1.jpg`,
    price:500,
    desc:"mordern self for home interior",
    rating:5,
    catagory:"interior",
    offer:true,
    offerHead:"woodland shelf",
    offerSub:"exclusively avilable on interior only"
  },
  {
    _id:uuid(),
    name:"wooden table",
    img:`${window.location.origin}/assets/catagory/table/table1.jpg`,
    price:2000,
    desc:"THis is pure teak wooden  table  ",
    rating:3.5,
    catagory:"table",
    offer:true,
    offerHead:"teak table",
    offerSub:"exclusively avilable on interior only"
  },
  
  
];
