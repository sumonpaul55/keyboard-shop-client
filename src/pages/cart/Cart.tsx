import { Input, Image, Button } from "antd"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { BiTrash } from "react-icons/bi";
import { updateQuantity } from "../../redux/features/cartSlice/cartSlice";
import { useEffect } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";


const Cart = () => {
    const state = useAppSelector((state) => state.cart.cart);
    const dispatch = useAppDispatch()
    const handleQuantityChange = (product: any, quantity: number) => {
        // const isQuantityExist = state?.find(items => id === items._id)
        if (quantity >= product.availableQuantity) {
            toast.error(`Maximum Product available ${product.availableQuantity}`, {
                duration: 4000
            })
        }
        dispatch(updateQuantity({ id: product._id, quantity }))
    }

    const totalAmount = state.reduce((total, product) => total + (product.price * product.quantity), 0)
    useEffect(() => {
        if (state?.length) {
            window.onbeforeunload = () => true;
        }
        return () => {
            window.onbeforeunload = null;
        };
    }, [state]);
    return (
        <>
            <main className="py-10 px-1 md:px-0 min-h-screen">
                <section>
                    <div className="container mx-auto">
                        <h1 className="font-semibold md:text-lg">Your Cart</h1>
                        {state?.length ?
                            <div className="overflow-x-auto">
                                <table className="mt-6 w-full">
                                    <thead className="">
                                        <tr className="border">
                                            <th className="border text-xs sm:text-base p-1">No</th>
                                            <th className="border text-xs sm:text-base p-1">Product Name</th>
                                            <th className="border text-xs sm:text-base p-1">Image</th>
                                            <th className="border text-xs sm:text-base p-1">Unit Price</th>
                                            <th className="border text-xs sm:text-base p-1">Quantity</th>
                                            <th className="border text-xs sm:text-base p-1">Amount</th>
                                            <th className="border text-xs sm:text-base p-1">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            state?.map((product: any, index: number) => (
                                                <tr className="border" key={index}>
                                                    <td className="text-center py-2 border font-semibold text-xs sm:text-base">{index + 1}</td>
                                                    <td className="p-2 font-semibold text-xs sm:text-base border sm:border-none">{product?.name}</td>
                                                    <td className="p-2 text-center"><Image src={product?.image} className="w-full sm:max-w-[100px] rounded-md" /></td>
                                                    <td className="p-2 text-center text-xs sm:text-base border sm:border-none">৳ {product?.price}</td>
                                                    <td className="p-2 text-center text-xs sm:text-base border sm:border-none">

                                                        <div className="border w-fit mx-auto flex flex-col md:flex-row">
                                                            <Button className="border-primary md:border-r-primary md:border-transparent rounded-none border-opacity-50 bg-secondary hover:border w-full md:w-auto" onClick={() => handleQuantityChange(product, Number(product.quantity - 1))} disabled={product.quantity <= 1}>-</Button>
                                                            <Input type="" className="m-0 text-center max-w-[70px] border-x-primary border-opacity-50 rounded-none md:border-none" min={1} max={product.availableQuantity} value={product.quantity} onChange={(e) => {
                                                                const value = Number(e.target.value);
                                                                if (value <= product.availableQuantity && value > 0) {

                                                                    handleQuantityChange(product, value);
                                                                } else if (value < 1) {
                                                                    toast.error("You should select minimum 1 product")
                                                                    handleQuantityChange(product, 1)
                                                                }
                                                                else {
                                                                    handleQuantityChange(product, product.availableQuantity);
                                                                }
                                                            }} />
                                                            <Button className="border-primary md:border-l-primary md:border-transparent border-opacity-50 rounded-none bg-secondary hover:border w-full md:w-auto" onClick={() => handleQuantityChange(product, Number(product.quantity + 1))} disabled={product.availableQuantity <= product.quantity}>+</Button>
                                                        </div>                                                    </td>
                                                    <td className="text-center font-semibold text-xs sm:text-base border sm:border-none">৳ {product.price * product.quantity}</td>
                                                    <td className="font-semibold text-blue-600 text-center border text-xs sm:text-base">
                                                        <BiTrash size={30} className="mx-auto cursor-pointer hover:text-red-600" />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <div className="border p-5 w-full bg-slate-50">
                                    <div className="md:w-[90%] mx-auto">
                                        <div className="flex justify-between">
                                            <h1 className="font-bold text-lg sm:text-xl">Total</h1>
                                            <h3 className="font-semibold sm:text-lg md:text-xl">{totalAmount}</h3>
                                        </div>
                                        <div className="flex my-2 justify-between">
                                            <h1 className="text-lg sm:text-xl">Discount</h1>
                                            <h3 className="font-bold sm:text-lg md:text-xl lg:text-2xl">{0}</h3>
                                        </div>
                                        <hr />
                                        <div className="flex my-2 justify-between">
                                            <h1 className="text-lg sm:text-xl font-semibold">Grand Total</h1>
                                            <h3 className="font-bold sm:text-lg md:text-xl lg:text-2xl">{totalAmount}</h3>
                                        </div>
                                        <div className="text-center mt-5">
                                            <Link to="/checkout" className="bg-primary text-white py-2 px-3 rounded-md">
                                                Procced To Checkout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <h3 className="mt-7 font-bold text-lg md:text-2xl text-center">No Product to your cart</h3>
                        }
                    </div>
                </section>
            </main >
        </>

    )
}

export default Cart