import React from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';

const BreadcrumbCustom = ({first,second}) => {
    first = <Breadcrum.Item>{first}</Breadcrum.Item> || '';
    second = <Breadcrum.Item>{second}</Breadcrum.Item> || '';
    return (
        <Breadcrumb>
            <Breadcrum.Item>
                <Link to={'/#'}>首页</Link>
                {first}
                {second}
            </Breadcrum.Item>
        </Breadcrumb>
    )

};

export default BreadcrumbCustom;