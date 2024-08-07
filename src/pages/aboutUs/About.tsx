import Section from "../../layouts/Section"

const About = () => {
    return (
        <Section className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
                <div>
                    <h2 className="font-bold text-lg md:text-2xl lg:text-3xl">About KeyHub</h2>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="container mx-auto p-8 my-10 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">About Us</h2>
                <p className="text-lg leading-relaxed mb-6">
                    Welcome to KeyHub, your one-stop destination for high-quality keyboards. At KeyHub, we are passionate about providing our customers with the best keyboard shopping experience. Whether you are a professional gamer, a typist, or someone who loves quality keyboards, we have something for everyone.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    Our journey began with a simple idea: to create a hub where keyboard enthusiasts can find the perfect keyboard that suits their needs and preferences. We understand the importance of a good keyboard in enhancing productivity and providing a comfortable typing experience.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    At KeyHub, we carefully curate our selection of keyboards to ensure that we offer only the best products on the market. Our team of experts tests each keyboard for quality, durability, and performance to ensure that you receive the best value for your money.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    We believe in exceptional customer service and are here to help you find the perfect keyboard. Our dedicated support team is available to assist you with any questions or concerns you may have. Your satisfaction is our top priority, and we strive to provide a seamless shopping experience from start to finish.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    Thank you for choosing KeyHub. We are excited to be a part of your keyboard journey and look forward to serving you. Explore our collection today and discover the perfect keyboard for you!
                </p>
            </div>
            <div className="mt-20 bg-slate-100">
                <div className="container mx-auto">
                    <div className="container mx-auto p-8 my-10 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Mission & Vision</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
                                <p className="text-lg leading-relaxed">
                                    At KeyHub, our mission is to deliver high-quality keyboards that enhance your typing and gaming experience. We strive to offer a diverse range of products that meet the needs of professionals, gamers, and enthusiasts alike. Our commitment is to provide exceptional customer service, ensuring that every interaction with KeyHub is positive and fulfilling.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h3>
                                <p className="text-lg leading-relaxed">
                                    Our vision is to become the leading provider of premium keyboards worldwide. We aim to create a community of keyboard enthusiasts who trust KeyHub for quality, reliability, and innovation. By continuously expanding our product range and staying ahead of industry trends, we aspire to set new standards in the keyboard market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About