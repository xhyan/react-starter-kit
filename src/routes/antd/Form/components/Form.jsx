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

const areaData = [
  {
    value: 'shanghai',
    label: '上海',
    children: [
      {
        value: 'shanghaishi',
        label: '上海市',
        children: [
          {
            value: 'pudongxinqu',
            label: '浦东新区'
          }
        ]
      }
    ]
  }
];

class AntForm extends Component {

  handleSubmit = (e)=> {
    e.preventDefault();
    console.log("表单值为: ", this.props.form.getFieldsValue());
  }

  normFile = (e) => {
    if(Array.isArray(e)){
      return e;
    }

    return e && e.fileList;
  }

  render() {
    const { getFieldProps } = this.props.form;
      return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem label="数量" labelCol={{
          span: 8
        }} wrapperCol={{
          span: 10
        }}>
          <InputNumber min={1} max={10} style={{
            width: 100
          }} {...getFieldProps('numbers', { initialValue: 3 })}/>
          <span className="ant-form-text">
            台机器</span>
        </FormItem>

        <FormItem label="标题" labelCol={{
          span: 8
        }} wrapperCol={{
          span: 10
        }}>
          <p className="ant-form-text" id="static" name="static">链接</p>
          <p className="ant-form-text">
            <a href="#">链接文字</a>
          </p>
        </FormItem>

        <FormItem label="开关" labelCol={{
          span: 8
        }} wrapperCol={{
          span: 10
        }} required>
          <Switch {...getFieldProps('switch', { valuePropName: 'checked' })}/>
        </FormItem>

        <FormItem label="级别" labelCol={{
          span: 8
        }} wrapperCol={{
          span: 10
        }} required>
          <Slider marks={[
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G'
          ]} {...getFieldProps('level')}/>
        </FormItem>

        <FormItem label="名字" labelCol={{
          span: 8
        }} wrapperCol={{
          span: 16
        }} required>
          <Select style={{
            width: 200
          }} {...getFieldProps('name')}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>disabled</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </FormItem>

        <FormItem label="地址" labelCol={{
          span: 8
        }} wrapperCol={{
          span: 6
        }} required hasFeedback>
          <Cascader style={{
            width: 200
          }} options={areaData} {...getFieldProps('address')}/>
        </FormItem>

        <FormItem label="日期" labelCol={{
          span: 8
        }} required>
          <Col span="4">
            <FormItem>
              <DatePicker {...getFieldProps('startDate')}/>
            </FormItem>
          </Col>
          <Col span="1">
            <p className="ant-form-split">-</p>
          </Col>
          <Col span="4">
            <FormItem>
              <DatePicker {...getFieldProps('endDate')}/>
            </FormItem>
          </Col>
        </FormItem>

        <FormItem label="时间" labelCol={{
          span: 8
        }} wrapperCol={{
          span: 16
        }} required>
          <TimePicker {...getFieldProps('time')}/>
        </FormItem>

        <FormItem label="选项" labelCol={{
          span: 8
        }}>
          <RadioGroup {...getFieldProps('rg')}>
            <RadioButton value="a">选项一</RadioButton>
            <RadioButton value="b">选项二</RadioButton>
            <RadioButton value="c">选项三</RadioButton>
          </RadioGroup>
        </FormItem>

        <FormItem label="logo" labelCol={{
          span: 8
        }} wrapperCol={{
          span: 16
        }} help="提示信息要">
          <Upload name="logo" action="/upload.do" listType="picture" onChange={this.handleUpload} {...getFieldProps('upload', { valuePropName: 'fileList', normalize: this.normFile, })}>
            <Button type="ghost">
              <Icon type="upload"/>
              点击上传
            </Button>
          </Upload>
        </FormItem>

        <FormItem wrapperCol={{
          span: 16,
          offset: 8
        }} style={{
          marginTop: 24
        }}>
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
    );
  }
}

// AntForm = Form.create()(AntForm);
const MyForm = Form.create({
  onFieldsChange(props, field) {
    console.log(field);
    props.saveFiled(field);
  },
  mapPropsToFields(props) {
    console.log(props);
    return {
      numbers: props.myForm.numbers,
      switch: props.myForm.switch,
      level: props.myForm.level,
      name: props.myForm.name,
      address: props.myForm.address,
      startDate: props.myForm.startDate,
      endDate: props.myForm.endDate,
      time: props.myForm.time,
      rg: props.myForm.rg
    }
  }
})(AntForm);

export default MyForm;
