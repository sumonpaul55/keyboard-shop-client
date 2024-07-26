import Fbrand from "../../components/featuredBrand/Fbrand"
import Section from "../../layouts/Section"
const FeaturedBrand = () => {

    const brandData = [
        {
            name: "Logitech",
            image: "https://i.ibb.co/cYZkz8c/logitech.jpg"
        },
        {
            name: "A4 Tech",
            image: "https://i.ibb.co/r6kR8BM/a4tech.png"
        },
        {
            name: "Extream",
            image: "https://i.ibb.co/XX7gXJg/extream.jpg"
        },
        {
            name: "Corsiar",
            image: "https://i.ibb.co/Z28Ykqf/corsiar.jpg"
        },
        {
            name: "Razer",
            image: "https://i.ibb.co/n8p8DH3/lighting-keyboard.jpg"
        }
    ]

    return (
        <Section className="bg-primary text-white">
            <h1 className='sm:text-md md:text-xl font-bold font-inter lg:text-2xl'>Our Featured Brand</h1>
            <Fbrand brands={brandData} />
        </Section>

    )
}

export default FeaturedBrand