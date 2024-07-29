
import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../page/Home/Home";
import Details from "../page/Details/Details";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/product',
          element:<Details/>
        }
    ]
  }
  ]);
  
  export default router;