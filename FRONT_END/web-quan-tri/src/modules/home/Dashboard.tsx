import { Button, Card, Checkbox, Form, Input, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.scss';

const { Title, Text } = Typography;

export function Dashboard() {
    const onFinish = (values: any) => {
        console.log('Login data:', values);
    };

    return (
        <div className="login-container">
            <Card className="login-card">
                <Title level={3} style={{ color: '#fff', textAlign: 'center' }}>
                    Đăng nhập
                </Title>

                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                    autoComplete='off'
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please enter username' }]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Username"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter password' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>

                    <div className="login-options">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox style={{ color: '#fff' }}>Remember me</Checkbox>
                        </Form.Item>
                        <a href="#" className="forgot">
                            Forgot password?
                        </a>
                    </div>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            size="large"
                            className="login-btn"
                        >
                            Login
                        </Button>
                    </Form.Item>

                    <Text className="register">
                        Don&apos;t have an account? <a href="#">Register</a>
                    </Text>
                </Form>
            </Card>
        </div>
    );
}