import Section from "../../layouts/Section"
import { useGetAllProductQuery } from "../../redux/features/products/productApi"
import Loading from "../commonPage/Loading"

const FeaturedBrand = () => {

    const { data, isLoading } = useGetAllProductQuery({ brand: ["logitech", "extream"] })

    console.log(data?.data)


    if (isLoading) {
        return <Loading />
    }
    return (
        <Section className="bg-primary text-white">
            <h1 className='sm:text-md md:text-xl font-bold font-inter lg:text-2xl'>Our Featured Brand</h1>

            <div className="text-white">
                {data?.data.length}
            </div>
        </Section>

    )
}

export default FeaturedBrand