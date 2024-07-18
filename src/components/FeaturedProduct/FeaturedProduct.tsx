import { Button, Rate } from "antd";
import { useState } from "react";
import { FaCartArrowDown, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AnimateSpin } from "../../pages/commonPage/Loading";

export type TProduct = {
    _id: string;
    image: string;
    name: string;
    brand: string;
    quantity: number;
    price: number;
    rating: number;
    description: string;
    delete?: boolean | undefined;
}


const FeaturedProduct = (product: TProduct) => {

    const [view, setView] = useState(false)

    const handleViewDetail = () => {
        setView(true)
    }
    // console.log(product)
    return (
        <div className="relative bg-secondary shadow rounded-md overflow-hidden group">
            <img src={product?.image} className="w-full" alt={product.name} />
            <div className="py-4 border border-t-0 p-3 md:p-4 rounded-b-md relative">
                <div className="flex items-center justify-between">
                    <h2 className={`font-semibold md:text-lg product-name`}>{product.name}</h2>
                    <h3 className="font-bold text-[#01254c]">Brand: {product?.brand}</h3>
                </div>
                <div className="mt-2 bg-opacity-70 backdrop:blur-lg rounded flex items-center gap-2 text-slate-700">
                    <h4 className="font-bold ">Price:</h4>
                    <span className="font-bold ">৳ {product?.price}</span>
                </div>
                <h4 className="font-semibold mt-1 text-slate-700">Quantity: {product.quantity}</h4>
                <Link to={`/product-details/${product?._id}`}>
                    <Button onClick={handleViewDetail} style={{ width: "100%" }} className="mt-4 bg-base-yellow text-white flex items-center gap-3">View Details
                        {
                            view ? <AnimateSpin /> : null
                        }
                    </Button>
                </Link>
                {/* favourite and add to cart button */}
                <div className="absolute bottom-full -left-full w-1/2 group-hover:-left-0 duration-500">
                    <Button style={{ width: "100%" }} className="bg-base-yellow text-white rounded-none"><FaHeart />
                        Add To Favourite</Button>
                </div>
                <div className="absolute bottom-full -right-full w-1/2 group-hover:right-0 duration-500">
                    <Button style={{ width: "100%" }} className="bg-base-yellow text-white rounded-none">Add To Cart <FaCartArrowDown /></Button>
                </div>
            </div>
            <div className="absolute top-2 text-white left-0 px-2 flex justify-between w-full">
                {/* <Rate defaultValue={product.rating} allowClear={false} /> */}
                <div className="p-2 text-white left-2 bg-primary bg-opacity-80 backdrop:blur-lg rounded flex items-center gap-4">
                    <h4 className="font-bold">Rating:</h4>
                    <Rate defaultValue={product.rating} allowClear={false} />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct