import React, {Component} from 'react';
import {Transfer} from 'antd';


class MyTransfer extends Component{

    componentDidMount(){
        this.props.fetch();
    }

    render(){
      const props = this.props;
        return(
            <Transfer rowKey={record => record.key} dataSource={props.transfer.source} targetKeys={props.transfer.target} onChange={props.handleChange} render={record => record.title} />
        );
    }
}

export default MyTransfer;
