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
            image: "https://i.ibb.co/5WJZtvq/corsiar.jpg"
        },
        {
            name: "Razer",
            image: "https://image.isu.pub/231218164830-d917894eb1b3d333d6debe63f3e81bd9/jpg/page_1_thumb_large.jpg"
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