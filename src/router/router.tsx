import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/products/Products";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import ProductManagement from "../pages/porductManagment/ProductManagement";
import AddProduct from "../pages/porductManagment/addProduct.tsx/AddProduct";
import AllProducts from "../pages/porductManagment/AllProducts/AllProducts";


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
                element: <ProductManagement />,
                children: [
                    {
                        path: "add-product",
                        element: <AddProduct></AddProduct>
                    },
                    {
                        path: "products",
                        element: <AllProducts />
                    }
                ]
            }
        ]
    },

])

export default router