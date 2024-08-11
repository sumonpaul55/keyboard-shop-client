
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()
    return (
        <main className='bg-slate-600 h-screen flex  justify-center pt-20'>
            <div className='text-center space-y-10'>
                {/* <div className='max-w-[600px] mx-auto'>
                    <Lottie animationData={error} loop={true} />
                </div> */}
                {/* <h3 className='font-bold text-xl md:text-2xl lg:text-4xl'>Page Not Found</h3>
                    <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl'>404 ERROR</h1> */}
                <h2 className='text-white text-xl md:text-3xl capitalize'>Page Not found</h2>
                <div className="flex gap-10 font-bold justify-center mt-16 border p-5">
                    <Link className='text-primary bg-slate-200 py-1 px-3 rounded-lg' to="/">Go Home</Link>
                    <Button className='text-primary bg-slate-200 py-1 px-3 font-semibold text-lg' onClick={() => navigate(-1)}>Go Back</Button>
                </div>
            </div>
        </main>
    );
};
export default Error;