
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../redux/features/products/productApi'
import Loading from '../commonPage/Loading'
import Section from '../../layouts/Section'
import { Button, Image, Rate } from 'antd'
import SimilarBrand from './SimilarBrand'

const ProductDetails = () => {
    const id = useParams()
    const { data, isLoading } = useGetProductByIdQuery(id)
    const items = data?.data

    // handle add to cart
    const handleAddtoCart = (productId: any) => {
        return productId
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <main>
            <Section className='product-details'>
                <div className='pb-32'>
                    <h1 className='font-bold text-xl md:text-2xl lg:text-4xl mb-4 text-primary'>{items.name}</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                        <div className=''>
                            <Image src={items.image} className='rounded-md w-full' style={{ width: '100%' }} />
                        </div>
                        <div className='flex flex-col justify-between h-full py-3'>
                            <div className=''>
                                <h4 className='font-bold md:text-xl mb-1'>Brand: {items.brand}</h4>
                                <div className='font-bold flex items-center gap-2'>
                                    <h2 className=''>Rating: </h2>
                                    <Rate defaultValue={items.rating} style={{ color: "red" }} />
                                </div>
                                <h3 className='font-bold md:text-lg my-4 text-primary'>Price: {items.price} BDT</h3>
                                <h3 className='font-bold mt-3'>Quantity: {items.availableQuantity}</h3>
                                <h3 className='font-bold mt-3'>Availablity: {items.availableQuantity > 0 ? <span className='text-green-600'>Available</span> : <span className='text-red-600'>Not Available</span>}</h3>
                                <p className='mt-4'>{items?.description}</p>
                            </div>
                            <div>
                                <Button disabled={items?.availableQuantity < 1} className='w-full' onClick={() => handleAddtoCart(id)}>Add To Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t py-10'>
                    <h1 className='font-semibold md:text-lg mt-2'>More {items.brand} Brands</h1>
                    <SimilarBrand brand={items?.brand} />
                </div>
            </Section>
        </main>
    )
}

export default ProductDetails