import { useState } from 'react'
import { useGetAllProductQuery } from '../../redux/features/products/productApi'
import Loading from '../commonPage/Loading'
import FeaturedProduct, { TProduct } from '../../components/FeaturedProduct/FeaturedProduct'
import { Input } from 'antd'

const ProductPage = () => {
    const [search, setSearch] = useState<any | undefined>(undefined)
    const [limit] = useState(10)
    const [page] = useState(undefined)
    const [brand, setBrand] = useState(null)

    const { data, isLoading } = useGetAllProductQuery({ search, limit, page, fields: brand })
    if (isLoading) {
        return <Loading />
    }
    return (

        <main className='p-2'>
            <section>
                <div className="container mx-auto">
                    <div className='flex gap-10'>
                        {/* left */}
                        <div className='md:w-[300px] bg-light-gray relative h-screen z-10 '>
                            <div className='p-4'>
                                <h2 className='md:text-lg font-bold'>Pick Your Required Brand</h2>
                                <div></div>
                            </div>
                        </div>
                        <div className='flex-1 h-screen overflow-y-auto'>
                            <div className='py-6 bg-slate-700 mb-4'>
                                <h2 className='text-lg md:text-xl text-white text-center font-bold'>Search Product</h2>
                                <div className='text-center mt-4 md:w-1/2 mx-auto'>
                                    <Input style={{ maxWidth: "100%", padding: '5px' }} placeholder='Search by name or brand' onChange={(e) => setSearch(e.target.value)} />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8'>
                                {
                                    data?.data?.map((items: TProduct, idx: number) => (
                                        <div key={idx}>
                                            <FeaturedProduct {...items} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default ProductPage

