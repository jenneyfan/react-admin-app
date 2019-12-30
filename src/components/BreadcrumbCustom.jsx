import React from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';

const BreadcrumbCustom = ({first,second}) => {
    first = <Breadcrumb.Item>{first}</Breadcrumb.Item> || '';
    second = <Breadcrumb.Item>{second}</Breadcrumb.Item> || '';
    return (
        <div>
            <Breadcrumb style={{marginBottom:'15px'}}>
                <Breadcrumb.Item>
                    <Link to={'/#'}>首页</Link>
                </Breadcrumb.Item>
                {first}
                {second}
            </Breadcrumb>
        </div>
    )
};

export default BreadcrumbCustom;