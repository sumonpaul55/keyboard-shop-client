import { useGetAllProductQuery } from "../../redux/features/products/productApi";


const FeaturedProductsSection = () => {
    const { data, error, isLoading } = useGetAllProductQuery({ limit: 4 });
    console.log(data)
    if (isLoading) {
        return <h3 className="font-bold text-lg text-center">Loading...</h3>
    }
    return (
        <section className='py-10 md:py-20  px-2 md:px-0 bg-white'>
            <div className="container mx-auto">
                <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-primary text-center md:text-left">Our Featured Products</h2>
            </div>
        </section>
    )
}

export default FeaturedProductsSection