
import React, { useState } from 'react';
import {
    Modal,
    FloatButton,
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    Space,
    TreeSelect,
    Rate,
    Col,
    Row,
    Upload,
} from 'antd';

const QuotationModal = ({ open, setOpen  }) => {
    const { Option } = Select;
    const { TextArea } = Input;

    const formItemLayout = {
        labelCol: {
            span: 7,
        },
        wrapperCol: {
            span: 12,
        },
    };
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const [loading, setLoading] = useState(false);

    const [isVisit, setVisit] = useState(false);
    const handleVisit = (checked) => {
        setVisit(checked);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (

        <Modal
            open={open}
            title="New Quotation Form"
            className='min-w-[60%] pb-32'
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Return
                </Button>,
                <Button key="submit" loading={loading} onClick={handleOk}>
                    Submit
                </Button>,
            ]}
        >
            <br />
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    'input-number': 3,
                    'checkbox-group': ['A', 'B'],
                    rate: 3.5,
                    'color-picker': null,
                }}
                style={{
                    maxWidth: 800,
                }}
            >
                <p className='font-tilt text-lg'>Contact Details</p>
                <br />
                <Form.Item label="Email">
                    <span className="ant-form-text">mail@email.com</span>
                </Form.Item>
                <Form.Item label="Whatsapp">
                    <span className="ant-form-text">0899991234</span>
                </Form.Item>
                <Form.Item label="LINE">
                    <span className="ant-form-text">@idline123</span>
                </Form.Item>
                <Form.Item label="KAKAO">
                    <span className="ant-form-text">@ID123456</span>
                </Form.Item>
                <Form.Item
                    name="select"
                    label=" "
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '',
                        },
                    ]}
                >
                    <Select placeholder="Preferred communication">
                        <Option value="email">Email</Option>
                        <Option value="whatsapp">Whatsapp</Option>
                        <Option value="line">LINE</Option>
                        <Option value="kakao">KAKAO</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Request for Visit">
                    <Switch
                        checkedChildren="Yes"
                        unCheckedChildren="No"
                        defaultChecked={isVisit}
                        onChange={handleVisit} />
                </Form.Item>
                <Form.Item label="Visit Date">
                    <DatePicker disabled={!isVisit} />
                </Form.Item>


                <p className='font-tilt text-lg'>Building Details</p>
                <br />
                <Form.Item label="Services">
                    <Select placeholder="Pick one of our services">
                        <Option value="service_1">Interior and Design</Option>
                        <Option value="service_2">Total Rennovation</Option>
                        <Option value="service_3">Sameday Fixing</Option>
                        <Option value="service_4">Installation</Option>
                        <Option value="service_etc">....</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Building Type">
                    <Select placeholder="Select your building type">
                        <Option value="bld01">Home</Option>
                        <Option value="bld02">Ruko</Option>
                        <Option value="bld03">Office</Option>
                        <Option value="bld03">Store/Outlet</Option>
                        <Option value="bld04">Mall</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Ownership">
                    <Radio.Group>
                        <Radio value="owner"> Owner </Radio>
                        <Radio value="tenant"> Tenant </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Budget">
                    <Input />
                </Form.Item>
                <Form.Item label="Offerings">
                    <InputNumber max={3} min={1} defaultValue={1} />
                </Form.Item>

                <br />
                <p className='font-tilt text-lg'>Additional Details</p>
                <br />

                <Form.Item label="Photos" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            +
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item label="Description">
                    <TextArea rows={4} />
                </Form.Item>

            </Form>
        </Modal>
    );
};

export default QuotationModal;
