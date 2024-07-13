import React, { } from 'react';
import { Divider, Image, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { useGetAllProductQuery } from '../../../redux/features/products/productApi';

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


const ProductTAble: React.FC = () => {
    const { data: products, isLoading } = useGetAllProductQuery({})

    const transformedProducts = products?.data.map((product: any, index: number) => ({
        ...product,
        key: product.id,  // Assuming 'id' is the unique identifier
        no: index + 1
    }));

    const columns: TableColumnsType<DataType> = [
        {
            title: 'No',
            dataIndex: 'no',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (image) => {
                return <Image src={image} width={100} />
            }
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },

    ];

    if (isLoading) {
        return <h3 className='text-center font-bold text-xl'>Loading...</h3>
    }

    return (
        <div>
            <h1>All Products</h1>
            <Divider />

            <Table
                // rowSelection={{
                //     ...rowSelection,
                // }}
                columns={columns}
                dataSource={transformedProducts}
            />
        </div>
    );
};

export default ProductTAble;