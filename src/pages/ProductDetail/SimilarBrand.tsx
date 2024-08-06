
import FeaturedProduct, { TProduct } from '../../components/FeaturedProduct/FeaturedProduct'
import { useGetAllProductQuery } from '../../redux/features/products/productApi'

const SimilarBrand = (brand: any) => {

    const { data } = useGetAllProductQuery(brand)
    return (
        <div className='h-full'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    data?.data.map((items: TProduct) => (
                        <div className='rounded-md border overflow-hidden'>
                            <FeaturedProduct  {...items} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SimilarBrand