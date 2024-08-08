import { Button, Form, Input, Space } from "antd"
import TextArea from "antd/es/input/TextArea"
import { FaTwitter } from "react-icons/fa"
import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6"


const Contact = () => {

    const keyboards = [
        { name: "Mechanical Keyboard", price: "800.00", image: "https://i.ibb.co/pj9KjKj/razer-cy.jpg" },
        { name: "Wireless Keyboard", price: "1600.99", image: "https://i.ibb.co/4jCtMdg/logi.jpg" },
        { name: "Gaming Keyboard", price: "3400.00", image: "https://i.ibb.co/F6PJBNg/corsiar.jpg" },
    ];

    return (
        <section className="py-10">
            <h1 className="text-lg md:text-2xl font-bold mb-2 text-center md:mb-10">Contact Us</h1>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="border p-2 md:p-4 rounded-md contact-form bg-slate-100 shadow">
                        <Form className="">
                            <Space className="w-full">
                                <Form.Item className="">
                                    <label htmlFor="" className="mb-2 block text-primary">First Name</label>
                                    <Input placeholder="First Name" className="" required />
                                </Form.Item>
                                <Form.Item>
                                    <label htmlFor="" className="mb-2 block text-primary">Last Name</label>
                                    <Input placeholder="Last Name" className="" required />
                                </Form.Item>
                            </Space>
                            <Form.Item>
                                <label htmlFor="" className="mb-2 block text-primary">Email</label>
                                <Input placeholder="Enter Your Email" className="" required />
                            </Form.Item>

                            <Space className="w-full">
                                <Form.Item className="">
                                    <label htmlFor="" className="mb-2 block text-primary">Phone with Country Code</label>
                                    <Input placeholder="Phone with Country code" className="" required />
                                </Form.Item>
                                <Form.Item>
                                    <label htmlFor="" className="mb-2 block text-primary">Quires</label>
                                    <Input placeholder="Write Your quires" className="" required />
                                </Form.Item>
                            </Space>
                            <Form.Item>
                                <label htmlFor="" className="mb-2 block text-primary">Your Message</label>
                                <TextArea placeholder="Your Message" />
                            </Form.Item>
                            <Button htmlType="submit" className="block w-full bg-primary text-white" >Submit</Button>
                        </Form>
                    </div>
                    <div className="border p-3 rounded-md">
                        <h2 className="font-bold text-left">Our Phychical Location</h2>
                        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57973.89340623162!2d90.3551197313414!3d24.748557067887447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f1007ad9b59%3A0x79a59cb060e32d6c!2sMymensingh!5e0!3m2!1sen!2sbd!4v1722019919537!5m2!1sen!2sbd" width="" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                {/* pricint */}
                <div className="pb-10 pt-10 md:pt-32">
                    <h1 className="text-center font-semibold sm:text-lg lg:text-2xl">Contact For Customized keyboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                        {keyboards.map((keyboard) => (
                            <PriceCard
                                key={keyboard.name}
                                keyboard={keyboard.name}
                                price={keyboard.price}
                                image={keyboard.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="py-3 bg-slate-600 px-2 mt-10 md:py-6 rounded-lg text-white my-20 mx-2">
                    <div className="flex gap-5 md:10 flex-wrap items-center justify-between md:px-5">
                        <h3 className="text-lg md:text-xl xl:text-2xl">Our Social Media :</h3>
                        <ul className="flex gap-4 flex-wrap md:gap-8">
                            <li className="size-12 shadow-inner hover:shadow-md hover:border border-slate-600 hover:shadow-slate-900 cursor-pointer duration-200 group shadow-slate-900 flex justify-center items-center rounded-full">
                                <FaFacebook className="group-hover:scale-105" size={25} />
                            </li>
                            <li className="size-12 shadow-inner hover:shadow-md hover:border border-slate-600 hover:shadow-slate-900 cursor-pointer duration-200 group shadow-slate-900 flex justify-center items-center rounded-full">
                                <FaInstagram className="group-hover:scale-105" size={25} />
                            </li>
                            <li className="size-12 shadow-inner hover:shadow-md hover:border border-slate-600 hover:shadow-slate-900 cursor-pointer duration-200 group shadow-slate-900 flex justify-center items-center rounded-full">
                                <FaTwitter className="group-hover:scale-105" size={25} />
                            </li>
                            <li className="size-12 shadow-inner hover:shadow-md hover:border border-slate-600 hover:shadow-slate-900 cursor-pointer duration-200 group shadow-slate-900 flex justify-center items-center rounded-full">
                                <FaYoutube className="group-hover:scale-105" size={25} />
                            </li>
                            <li className="size-12 shadow-inner hover:shadow-md hover:border border-slate-600 hover:shadow-slate-900 cursor-pointer duration-200 group shadow-slate-900 flex justify-center items-center rounded-full">
                                <FaLinkedin className="group-hover:scale-105" size={25} />
                            </li>
                            <li className="size-12 shadow-inner hover:shadow-md hover:border border-slate-600 hover:shadow-slate-900 cursor-pointer duration-200 group shadow-slate-900 flex justify-center items-center rounded-full">
                                <FaGlobe className="group-hover:scale-105" size={25} />
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact


const PriceCard = ({ keyboard, price, image }: { keyboard: string; price: string; image: string }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={image}
                alt={`${keyboard} keyboard`}
            />
            <div className="p-3 md:p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{keyboard}</h3>
                <p className="text-gray-600 mb-4">Pricing</p>
                <p className="md:text-2xl font-bold text-blue-600">৳{price}</p>
                <Button className="mt-3 w-full">Support</Button>
            </div>
        </div>
    );
};