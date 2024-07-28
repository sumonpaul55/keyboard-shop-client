import { Input, Table, TableColumnsType } from "antd"
import { useGetAllCartsQuery } from "../../redux/features/carts/cartApi"
import Loading from "../commonPage/Loading"

interface DataType {
    key: React.Key;
    image: string;
    name: string;
    brand: string;
    quantity: number;
    price: number;
    rating: number;
    description: string;
    delete?: boolean | undefined;
}

const Cart = () => {
    const { data: CartProducts, isLoading } = useGetAllCartsQuery({})
    if (isLoading) {
        <Loading />
    }

    const transformedProducts = CartProducts?.data?.map((product: any, index: number) => {
        const productdata = product?.productId
        return {
            ...productdata,
            key: index,
            no: index + 1
        }
    });


    const columns: TableColumnsType<DataType> = [
        {
            title: 'No',
            dataIndex: 'no',
        },
        {
            title: 'Title',
            dataIndex: 'name',
            render: (text: string) => <a className='font-bold'>{text}</a>,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (image) => {
                return <img src={image} width={100} />
            }
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            render: (p) => <h4 className='font-bold'>{p}</h4>
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            render: (quantity) => <Input type="number" defaultValue={quantity} style={{ width: "200px" }} />
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (price) => <h4 className='font-bold'>৳ {price}</h4>
        },

    ];





    return (
        <main className="py-10 px-1 md:px-0 min-h-screen">
            <section>
                <div className="container mx-auto">
                    <h1 className="font-semibold md:text-lg">Your Cart</h1>
                    <div>
                        <Table
                            // rowSelection={{
                            //     ...rowSelection,
                            // }}
                            columns={columns}
                            dataSource={transformedProducts}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Cart