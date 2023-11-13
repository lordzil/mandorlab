import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import React, { useState } from "react";
import { Modal, Button, Form, Input, message } from "antd";
//import { getCookie, setCookie } from 'cookies-next';
//import { useAuth } from './AuthContext';

const formItemLayout = {
  labelCol: {
    span: 7
  },
  wrapperCol: {
    span: 12
  }
};

const RegisterModal = ({ open, setOpen }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');
  const formItemLayout = {
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 12
    }
  };
  const handleLogin = async (values) => {
    setLoading(true);

    try {
      const { displayname, email, username, password, phone, user_address } =
        values;

      // Check if both fields are not empty
      if (!username || !password) {
        form.setFields([
          {
            name: "username",
            errors: ["username cannot be blank."]
          },
          {
            name: "password",
            errors: ["Please enter your password."]
          }
        ]);
        setLoading(false);
        return;
      }

      //handle check username is taken or not

      // Send a POST request to your API for authentication
      const response = await fetch(
        "https://34.101.200.253:8089/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: displayname,
            email: email,
            accountType: "customer",
            username: username,
            password: password,
            whatsapp: phone,
            lineId: "",
            kakaoId: "",
            agentId: "",
            address: user_address
          })
        }
      );

      // Check the response code and description
      if (response.ok) {
        const data = await response.json();
        // Parse the JSON result field
        const result = JSON.parse(data.result);

        // Store the JWT token in cookies
        //setCookie(
        //    'user_jwt',
        //    result.token,
        //    { path: '/', })
        console.log(result.token);
        login(result.token);

        // Close the modal
        setOpen(false);

        // Handle successful login (set user state, redirect, etc.)
      } else {
        // Handle login failure
        form.setFields([
          {
            name: "username",
            errors: ["Login failed. Please check your credentials."]
          },
          {
            name: "password",
            errors: ["Login failed. Please check your credentials."]
          }
        ]);
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      handleLogin(values);
    } catch (error) {
      console.error("Form validation error:", error);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };
  // Function to handle form submission
  const onFinish = () => {
    // Programmatically trigger the click event on the login button
    document.getElementById("login-button").click();
  };
  return (
    <Modal
      open={open}
      title="Register"
      className="min-w-[20%] pb-32"
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button
          id="register-button"
          key="register"
          loading={loading}
          onClick={handleOk}
        >
          Register
        </Button>
      ]}
    >
      <br />
      <Form
        form={form}
        name="registerForm"
        {...formItemLayout}
        initialValues={{}}
        style={{
          maxWidth: 800
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please choose your username."
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email."
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message:
                "minimum length is 8 character,\nmust contain numbers and character"
            }
          ]}
        >
          <Input.Password
            placeholder="Input Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item
          label="Phone/WA"
          name="whatsapp"
          rules={[
            {
              required: false,
              message: "Please enter your phone number / whatsapp number"
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RegisterModal;
