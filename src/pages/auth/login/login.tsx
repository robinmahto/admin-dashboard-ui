import React from 'react';
import { Card, Layout, Space, Form, Input, Flex, Checkbox, Button, message, Alert} from 'antd';
import { LockFilled, UserOutlined, LockOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Credential } from "../../../types";
import { login } from '../../../http/api';

const Login: React.FC = () => {
  const [ messageApi, contextHolder] = message.useMessage();
  const loginUser = async (credentials: Credential) => {
    console.log('Received values of form: ', credentials);
    return
    const { data } = await login(credentials);
    return data;
  };

  const { mutate, isPending, error, isError} = useMutation({
    mutationKey: ['login'],
    mutationFn: loginUser,
    onSuccess: () => {
      console.log('success')
      messageApi.open({
        type:'success',
        content:'Login successfull'
      })
    }
  });

  return (
    <>
    {contextHolder}
    <Layout style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card title={<Space style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <LockFilled />
        Login
      </Space>} style={{ width: 300 }}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={(values) => {
            mutate({ email: values.email, password: values.password })
          }}
        >
         {isError && <Alert type='error' message={error.message} style={{marginBottom:'10px'}} />} 
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }, {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },]}
          >
            <Input prefix={<UserOutlined />} type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" loading={isPending ? true : false}>
              Log in
            </Button>
            or <a href="">Register now!</a>
          </Form.Item>
        </Form>

      </Card>
    </Layout>
    </>
  )
};

export default Login;