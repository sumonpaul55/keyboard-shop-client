import { useState } from 'react';
import { Button, Col, Form, Input, InputNumber, Modal, Rate, Space } from 'antd';
import type { FormProps, } from 'antd';
import { FaEdit } from 'react-icons/fa';
import TextArea from 'antd/es/input/TextArea';
import { useEditProductMutation } from '../../../../redux/features/products/productApi';
import { toast } from 'sonner';
export type TEditProduct = {
    image: string;
    name: string;
    brand: string;
    availableQuantity: number;
    price: number;
    rating: number;
    description: string;
}

const EditProduct = ({ product }: any) => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const [editProduct] = useEditProductMutation();

    const desc = ['bad', 'medium', 'normal', 'good', 'wonderful'];
    const [rating, setRateing] = useState(product.rating);

    const onFinish: FormProps['onFinish'] = async (values) => {

        const editAbleProduct = { ...values, rating }
        const res = await editProduct({ id: product._id, editAbleProduct })
        if (res.data.success) {
            toast.success(res?.data?.message)
            setOpen(false)
        } else {
            toast.error("Somethisng Went Wrong")
        }
    }

    return (
        <>
            <Space>
                <Button className='border-0 text-primary' style={{ padding: 0, background: "none" }} onClick={showModal}>
                    <FaEdit size={20} />
                </Button>
            </Space>
            <Modal
                open={open}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}>
                <div className='max-w-[80%] mx-auto shadow rounded p-6 bg-white'>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off">

                        <Form.Item name="name" label="Name" initialValue={product.name}>
                            <Input value={product.name} />
                        </Form.Item>
                        <Form.Item name="image" label="Image" initialValue={product.image}>
                            <Input value={product?.image} />
                        </Form.Item>

                        <Form.Item label="Brand" name="brand" initialValue={product.brand}>
                            <Input value={product.brand} />
                        </Form.Item>

                        <Form.Item label="Quantity" name="availableQuantity" initialValue={product.availableQuantity} style={{ width: "100%" }} >
                            <InputNumber value={product.availableQuantity} />
                        </Form.Item>

                        <Form.Item label="Price" name="price" initialValue={product.price} style={{ width: "100%" }}>
                            <InputNumber value={product.price} />
                        </Form.Item>
                        <Form.Item label="Description" name="description" initialValue={product.description} style={{ width: "100%" }}>
                            <TextArea value={product.description} />
                        </Form.Item>

                        <Form.Item>
                            <Rate tooltips={desc} onChange={setRateing} value={rating} style={{ color: '#F4D100' }} />
                            {rating ? <span>{desc[rating - 1]}</span> : null}
                        </Form.Item>




                        <Col span="8" style={{ margin: "auto", marginTop: "50px" }}>
                            <Button style={{ margin: "auto", width: "100%" }} type="primary" htmlType="submit">Submit</Button>
                        </Col>
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default EditProduct;