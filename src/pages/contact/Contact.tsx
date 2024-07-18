import { Button, Form, Input, Space } from "antd"
import TextArea from "antd/es/input/TextArea"
import { FaTwitter } from "react-icons/fa"
import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6"

const Contact = () => {
    return (
        <section className="py-10">
            <h1 className="text-xl font-bold mb-2 text-center md:mb-5">Contact Us</h1>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        <iframe src="https://map.google.com" style={{ width: "100%", height: "300px", borderRadius: "10px", marginTop: "10px" }}>
                            <source src="https://map.google.com" />
                        </iframe>
                    </div>
                </div>
                <div className="py-3 bg-slate-600 px-2 mt-10 md:py-6 rounded-lg text-white">
                    <div className="flex gap-5 md:10 flex-wrap items-center justify-between md:px-5">
                        <h3 className="text-lg md:text-xl xl:text-2xl">Our Social Media :</h3>
                        <ul className="flex gap-4 md:gap-8">
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