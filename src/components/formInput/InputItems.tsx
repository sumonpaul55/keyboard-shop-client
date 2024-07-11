import { Form, Input } from 'antd'

const InputItems = ({ type, names, label, errorMessage }: { type: string; names: string; label: string; errorMessage: string }) => {
    const InputComponent = {
        names: Input,
        password: Input.Password,
        textarea: Input.TextArea,
    }
    const InputComponents = InputComponent[type] || Input

    return (
        <Form.Item
            label={label}
            name={names}
            rules={[{ required: true, message: errorMessage }]}
        >
            <InputComponents />
        </Form.Item>
    )
}

export default InputItems