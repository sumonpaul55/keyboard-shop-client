import { motion } from 'framer-motion';
import memeber1 from "../../../src/assets/member (1).jpg"
import memeber2 from "../../../src/assets/member (2).jpg"
import memeber3 from "../../../src/assets/member (3).jpg"
import keyboard from "../../../src/assets/keyboard.jpg"
const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-300 to-white">

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto">
                    <img
                        src={keyboard}
                        alt="KeyHub"
                        className="mx-auto size-40 mb-6 rounded-full shadow-lg" />
                    <h1 className="text-5xl font-bold mb-4">Welcome to KeyHub</h1>
                    <p className="text-lg md:text-xl">
                        KeyHub is your go-to destination for premium mechanical keyboards and accessories. We are dedicated to enhancing your typing experience with top-quality, customizable products.
                    </p>
                </motion.div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-4xl font-semibold mb-6">Our Mission & Vision</h2>
                        <p className="md:text-lg max-w-2xl mx-auto">
                            At KeyHub, our mission is to provide the best mechanical keyboards to enthusiasts worldwide, while our vision is to foster a vibrant community of keyboard lovers.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center md:text-left">
                            <h3 className="text-lg md:text-xl font-semibold mb-4">Our Mission</h3>
                            <p className="md:text-lg">
                                To deliver the highest quality keyboards and accessories, empowering our customers to create their perfect typing experience.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center md:text-left">
                            <h3 className="text-lg md:text-xl font-semibold mb-4">Our Vision</h3>
                            <p className="md:text-lg">
                                To become the leading community hub for keyboard enthusiasts, offering a space for learning, sharing, and connecting.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 text-center">
                        <h2 className="text-4xl font-semibold mb-6">Meet Our Team</h2>
                        <p className="md:text-lg max-w-2xl mx-auto">
                            Our dedicated team is passionate about keyboards and committed to bringing you the best products and experiences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Team Member 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center border p-2 md:p-5 rounded-md border-slate-300 shadow-lg bg-white">
                            <img
                                src={memeber1}
                                alt="Team Member 1"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-2xl font-semibold">Jane Doe</h3>
                            <p className="text-lg">CEO & Founder</p>
                        </motion.div>
                        {/* Team Member 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center border p-2 md:p-5 rounded-md border-slate-300 shadow-lg bg-white">
                            <img
                                src={memeber2}
                                alt="Team Member 2"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-2xl font-semibold">John Smith</h3>
                            <p className="text-lg">Chief Product Officer</p>
                        </motion.div>
                        {/* Team Member 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center border p-2 md:p-5 rounded-md border-slate-300 shadow-lg bg-white">
                            <img
                                src={memeber3}
                                alt="Team Member 3"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-2xl font-semibold">Alex Johnson</h3>
                            <p className="text-lg">Community Manager</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-slate-200 to-white-900">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-semibold mb-6">Join the KeyHub Community</h2>
                        <p className="md:text-lg max-w-2xl mx-auto mb-10">
                            Become a part of our growing community of keyboard enthusiasts. Explore our shop and find the perfect keyboard for you.
                        </p>
                        <a
                            href="/shop"
                            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
                        >
                            Explore Our Shop
                        </a>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default About;
