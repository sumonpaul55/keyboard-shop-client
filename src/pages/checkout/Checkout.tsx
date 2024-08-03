
import { Button, Form, Input, Radio } from 'antd'
import { useAppSelector } from '../../redux/hook'

const Checkout = () => {
    const state = useAppSelector(state => state.cart.cart)

    if (!state.length) {
        return <h3 className='my-10 font-bold md:text-lg p-4 text-center'>You need to add some product first</h3>
    }
    const total = state.reduce((total, product) => {
        return (total + (product.price * product.quantity!))
    }, 0)
    return (
        <section className='py-5 sm:py-8 md:py-16'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row gap-4 md:gap-8'>
                    <div className='rounded p-3 border flex-1'>
                        <h3 className='font-semibold md:text-lg'>User Info</h3>
                        <Form className='mt-6 md:p-5'>
                            <div className='flex gap-4 flex-col md:flex-row items-center'>
                                <Form.Item className='flex-1'>
                                    <label htmlFor="" className='mb-2 block'>Name</label>
                                    <Input placeholder='Name' />
                                </Form.Item>
                                <Form.Item className='flex-1'>
                                    <label htmlFor="" className='mb-2 block'>Email</label>
                                    <Input placeholder='Email' />
                                </Form.Item>
                            </div>
                            <Form.Item className='flex-1'>
                                <label htmlFor="" className='mb-2 block'>Address</label>
                                <Input placeholder='Email' />
                            </Form.Item>
                            <Form.Item className='flex-1'>
                                <label htmlFor="" className='mb-2 block'>Payment Method</label>
                                <Radio value="Cash" className='flex items-center'>Cash On Delivery</Radio>
                            </Form.Item>
                        </Form>
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
                                <h1 className='mt-4 flex items-center justify-between'>Total = <p>৳ {total}</p></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-6 md:mt-10 text-center'>
                    <Button className='bg-primary text-white'>Confirm Checkout</Button>
                </div>
            </div>
        </section>
    )
}

export default Checkout