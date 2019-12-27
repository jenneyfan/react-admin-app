import React from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';

const BreadcrumbCustom = ({first,second}) => {
    first = <Breadcrumb.Item>{first}</Breadcrumb.Item> || '';
    second = <Breadcrumb.Item>{second}</Breadcrumb.Item> || '';
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to={'/#'}>首页</Link> > {first} > {second}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
};

export default BreadcrumbCustom;