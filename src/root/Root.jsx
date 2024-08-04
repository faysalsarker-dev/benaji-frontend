import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";


const Root = () => {
    return (
  <>
            <div className="">
                <Outlet/>
              
                
            </div>
            {/* <Footer/> */}
  </>
    );
};

export default Root;