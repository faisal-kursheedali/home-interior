import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import { getAllProducts, getCatagories } from "./app/actions/product";
// import { getAllCatagory } from "./app/actions/product";
import { loadAuth, offAuthMsg } from "./app/feature/auth";
import { offProdMsg,  setSideNav } from "./app/feature/product";
import { Alert, Footer, Loading, Nav, SideNav } from "./component";
import PageRoute from "./routes";

/**
 *  note
 * for having image in the form of location use this format to get the image location and add all the images in asserts in public folder 
 * use this 
 * 
 *        | | | | | |
 *        | | | | | |
 *        V V V V V V
 * 
 * <img src={`${window.location.origin}/assets/home/home-header.jpg`} alt="" />
 */
function App() {
  const [alertContent, setAlertContent] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alert, setAlert] = useState(false);
  const authState=useSelector(store=>store.auth);
  const prodState=useSelector(store=>store.products);
  const dispatch=useDispatch();
  // const dispatch=useDispatch();
  useEffect(()=>{
    
    setAlert(true);
      console.log(prodState.msg);
    // setAlertMsg(prev=>{
    //   prev.content=prodState.msg.content;
    //   prev.type=prodState.msg.type;
    // })
    setAlertContent(prev=>prev=prodState.msg.content);
    setAlertType(prev=>prev=prodState.msg.type);
    setTimeout(()=>{
      setAlert(false);
      dispatch(offProdMsg());
    },1000)

  },[dispatch,prodState.showMsg===true])
  useEffect(()=>{
    setAlert(true);
      console.log(authState.msg);
    // setAlertMsg(prev=>{
    //   // prev.content=authState.msg.content;
    //   // prev.type=authState.msg.type;
    // })
    setAlertContent(prev=>prev=authState.msg.content);
    setAlertType(prev=>prev=authState.msg.type);
    setTimeout(()=>{
      setAlert(false);
      dispatch(offAuthMsg())
    },1000)

  },[dispatch,authState.showMsg===true])

  //   // useEffect(() => {
  //   //     dispatch(getAllProducts());
  //   // }, []);
  useEffect(() => {
    dispatch(loadAuth());
  }, [dispatch]);
//   useEffect(() => {
//     dispatch(getCatagories());

// }, []);
  return (
    <>
    <div className="app">
    <Nav/>
    <div className='app-page-container'>
      
    
    <div className="app-pg" onClick={()=>dispatch(setSideNav(false))}>
    <PageRoute/>
    </div>
    {
        prodState.sideNav?<div className="side-nav">
        <SideNav/>
    
        </div>:""
      }
    </div>
    <Footer/>
    {
      authState.isLoading||prodState.isLoading?<div className="loading">
      <Loading/>
    </div>:""
    }
    
      {
        alert?<div className="alert">
        <Alert msgContent={alertContent} msgType={alertType}/>
        </div>:""
      }
    
    </div>
    </>
  );
}

export default App;
