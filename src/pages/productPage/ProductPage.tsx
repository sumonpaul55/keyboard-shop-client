import { useState } from 'react'
import { useGetAllProductQuery } from '../../redux/features/products/productApi'
import Loading from '../commonPage/Loading'
import FeaturedProduct, { TProduct } from '../../components/FeaturedProduct/FeaturedProduct'
import { Button, Input, Select, SelectProps } from 'antd'
import { useGetBrand } from '../../useHooks/useGetBrand'
import { Link } from 'react-router-dom'

const ProductPage = () => {
    const { brandLoading, brands }: any = useGetBrand("brand")
    const [search, setSearch] = useState<any | undefined>(undefined)
    const [limit] = useState(12);
    const [brand, setBrand] = useState({})
    const [range, setRange] = useState<string | undefined>()
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetAllProductQuery({ search, limit, range, brand, page: page })
    // brnads woriking on
    if (isLoading) {
        return <Loading />
    }
    const onlyBrands: string[] = []
    let brandsArray;
    if (!brandLoading) {
        brands?.forEach((items: any) => {
            onlyBrands.push(items.brand)
        })
        const uniqBrnd = new Set(onlyBrands)
        brandsArray = Array.from(uniqBrnd)
    }
    const priceRange = [
        "0-300",
        "300-800",
        "800-1000"
    ]
    const options: SelectProps["options"] = [];
    brandsArray?.map((bname) => {
        return options.push({ value: bname, label: bname })
    })
    // handle reset
    const handleReset = () => {
        setBrand({})
        setSearch(undefined)
        setRange(undefined)
    }
    // page number
    const generatedPage = Math.ceil((data?.data.length / 12) + 1)

    const handlePageClick = (pageNumber: any) => {
        setPage(pageNumber + 1)
    }

    return (
        <main className='p-0 md:p-2'>
            <section className='py-5'>
                <div className="container mx-auto">
                    <div className='flex gap-2 md:gap-10'>
                        {/* left */}
                        <div className='md:w-[300px] p-1 w-[150px] bg-light-gray relative h-screen z-10 '>
                            <div className='md:p-4'>
                                <h2 className='text-sm md:text-lg font-bold sm:text-base'>Pick Your Required Brand</h2>
                                <div className='flex flex-col gap-2 px-4 md:px-5 mt-5 font-bold md:text-'>
                                    <Select
                                        onChange={(value) => setBrand(`${value}`)}
                                        options={options}
                                        mode='multiple'
                                    />
                                </div>
                            </div>
                            <div className='md:p-4 mt-10'>
                                <h2 className='md:text-lg font-bold text-xs sm:text-base'>Price Range</h2>
                                <div className='flex flex-col gap-2 px-4 md:px-5 mt-5 font-bold md:text-'>
                                    {
                                        priceRange?.map((items, idx) => (<Button onClick={() => setRange(items)} key={idx} className=''>{items}</Button>))
                                    }
                                </div>
                            </div>
                            <div className='md:p-4 mx-5'>
                                <Button style={{ width: "100%" }} className='bg-primary text-white' onClick={handleReset}>
                                    Reset filter
                                </Button>
                            </div>
                        </div>
                        <div className='flex-1 h-screen overflow-y-auto'>
                            <div className='md:py-6 bg-slate-700 mb-4 p-1'>
                                <h2 className='text-sm sm:text-base md:text-xl text-white text-center font-bold'>Search Product</h2>
                                <div className='text-center mt-0 md:mt-4 md:w-1/2 mx-auto'>
                                    <Input style={{ maxWidth: "100%", padding: '5px' }} placeholder='Search by name or brand' onChange={(e) => setSearch(e.target.value)} />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 p-2 ps-0'>
                                {
                                    data?.data.length ?
                                        data?.data?.map((items: TProduct, idx: number) => (
                                            <div key={idx} className='overflow-hidden rounded-t-md bg-secondary rounded-md border'>
                                                <FeaturedProduct {...items} />
                                            </div>
                                        ))
                                        :
                                        <>
                                            <div className='text-center'>
                                                <h3 className='mt-4 font-bold text-center text-xl mb-5'>Product Not found</h3>
                                                <Button>
                                                    <Link to="/product-manage/add-product" className=''>Add Product</Link>
                                                </Button>
                                            </div>
                                        </>
                                }
                            </div>
                            <div className='pt-10 text-center flex items-center justify-center'>
                                <Button onClick={() => setPage(page - 1)} disabled={generatedPage > page}>Prev</Button>

                                {Array.from({ length: generatedPage }, (_, index) => {
                                    return <Button
                                        key={index}
                                        onClick={() => handlePageClick(index)}
                                        className={`px-4 py-2 mx-1 ${generatedPage === index ? 'bg-red-400 text-white' : 'bg-blue-500 text-white'
                                            } rounded hover:bg-blue-700 focus:outline-none`}>
                                        {index + 1}
                                    </Button>
                                })}
                                <Button disabled={generatedPage === page} onClick={() => setPage(page + 1)}>Next</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >

    )
}

export default ProductPage

