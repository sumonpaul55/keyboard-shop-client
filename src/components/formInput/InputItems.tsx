import { Form, Input, InputNumber } from 'antd'



const InputItems = ({ type, names, label, errorMessage, style, ...rest }: { rest?: any, type: string; names: string; label: string; errorMessage: string, style?: any }) => {
    const InputComponent: any = {
        names: Input,
        password: Input.Password,
        textarea: Input.TextArea,
        number: InputNumber,
    }
    const InputComponents = InputComponent[type] || Input

    return (
        <Form.Item
            label={label}
            name={names}
            rules={[{ required: true, message: errorMessage }]}
        >
            <InputComponents placeholder={names} type={type === "number" ? type : ""} style={style} {...rest} />
        </Form.Item>
    )
}

export default InputItems