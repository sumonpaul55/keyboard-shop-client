import { Rate } from "antd"


const TestimonialItem = (items: any) => {
    const { name, star, title, review, image, designation } = items.items
    return <div className="mx-3 border p-4 rounded-md shadow-lg cursor-grab bg-secondary">
        <div className="flex items-center gap-x-5 mb-2 border-b pb-3">
            <img src={image} alt={name} className="size-16 rounded-full" />
            <div className="">
                <h3 className="text-black font-bold mt-2 md:text-lg">{name}</h3>
                <Rate defaultValue={star} allowClear={false} style={{ color: 'red' }} />
                <h5 className="text-primary font-semibold">{designation}</h5>
            </div>
        </div>
        <h2 className="md:text-lg font-bold my-2">{title}</h2>
        <p className="text-sm sm:text-base line-clamp-6">{review}</p>
    </div>
}

export default TestimonialItem