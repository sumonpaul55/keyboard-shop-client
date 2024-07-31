import { Link, useParams } from "react-router-dom"
import Section from "../../layouts/Section"
import { useGetAllProductQuery } from "../../redux/features/products/productApi";
import Loading, { } from "../commonPage/Loading";
import { TProduct } from "../../components/FeaturedProduct/FeaturedProduct";
import { motion } from "framer-motion";
import { Button } from "antd";

const BrandProducts = () => {
    const brand = useParams();
    const { data, isLoading } = useGetAllProductQuery(brand)
    const brandData = data?.data
    if (isLoading) {
        return <Loading></Loading>
    }
    // handle add to cart
    const handleAddtoCart = (productId: any) => {
        if (productId) {


        }
    }
    return (
        <Section className="min-h-screen">
            <h1 className="sm:text-lg md:text-xl lg:text-2xl text-center font-bold">All products of <span className="text-primary">{brand.brand}</span> Brands</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
                {
                    brandData?.length > 0 ?

                        brandData?.map((items: TProduct, idx: number) => (
                            <motion.div key={idx} className="border box shadow" whileHover={{ scale: [null, 1, 1.08] }}
                                transition={{ duration: 0.3 }}>
                                <div className="relative">
                                    <img src={items?.image} alt={items.name} />
                                    <div className="absolute top-1 right-1 py-2 px-3 bg-red-600 text-white capitalize">{items.brand}</div>
                                </div>
                                <div className="p-3 md:p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold md:text-lg">{items.name}</h3>
                                        <Button onClick={() => handleAddtoCart(items._id)} style={{ padding: "0 5px" }}>Add to cart</Button>
                                    </div>
                                    <p className="mt-4 line-clamp-2">{items.description}</p>
                                    <Link to={`/product-details/${items?._id}`}>
                                        <Button style={{ width: "100%" }} className="mt-4 bg-base-yellow text-white flex items-center gap-3">View Details</Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))
                        :
                        <h2 className="md:text-lg lg:text-xl mt-20">No Product found with {brand.brand}</h2>
                }
            </div>
        </Section >
    )
}

export default BrandProducts