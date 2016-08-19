import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  TimePicker,
  Switch,
  Radio,
  Cascader,
  Slider,
  Button,
  Col,
  Upload,
  Icon
} from 'antd';
import React, {Component} from 'react';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const areaData = [{
  value: 'shanghai',
  label: '上海',
  children: [{
    value: 'shanghaishi',
    label: '上海市',
    children: [{
      value: 'pudongxinqu',
      label: '浦东新区',
    }],
  }],
}];

class AntForm extends Component{
  render(){

  }
}
