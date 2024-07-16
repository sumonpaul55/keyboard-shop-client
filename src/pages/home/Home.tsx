import { Button } from "antd";
import keyVideo from "../../assets/videos/keyboard.mp4";
import Benifit from "../../components/benifit/Benifit";
import FeaturedProductsSection from "./FeaturedProductsSection";
import Testimonial from "./Testimonial";
import FeaturedBrand from "./FeaturedBrand";


const Home = () => {
    return (
        <main className="">
            <section className="hero h-[80vh] w-full relative">
                <div className="overlay bg-[#001c43bb] absolute top-0 left-0 bottom-0 right-0"></div>
                <video autoPlay loop={true} src={keyVideo} muted className="w-full h-full object-cover"></video>

                <div className="content absolute left-0 top-0 w-full z-50 text-white h-full flex justify-center items-center px-2 md:-0">
                    <div className="container mx-auto">
                        <div className="py-3 text-center max-w-[900px] mx-auto">
                            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 max-w-[800px] mx-auto">
                                Type with Style and <br className="hidden md:block" /> Precision
                            </h1>
                            <p className="mt-6 text-base md:text-lg">
                                At <span className="text-pink-600">KeyBoardHub</span>, we believe that the right keyboard can transform your computing experience.
                                Whether you're a gamer, a programmer, or simply someone who values a great typing experience, our selection of mechanical keyboards is
                                tailored to meet your needs.
                            </p>
                            <div className="flex gap-6 mt-10 justify-center">
                                <Button className="px-5 md:px-10 py-4 bg-primary border-primary text-white md:text-lg">View All</Button>
                                <Button className="px-5 md:px-10 py-4 bg-primary border-primary text-white md:text-lg">Explore</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Benifit />
            <FeaturedProductsSection />
            <FeaturedBrand />
            <Testimonial />
        </main>
    );
};

export default Home;
