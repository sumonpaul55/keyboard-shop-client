import { useParams } from "react-router-dom"
import Section from "../../layouts/Section"
import { useGetAllProductQuery } from "../../redux/features/products/productApi";
import Loading from "../commonPage/Loading";
import { TProduct } from "../../components/FeaturedProduct/FeaturedProduct";

const BrandProducts = () => {
    const brand = useParams();
    const { data, isLoading } = useGetAllProductQuery(brand)
    const brandData = data?.data
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <Section className="min-h-screen">
            <h1 className="sm:text-lg md:text-xl lg:text-2xl text-center font-bold">All products of <span className="text-primary">{brand.brand}</span> Brands</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {
                    brandData?.map((items: TProduct, idx: number) => (
                        <div key={idx}>
                            <img src={items?.image} alt="" />
                        </div>
                    ))
                }
            </div>
        </Section>
    )
}

export default BrandProducts