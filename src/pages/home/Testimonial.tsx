
import Section from '../../layouts/Section';
import TestimonialItem from '../../components/testimonial/TestimonialItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Data from '../../assets/testimonialData.json'
export type TTestimonial = {
    name: string;
    star: number;
    title: string;
    image: string;
    review: string;
    designation: string;
    company: string
}

const Testimonial = () => {



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Section className='bg-white'>
            <div className='py-10'>
                <h1 className='sm:text-md md:text-xl font-bold font-inter lg:text-2xl'>What Say Our Client About Us!</h1>
                <Carousel responsive={responsive} autoPlay={true} draggable={true} swipeable={true} showDots={true} infinite={true} autoPlaySpeed={3000}>
                    {
                        Data?.testimonialData?.map((items, idx) => <div key={idx}>
                            <TestimonialItem items={items}></TestimonialItem>
                        </div>)
                    }
                </Carousel>
            </div>
        </Section>
    )
}

export default Testimonial