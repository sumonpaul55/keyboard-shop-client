
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';

const SuccessPage = () => {
    const { width, height } = useWindowSize();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white max-w-full overflow-hidden">
            {/* Confetti Animation */}
            <Confetti width={width} height={height} />
            {/* Success Message Box */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                    <h1 className="text-4xl font-extrabold text-gray-800">Success!</h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Your order has been successfully placed. Thank you for shopping with KeyHub!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                    className="mt-8"
                >
                    <Link to="/products"
                        className="px-6 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300"
                    >
                        Continue Shopping
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default SuccessPage;

