import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import ProductManagement from "../pages/porductManagment/ProductManagement";
import AddProduct from "../pages/porductManagment/addProduct.tsx/AddProduct";
import AllProducts from "../pages/porductManagment/AllProducts/AllProducts";
import About from "../pages/aboutUs/About";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct";


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
                element: <FeaturedProduct />
            },
            {
                path: "/about-us",
                element: <About />
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
                        path: "/product-manage",
                        element: <AllProducts />
                    },
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