import React from 'react'
import { useGetAllProductQuery } from '../../redux/features/products/productApi'

const SimilarBrand = (brand: string) => {
    const { data } = useGetAllProductQuery({ search: brand })
    return (
        <div>
            {data?.data.length}
        </div>
    )
}

export default SimilarBrand