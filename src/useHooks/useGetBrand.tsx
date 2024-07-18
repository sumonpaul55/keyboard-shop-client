import Loading from "../pages/commonPage/Loading"
import { useGetProductFieldQuery } from "../redux/features/products/productApi"

export const useGetBrand = (fields: string) => {
    const { data, isLoading } = useGetProductFieldQuery({ fields: fields })
    if (isLoading) {
        return <Loading />
    }
    return data?.data
} 