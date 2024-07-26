// src/components/Footer.tsx
import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';

const { Footer } = Layout;
const { Text, Link } = Typography;

const FooterComponent: React.FC = () => {
    return (
        <Footer className="bg-gray-800 text-white px-2 md:px-0 py-10 md:py-20">
            <div className="container mx-auto">
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={6}>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul>
                            <li><Text className="text-gray-400">Email: support@keyboardshop.com</Text></li>
                            <li><Text className="text-gray-400">Phone: (123) 456-7890</Text></li>
                            <li><Text className="text-gray-400">Address: 123 Keyboard St, Music City, USA</Text></li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <ul>
                            <li><Link href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</Link></li>
                            <li><Link href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</Link></li>
                            <li><Link href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</Link></li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <form action="#" method="post">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 mb-4 rounded border border-gray-400"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </Col>
                </Row>
                <div className="text-center mt-6">
                    <Text className="text-gray-400">© {new Date().getFullYear()} Electric Keyboard Shop. All rights reserved.</Text>
                </div>
            </div>
        </Footer>
    );
};

export default FooterComponent;
