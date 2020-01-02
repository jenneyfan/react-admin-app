import React,{Component} from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { getPros } from "../../axios/index";
import BreadcrumbCustom from '../BreadcrumbCustom';

const columns = [
    {
        title:'标题',
        dataIndex:'title',
        width:200
    },{
        title:'标题',
        dataIndex:'desc'
    }
];

class AsynchronousTable extends Component{
    state = {
        selectedRowKeys:[],
        loading:false,
        data:[]
    };
    componentDidMount(){
        this.start();
    }
    start = () => {
        this.setState({loading:true});
        getPros('/getListByLastTime.json').then(res=>{
            this.setState({
                data: [...res.d.map(val => {
                    val.key = val.id;
                    return val;
                })],
                loading:false
            });
        });
        console.log(this.state)
    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed:', selectedRowKeys);
        this.setState({selectedRowKeys})
    };
    render(){
        const {loading, selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="异步表格"  />
                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                            <Card title="异步表格" bordered={false}>
                                <div style={{marginBottom:16}}>
                                    <Button type="primary" onClick={this.start} disabled={loading} loading={loading} >
                                        Reload
                                        <span style={{marginLeft:8}}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
                                    </Button>
                                </div>
                                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
                            </Card>
                        </div>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default AsynchronousTable;
