import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";

import Details from "../page/Details/Details";
import Product_1 from "../Product/Product_1";
import Product_2 from "../Product/Product_2";

import Home from "../page/Home/Home";
import OrderConfirm from "../page/OrderConfirm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
 
      {
        path: "/",
        element: <Details />,
      },
      {
        path: "/product-2",
        element: <Product_1 />,
      },
      {
        path: "/product-3",
        element: <Product_2 />,
      },
      {
        path: "/confirm/:id",
        element: <OrderConfirm />,
      },
    ],
  },
]);

export default router;
