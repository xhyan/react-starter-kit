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
      <Form horizontal>
        <FormItem label="数字输入框" labelCol={{ span: 8}} wrapperCol={{ span: 8}}>
          <InputNumber min={1} max={10} style={{ width: 100 }}
           {...getFieldProps('inputNumber', {initialValue: 3 })} />
          <span className="ant-form-text">个人</span>
        </FormItem>
      </Form>
  }
}
