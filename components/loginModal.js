import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import React, { useState } from "react";
import { Modal, Button, Form, Input, message } from "antd";
//import { getCookie, setCookie } from 'cookies-next';
import { useAuth } from "./AuthContext";
import RegisterModal from "./registerModal";

const formItemLayout = {
  labelCol: {
    span: 7
  },
  wrapperCol: {
    span: 12
  }
};

const LoginModal = ({ open, setOpen }) => {
  //   const { login } = useAuth();
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
  const [registerOpen, setRegisterOpen] = useState(false);
  const showRegisterModal = () => {
    setOpen(false);
    setRegisterOpen(true);
  };
  const handleLogin = async (values) => {
    setLoading(true);

    try {
      const { username, password } = values;

      // Check if both fields are not empty
      if (!username || !password) {
        form.setFields([
          {
            name: "username",
            errors: ["Please enter your username or email."]
          },
          {
            name: "password",
            errors: ["Please enter your password."]
          }
        ]);
        setLoading(false);
        return;
      }

      // Send a POST request to your API for authentication
      const response = await fetch(
        "https://35.198.249.165:3000/user/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: username,
            password: password
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

  const handleRegister = () => {};
  // Function to handle form submission
  const onFinish = () => {
    // Programmatically trigger the click event on the login button
    document.getElementById("login-button").click();
  };
  return (
    <>
      <RegisterModal open={registerOpen} setOpen={setRegisterOpen} />
      <Modal
        open={open}
        title="Login"
        className="min-w-[20%] pb-32"
        onCancel={handleCancel}
        footer={[
          <Button key="register" onClick={showRegisterModal}>
            Register
          </Button>,
          <Button
            id="login-button"
            key="login"
            loading={loading}
            onClick={handleOk}
          >
            Login
          </Button>
        ]}
      >
        <br />
        <Form
          form={form}
          name="loginForm"
          {...formItemLayout}
          initialValues={{}}
          style={{
            maxWidth: 800
          }}
        >
          <Form.Item
            label="Username/Email"
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your username or email."
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
                message: "Please enter your password."
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
        </Form>
      </Modal>
    </>
  );
};

export default LoginModal;
