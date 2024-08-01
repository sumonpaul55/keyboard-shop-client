import React from 'react'
import { useAppSelector } from '../../redux/hook'

const Checkout = () => {
    const state = useAppSelector(state => state.cart.cart)
    console.log(state)
    if (!state.length) {
        return <h3 className='my-10 font-bold md:text-lg p-4 text-center'>You need to add some product first</h3>
    }
    return (
        <section className='py-5 sm:py-8 md:py-16'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8'>
                    <div>
                        <h3 className='font-semibold md:text-lg'>User Info</h3>
                    </div>
                    <div>
                        <h3 className='font-semibold md:text-lg'>Product Info</h3>
                        <div className='mt-6'>
                            {
                                state?.map((items, idx) => (
                                    <div key={idx}>
                                        <h4>{items.name}</h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout