import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { loadAuth } from "./app/feature/auth";
import { Footer, Nav } from "./component";
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
  // const state=useSelector(store=>store.auth);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(loadAuth());
  }, []);
  return (
    <>
    <Nav/>
    <PageRoute/>
    <Footer/>
    </>
  );
}

export default App;
