
import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../page/Home/Home";
import Details from "../page/Details/Details";
import Product_1 from "../Product/Product_1";
import Product_2 from "../Product/Product_2";

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
          path:'/product-1',
          element:<Details/>
        },
        {
          path:'/product-2',
          element:<Product_1/>
        },
        {
          path:'/product-3',
          element:<Product_2/>
        },
    ]
  }
  ]);
  
  export default router;