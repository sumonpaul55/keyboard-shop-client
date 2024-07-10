import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/products/Products";
import Cart from "../pages/cart/Cart";


const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                path: "/home"
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },

])

export default router