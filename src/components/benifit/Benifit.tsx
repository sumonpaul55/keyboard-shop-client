
import support from '../../assets/animation/support.gif'
import design from '../../assets/animation/design.gif'
import freshiping from '../../assets/animation/freshiping.gif'
import satisfy from '../../assets/animation/satisfy.gif'
import { FaCheckDouble } from "react-icons/fa6";

const Benifit = () => {
    return (
        <section className='bg-secondary py-8 md:py-16'>
            <div className="container mx-auto">
                <h1 className="font-bold text-center text-lg sm:text-2xl">Secure Online Shopping</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 md:gap-7 mt-10'>
                    <div className="py-3 bg-white rounded shadow">
                        <div className="p-4">
                            <div className='size-20 border rounded-full flex items-center justify-center mx-auto bg-secondary'>
                                <img className='size-14 mx-auto' src={support} alt="" />
                            </div>
                            <div className='lg:max-w-[90%] mx-auto'>
                                <h4 className="font-bold md:text-lg mt-6">7/30 days Support</h4>
                                <ul className='mt-4 space-y-2 font-semibold'>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> Available 7 days a week</li>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> Expert assistance with installation</li>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> Fast and friendly customer service</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 bg-white rounded shadow">
                        <div className="p-4">
                            <div className='size-20 border rounded-full flex items-center justify-center mx-auto bg-secondary'>
                                <img className='size-14 mx-auto' src={design} alt="" />
                            </div>
                            <div className='lg:max-w-[90%] mx-auto'>
                                <h4 className="font-bold md:text-lg mt-6">Custom Keyboard Design</h4>
                                <ul className='mt-4 space-y-2 font-semibold'>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> selection of keycaps and switches</li>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> Personalized layouts</li>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> Expert design assistance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 bg-white rounded shadow">
                        <div className="p-4">
                            <div className='size-20 border rounded-full flex items-center justify-center mx-auto bg-secondary'>
                                <img className='size-14 mx-auto' src={freshiping} alt="" />
                            </div>
                            <div className='lg:max-w-[90%] mx-auto'>
                                <h4 className="font-bold md:text-lg mt-6">Free Shipping</h4>
                                <ul className='mt-4 space-y-2 font-semibold'>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> Free shipping worldwide</li>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> Secure packaging</li>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> Fast delivery times</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 bg-white rounded shadow">
                        <div className="p-4">
                            <div className='size-20 border rounded-full flex items-center justify-center mx-auto bg-secondary'>
                                <img className='size-14 mx-auto' src={satisfy} alt="" />
                            </div>
                            <div className='lg:max-w-[90%] mx-auto'>
                                <h4 className="font-bold md:text-lg mt-6">Satisfaction Guarantee</h4>
                                <ul className='mt-4 space-y-2 font-semibold'>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> 30-day return policy</li>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> Full refunds or exchanges</li>
                                    <li className='flex items-center gap-2'><FaCheckDouble className='text-primary' /> Commitment to quality</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Benifit