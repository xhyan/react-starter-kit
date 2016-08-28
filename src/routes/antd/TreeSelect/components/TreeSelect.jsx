import React, {Component} from 'react';
import { TreeSelect } from 'antd';

const SHOW_PARNET = TreeSelect.SHOW_PARNET;

class MyTreeSelect extends Component{
  render(){
    const props = this.props;
    return <TreeSelect treeData={props.ts.treeData} value={props.ts.treeValue}
      onChange={props.change} multiple={true} treeCheckable={true}
      searchPlaceholder={'请选择'} style={{width: 300}} showCheckedStrategy={SHOW_PARNET}/>
  }
}

export default MyTreeSelect;
