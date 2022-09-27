import {
  v4 as uuid
} from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [{
    _id: uuid(),
    img: `${window.location.origin}/assets/catagory/table/table1.jpg`,
    headTxt: "table",
    subTxt: "This is table catagory"
  },
  {
    _id: uuid(),
    img: `${window.location.origin}/assets/home/home-header.jpg`,
    headTxt: "sofa",
    subTxt: "This is sofa catagory"
  },
  {
    _id: uuid(),
    img: `${window.location.origin}/assets/catagory/interior/dec1.jpg`,
    headTxt: "interior",
    subTxt: "This is interior catagory"
  },
  {
    _id:uuid(),
    img: `${window.location.origin}/assets/catagory/table/table1.jpg`,
    headTxt: "table",
    subTxt: "This is table catagory"
  }
];