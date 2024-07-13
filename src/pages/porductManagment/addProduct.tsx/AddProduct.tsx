import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, InputNumber, message, Row, Upload } from 'antd';
import type { FormProps, GetProp, UploadFile, UploadProps } from 'antd';
import { toast } from 'sonner';
import InputItems from '../../../components/formInput/InputItems';
import { useCreateProductMutation } from '../../../redux/features/products/productApi';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const AddProduct: React.FC = () => {
    const [createProduct] = useCreateProductMutation()
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    // const [imageUrl, setImageUrl] = useState("")
    const props: UploadProps = {
        // onRemove: (file) => {
        //     const index = fileList.indexOf(file);
        //     const newFileList = fileList.slice();
        //     newFileList.splice(index, 1);
        //     setFileList(newFileList);
        // },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };

    const onFinish: FormProps['onFinish'] = (values) => {
        toast.loading("Product Uploading", { id: "productImg" })
        const { rating, description, name, price, quantity, brand }: any = values
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('image', file as FileType);
        });
        fetch('https://api.imgbb.com/1/upload?key=9886ac79a2243ffd44ce467dd58abf5a', {
            body: formData,
            method: 'POST',
        }).then((res) => res.json())
            .then(async (data) => {
                setFileList([]);
                message.success('upload successfully.');
                if (data?.data?.display_url) {
                    const productData = {
                        rating, description, name, price, quantity, brand, image: data?.data?.display_url
                    }
                    const res = await createProduct(productData)
                    console.log(res)
                    toast.success('Product Added Successfully', { id: "productImg" })
                } else {
                    toast.error("Something went wrong Product Image not Uploading", { id: "productImg" })
                }
            }).catch(() => {
                toast.error("Product image upload failed", { id: "productImg" })
            })

    };

    const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
        toast.error(`${errorInfo}`)
    };

    return (
        <>
            <div className='max-w-[80%] mx-auto shadow rounded p-6 bg-white'>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">

                    <InputItems type="text" names="name" label="Name" errorMessage="Name is required" />

                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={8} className='text-end pr-2'>
                            <label htmlFor="">Product Image: </label>
                        </Col>
                        <Col span={16}>
                            <Upload {...props}>
                                <Button icon={<UploadOutlined />} style={{ display: 'block', width: "100%" }}>Product Image</Button>
                            </Upload>
                        </Col>
                    </Row>
                    <InputItems type="text" names="brand" errorMessage='Brand name is required' label="Brand" />

                    <InputItems label="Quantity" names="quantity" type="number" style={{ width: "100%" }} errorMessage='Quantity is required as positive number' />

                    <InputItems label="Price" names="price" type="number" style={{ width: "100%" }} errorMessage='Price is required as positive number' />

                    <InputItems type="textarea" names="description" label="Description" errorMessage="Bio is required" />

                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[{ required: true, message: "rating required max 5" }]}
                    >
                        <InputNumber type='number' max={5} />

                    </Form.Item>

                    <Col span="8" style={{ margin: "auto", marginTop: "50px" }}>
                        <Button style={{ margin: "auto", width: "100%" }} type="primary" htmlType="submit">Submit</Button>
                    </Col>
                </Form>
            </div>
        </>
    );
};

export default AddProduct;