import {connect} from 'react-redux';
import AntForm from '../components/Form';
import {Form} from 'antd';

var formData = '';
const MyForm = Form.create({
  onFieldsChange(props, field) {
    // console.log(props.fields);
    console.log(field);
  },
  mapPropsToFields(props) {
    console.log(props);
    return props.fields;
  }
})(AntForm);

const mapActionCreators = {}

const mapStateToProps = (state) => ({myForm: state.form})
export default connect(mapStateToProps, mapActionCreators)(MyForm);
