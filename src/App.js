import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import HeaderCustom from './components/HeaderCustom';
import SiderCustom from './components/SiderCustom';
import Page from "./components/Page";
import Login from "./components/pages/Login";
const { Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={'/login'} component={Login}></Route>
                    <Layout className="ant-layout-has-sider" style={{height:'100%'}}>
                        <SiderCustom path="/" />
                        <Layout>
                            <HeaderCustom />
                            <Content style={{minHeight:'auto'}}>
                                <Page />
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                Ant Design ©2016 Created by Ant UED
                            </Footer>
                        </Layout>
                    </Layout>
                </Switch>
            </Router>
        );
    }
}

export default App;