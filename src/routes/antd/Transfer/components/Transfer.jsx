import React, {Component} from 'react';
import {Transfer} from 'antd';


class Transfer extends Component{

    componentDidMount(){
        this.props.fetch();
    }

    render(){
      const props = this.props;
        return(
            <Transfer
             dataSource={props.transfer.source}
             targetKeys={props.transfer.target}

            />
        )
    }
}
