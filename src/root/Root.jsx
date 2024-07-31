import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";


const Root = () => {
    return (
  <>
            <div className="max-w-6xl mx-auto px-2">
                <Outlet/>
              
                
            </div>
            <Footer/>
  </>
    );
};

export default Root;