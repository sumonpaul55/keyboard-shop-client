import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, InputNumber, message, Upload } from 'antd';
import type { FormProps, GetProp, UploadFile, UploadProps } from 'antd';
import InputItems from '../formInput/InputItems';
import TextArea from 'antd/es/input/TextArea';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
type FormFieldType = {
    username?: string;
    password?: string;
    remeber?: string;
}
const AddProductForm: React.FC = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [imageUrl, setImageUrl] = useState("")
    const [uploading, setUploading] = useState(false);


    const handleUpload = () => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('image', file as FileType);
            console.log(file)
        });
        setUploading(true);
        fetch('https://api.imgbb.com/1/upload?key=9886ac79a2243ffd44ce467dd58abf5a', {
            body: formData,
            method: 'POST',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setFileList([]);
                message.success('upload successfully.');
                setImageUrl(data?.data?.display_url)
            })
            .catch(() => {
                message.error('upload failed.');
            }).finally(() => {
                setUploading(false);
            });
    };
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

    const onFinish: FormProps<FormFieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FormFieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className='max-w-[600px] mx-auto shadow rounded p-6 bg-white mt-10'>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>

                {/* <Button
                    type="primary"
                    onClick={handleUpload}
                    disabled={fileList.length === 0}
                    loading={uploading}
                    style={{ marginTop: 16 }}
                >
                    {uploading ? 'Uploading' : 'Start Upload'}
                </Button> */}




                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>


                    <InputItems names='password' label="Password" errorMessage="Password required field" type='password' />
                    <Form.Item label="Success" hasFeedback validateStatus="success">

                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>


                    {/* <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>










                <div>
                    <img src={imageUrl} alt="" />
                </div>
            </div>
        </>
    );
};

export default AddProductForm;