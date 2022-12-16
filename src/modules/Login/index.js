import { ClassNames } from '@emotion/react';
import { Button, Form, Input, Image } from 'antd';
import FiuberLogo from "../../assets/fiuber-logo.jpeg"
import useAuth from '../../useAuth';

const Login = () => {
  const {login} = useAuth();
  
  const onFinish = async (values) => {
    await login(values.email, values.password); 
    console.log('Success:', values);
  };
  

  return (
    <div>
      <div style={{"display": "flex"}}>
        <Image
                  width={75}
                  src={FiuberLogo}
                  preview={false}
                />
        <h1> Fiuber Admin Backoffice Login</h1>
      </div>
      <hr />
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 10,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Escribe tu mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: 'Escribe tu contraseña!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 12,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;