import Fbrand from "../../components/featuredBrand/Fbrand"
import Section from "../../layouts/Section"
import { useGetAllProductQuery } from "../../redux/features/products/productApi"
import Loading from "../commonPage/Loading"

const FeaturedBrand = () => {

    const { data, isLoading } = useGetAllProductQuery({ brand: "Logitech,extream,Razer", limit: 5 })

    if (isLoading) {
        return <Loading />
    }


    return (
        <Section className="bg-primary text-white">
            <h1 className='sm:text-md md:text-xl font-bold font-inter lg:text-2xl'>Our Featured Brand</h1>

            <Fbrand brands={data?.data} />
        </Section>

    )
}

export default FeaturedBrand