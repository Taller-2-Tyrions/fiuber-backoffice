import { Button, Form, Input } from 'antd';
import useAuth from '../../useAuth';

const Login = () => {
  const {login} = useAuth();
  
  const onFinish = async (values) => {
    await login(values.email, values.password); 
    console.log('Success:', values);
  };
  

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
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
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;