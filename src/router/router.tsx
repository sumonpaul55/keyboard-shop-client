import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/products/Products";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import ProductManagement from "../pages/porductManagment/ProductManagement";


const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/cart",
                element: <Cart />
            }
            ,
            {
                path: "/product-manage",
                element: <ProductManagement />
            }
        ]
    },

])

export default router