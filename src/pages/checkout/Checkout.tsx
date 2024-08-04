import { Button, Form, FormProps, Input, Radio } from 'antd'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
// import { FieldType } from './checkout.interface'
import { Navigate, useLocation, useNavigate, } from 'react-router-dom'
import { useAddOrderMutation } from '../../redux/features/orders/ordersApi';
import { toast } from 'sonner';
import { clearCart } from '../../redux/features/cartSlice/cartSlice';

export type FieldType = {
    name: string;
    email: string;
    phone: number;
    address: string;
    paymentMethod: string;
};

const Checkout = () => {
    const state = useAppSelector(state => state.cart.cart)
    const [addOrder] = useAddOrderMutation()
    const { state: totalAmout } = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    if (!state.length) {
        return <h3 className='my-10 font-bold md:text-lg p-4 text-center'>You need to add some product first</h3>
    }

    const products: { productId: string; productQuantity: number }[] = []

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        const { name, email, phone, address, paymentMethod } = values;
        state?.map((items) => (
            products.push({ productId: items?._id, productQuantity: items?.quantity })
        ))
        const checkoutItem = {
            name, email, phone, address, paymentMethod, products, totalAmout
        }
        const res = await addOrder(checkoutItem)
        if (res?.data?.data) {
            dispatch(clearCart())
            toast.success(`${res.data.message}`, {
                duration: 2000
            })
            navigate("/products")
        }
        // console.log(res?.error)
        if (res?.error) {
            toast.error(`Something went wrong. Checkout not completed`)
        }
    };

    return (
        <section className='py-5 sm:py-8 md:py-16'>
            <div className="container mx-auto">
                <Form onFinish={onFinish} layout='vertical'>
                    <div className='flex flex-col lg:flex-row gap-4 md:gap-8'>
                        <div className='rounded p-3 border flex-1'>
                            <h3 className='font-semibold md:text-lg'>User Info</h3>
                            <div className='mt-6 md:p-5'>
                                <div className='flex gap-4 flex-col md:flex-row items-center'>
                                    <Form.Item<FieldType> label="Name" name="name" className='flex-1' rules={[{ required: true, message: "Name is required" }]}>
                                        {/* <label htmlFor="" className='mb-2 block'>Name</label> */}
                                        <Input placeholder='Name' />
                                    </Form.Item>
                                    <Form.Item<FieldType> label="Email" name="email" className='flex-1' rules={[{ required: true, message: "You must provide an email" }]}>
                                        <Input placeholder='Email' />
                                    </Form.Item>
                                </div>
                                <Form.Item<FieldType> name="address" className='flex-1' rules={[{ required: true, message: "Address is required" }]} label="Address">
                                    <Input placeholder='Email' />
                                </Form.Item>
                                <Form.Item<FieldType> name="phone" className='flex-1' rules={[{ required: true, message: "You Should provide an Phone number" }]} label="Phone">
                                    <Input placeholder='Phone Number' />
                                </Form.Item>
                                <Form.Item<FieldType> label="payment Method" name="paymentMethod" className='flex-1' rules={[{ required: true, message: "Please Select the Payment method" }]}>
                                    <Radio.Group className='flex'>
                                        <Radio value="Cash" className='flex items-center'>Cash On Delivery</Radio>
                                        <Radio value="Stripe" className='flex items-center'>Stripe</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                        </div>
                        <div className='rounded flex-1 border p-3'>
                            <h3 className='font-semibold md:text-lg'>Product Info</h3>
                            <div className='flex flex-col justify-between h-[90%]'>
                                <div className='mt-3'>
                                    {
                                        state?.map((items, idx) => (
                                            <div key={idx}>

                                                <div className='flex justify-between border my-1 p-1 border-gray-200'>
                                                    <h4>{idx + 1}. {items.name}</h4>
                                                    <p>৳ {items.price * items.quantity}</p>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className='font-bold md:text-lg'>
                                    <hr />
                                    <h1 className='mt-4 flex items-center justify-between'>Total = <p>৳ {totalAmout}</p></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 md:mt-10 text-center'>
                        <Button className='bg-primary text-white' htmlType='submit'>Confirm Checkout</Button>
                    </div>
                </Form>

            </div>
        </section>
    )
}

export default Checkout