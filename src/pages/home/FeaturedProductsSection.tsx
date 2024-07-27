import FeaturedProduct, { TProduct } from "../../components/FeaturedProduct/FeaturedProduct";
import Section from "../../layouts/Section";
import { useGetAllProductQuery } from "../../redux/features/products/productApi";
import Loading from "../commonPage/Loading";


const FeaturedProductsSection = () => {
    const { data, error, isLoading } = useGetAllProductQuery({ limit: 6 });


    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return <h3 className="font-bold text-xl text-center">No Data Found</h3>
    }
    return (
        <Section className="md:py-20">
            <div className="container mx-auto">
                <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-primary text-center md:text-left">Our Featured Products</h2>
                {/* display products */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10">
                    {
                        data?.data.map((items: TProduct, idx: number) =>
                            <div key={idx} className="overflow-hidden rounded-t-md bg-secondary rounded-md border">
                                <FeaturedProduct {...items} />
                            </div>
                        )
                    }
                </div>
            </div>
        </Section>
    )
}

export default FeaturedProductsSection