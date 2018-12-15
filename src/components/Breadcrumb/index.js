import React, { Component } from 'react';
import Link from 'umi/link';
import { Breadcrumb, Icon } from 'antd';

class CustomBreadcrumb extends Component{
    render(){
        return (
            <Breadcrumb style={{padding:'10px 20px 5px'}}>
                <Breadcrumb.Item>
                    <Link to='/'>主页 </Link>
                </Breadcrumb.Item>
              {this.props.activeMenu.map(item=>{
                <Breadcrumb.Item key={item.path}>
                  <Link to={item.path}>
                    {item.name}
                  </Link>
                </Breadcrumb.Item>
              })}
            </Breadcrumb>
        )
    }
}

export default CustomBreadcrumb