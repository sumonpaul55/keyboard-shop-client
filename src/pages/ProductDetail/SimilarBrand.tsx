
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct'
import { useGetAllProductQuery } from '../../redux/features/products/productApi'

const SimilarBrand = (brand: any) => {
    const { data } = useGetAllProductQuery(brand)
    return (
        <FeaturedProduct {...data} />
    )
}

export default SimilarBrand