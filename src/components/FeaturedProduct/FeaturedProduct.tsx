import { Button, Rate } from "antd";
import { FaCartArrowDown, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addToCart } from "../../redux/features/cartSlice/cartSlice";
import { toast } from "sonner";

export type TProduct = {
    _id: string;
    image: string;
    name: string;
    brand: string;
    availableQuantity: number;
    quantity: number;
    price: number;
    rating: number;
    description: string;
    delete: boolean;
}


const FeaturedProduct = (product: TProduct) => {
    const state = useAppSelector((state) => state.cart.cart);
    const dispatch = useAppDispatch()


    const handleAddtoCart = (product: TProduct) => {
        if (product.availableQuantity < 1) {
            toast.error("This product is not available.", {
                duration: 1000
            })
            return
        }
        if (state.find(item => item._id === product._id)) {
            toast.error("This product allready added to your Cart", {
                duration: 1000
            })
            return
        }
        else {
            dispatch(addToCart(product))
        }
    }
    // console.log(product)
    return (
        <div className="relative overflow-hidden group h-full flex flex-col justify-between">
            <img src={product?.image} className="w-full" alt={product.name} />
            <div className="py-4 border-t-0 p-3 md:p-4 rounded-b-md relative">
                <div className="flex items-center justify-between">
                    <h2 className={`font-semibold text-xs sm:text-base md:text-lg product-name`}>{product.name}</h2>
                    <h3 className="font-bold text-[#01254c] text-xs sm:text-base">Brand: {product?.brand}</h3>
                </div>
                <div className="mt-2 bg-opacity-70 backdrop:blur-lg rounded flex items-center gap-2 text-slate-700">
                    <h4 className="font-bold text-sm sm:text-base">Price:</h4>
                    <span className="font-bold text-sm sm:text-base">৳ {product?.price}</span>
                </div>
                <h4 className="font-semibold mt-1 text-slate-700 text-xs sm:text-base">Quantity: {product.availableQuantity}</h4>
                <Link to={`/product-details/${product?._id}`}>
                    <Button style={{ width: "100%" }} className="mt-4 bg-base-yellow text-white flex items-center gap-3">View Details
                        view
                    </Button>
                </Link>
                {/* favourite and add to cart button */}
                <div className="absolute bottom-full -left-full w-1/2 group-hover:-left-0 duration-500">
                    <Button style={{ width: "100%" }} className="bg-base-yellow text-white rounded-none"><FaHeart />
                        Add To Favourite</Button>
                </div>
                <div className="absolute bottom-full -right-full w-1/2 group-hover:right-0 duration-500">
                    <Button style={{ width: "100%" }} className="bg-base-yellow disabled:bg-slate-50 text-white rounded-none" onClick={() => handleAddtoCart(product)}>Add To Cart <FaCartArrowDown /></Button>
                </div>
            </div>
            <div className="absolute top-2 text-white left-0 px-2 flex justify-between w-full">
                {/* <Rate defaultValue={product.rating} allowClear={false} /> */}
                <div className="p-2 text-white left-2 bg-primary bg-opacity-80 backdrop:blur-lg rounded flex items-center gap-4">
                    <h4 className="font-bold text-sm sm:text-base">Rating:</h4>
                    <Rate defaultValue={product.rating} allowClear={false} />
                </div>
            </div>
        </div >
    )
}

export default FeaturedProduct