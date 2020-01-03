import React,{Component} from 'react';
import {Row, Col, Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;
class Login extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err,values) => {
            if(!err){
                console.log('Received values of form:', values);
                this.props.history.push({pathname:'/app'})
            }
        });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Row type="flex" justify="center" align="middle" style={{height:'100%'}} >
                <Col span={4}>
                    <div className="login" style={{minWidth:'200px'}}>
                        <div className="login-form">
                            <div className="login-logo">
                                <div style={{margin:'20px',fontSize:'20px',textAlign:'center'}}>React Admin</div>
                            </div>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem>
                                    {getFieldDecorator('username',{
                                        rules:[{required:true,message:'请输入用户名'}]
                                    })(
                                        <Input prefix={<Icon type="user" style={{fontSize:13}} />} placeholder="用户名" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password',{
                                        rules:[{required:true,message:'请输入密码'}]
                                    })(
                                        <Input prefix={<Icon type="lock" style={{fontSize:13}} />} placeholder="用户名" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('remember',{
                                        valuePropName:'checked',initialValue:true
                                    })(
                                        <Checkbox>记住我</Checkbox>
                                    )}
                                    <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                                    <Button type="primary" htmlType="submit"  className="login-form-buton" style={{width:'100%'}}>登录</Button>
                                    或 <a href="">现在就去注册</a>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}
export default Form.create()(Login);