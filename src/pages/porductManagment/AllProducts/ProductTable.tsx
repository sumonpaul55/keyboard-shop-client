import React, { } from 'react';
import { Button, Divider, Image, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { useDeleteProductMutation, useGetAllProductQuery } from '../../../redux/features/products/productApi';
import { TbTrash } from 'react-icons/tb';
import EditProduct from '../addProduct.tsx/editProduct/EditProductModal';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

export interface DataType {
    key: React.Key;
    image: string;
    name: string;
    brand: string;
    availableQuantity: number;
    price: number;
    rating: number;
    description: string;
    delete?: boolean | undefined;
}

const ProductTAble: React.FC = () => {
    const { data: products, isLoading } = useGetAllProductQuery({})

    const transformedProducts = products?.data?.map((product: any, index: number) => ({
        ...product,
        key: product._id,  // Assuming 'id' is the unique identifier
        no: index + 1
    }));

    // handle delete product
    const [deleteProduct] = useDeleteProductMutation()

    const handleDelete = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteProduct(id)
                if (res.data.success) {
                    toast.success(res.data.message)
                } else {
                    toast.error("Something went wrong")
                }
            }
        });











    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'No',
            dataIndex: "no",
        },
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text: string) => <a className='md:font-bold text-xs sm:text-base' style={{ lineHeight: "1" }}>{text}</a>,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (image) => {
                return <Image src={image} width={70} />
            }
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            render: (p) => <h4 className='font-bold text-xs sm:text-base text-center'>{p}</h4>
        },
        {
            title: 'Quantity',
            dataIndex: 'availableQuantity',
            render: (p) => <h4 className='font-bold text-xs sm:text-base text-center'>{p}</h4>
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (p) => <h4 className='font-bold text-xs sm:text-base text-center'>৳ {p}</h4>
        },
        {
            title: 'Action',
            render: (transformedProducts) => (<div className='flex gap-3'>
                <EditProduct product={transformedProducts} />
                <Button onClick={() => handleDelete(transformedProducts._id)} className='w-fit p-1 h-auto border-0 text-red-600'><TbTrash size={20} /></Button>
            </div>)
        },
    ];


    if (isLoading) {
        return <h3 className='text-center font-bold text-xl md:text-base'>Loading...</h3>
    }



    return (
        <div>
            <h1 className='font-bold md:text-lg'>All Products</h1>
            <Divider className='py-0 my-3' />
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