import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id:uuid(),
    name:"sofa",
    img:`${window.location.origin}/assets/home/home-header.jpg`,
    price:"4500",
    desc:"hello plz by this product for my company growth",
    rating:3.5,
    categoryName:"sofa"
  },
  
];
