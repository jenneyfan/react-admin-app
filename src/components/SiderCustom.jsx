import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderCustom extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: ''
    };
    componentDidMount() {
        const _path = this.props.path;
        this.setState({
            openKey: _path.substr(0, _path.lastIndexOf('/')),
            selectedKey: _path
        });
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state);

    };
    openMenu = v => {
        console.log(v);
        this.setState({
            openKey: v[v.length - 1]
        })
    };
    render() {
        return (
            <Sider
                breakpoint="lg"
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" />
                <Menu
                    onClick={this.menuClick}
                    theme="dark"
                    mode={this.state.mode}
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={[this.state.openKey]}
                    onOpenChange={this.openMenu}
                >
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span className="nav-text"><Link to={'/'}>首页</Link></span>
                    </Menu.Item>
                    <SubMenu
                        key="/app/ui"
                        title={<span><Icon type="scan"/><span className="nav-text">UI</span></span>}
                    >
                        <Menu.Item key="/app/ui/buttons"><Link to={'/app/ui/buttons'}/>按钮</Menu.Item>
                        <Menu.Item key="/app/ui/icons"><Link to={'/app/ui/icons'}/>图标</Menu.Item>
                        <Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}/>加载中</Menu.Item>
                        <Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}/>加载中</Menu.Item>

                    </SubMenu>
                    <SubMenu
                        key="/app/charts"
                        title={<span><Icon type="pie-chart"/><span className="nav-text">图表</span></span>}
                    >
                        <Menu.Item key="/app/charts/echarts"><Link to={'/app/charts/echarts'}/>Echarts</Menu.Item>
                        <Menu.Item key="/app/charts/recharts"><Link to={'/app/charts/recharts'}/>Recharts</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/table"
                        title={<span><Icon type="copy" /><span className="nav-text">表格</span></span>}
                    >

                        <Menu.Item key="/app/table/basicTable"><Link to={'/app/table/basicTable'}>基础表格</Link></Menu.Item>
                        <Menu.Item key="/app/table/advancedTable"><Link to={'/app/table/advancedTables'}>高级表格</Link></Menu.Item>
                        <Menu.Item key="/app/table/searchTable"><Link to={'/app/table/searchTable'}>查询表格</Link></Menu.Item>
                        <Menu.Item key="/app/table/selectTable"><Link to={'/app/table/selectTable'}>选择表格</Link></Menu.Item>
                        <Menu.Item key="/app/table/sortTable"><Link to={'/app/table/sortTable'}>排序表格</Link></Menu.Item>
                        <Menu.Item key="/app/table/asynchronousTable"><Link to={'/app/table/asynchronousTable'}>异步表格</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/app/form"
                        title={<span><Icon type="edit" /><span className="nav-text">表单</span></span>}
                    >
                        <Menu.Item key="/app/form/basicForm"><Link to={'/app/form/basicForm'}>基础表单</Link></Menu.Item>
                        <Menu.Item key="/app/form/wrappedForm"><Link to={'/app/form/wrappedForm'}>嵌套表单</Link></Menu.Item>
                    </SubMenu>
                </Menu>
                <style>
                    {`
                        #nprogress .spinner{
                            left: ${this.state.collapsed ? '70px' : '206px'};
                            right: 0 !important;
                        }
                        .nav-text a{
                            color:#FFF;
                        }
                    `}
                </style>
            </Sider>
        )
    }
}

export default SiderCustom;