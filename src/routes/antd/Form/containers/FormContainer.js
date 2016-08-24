import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import AntForm from '../components/Form';
import {saveFiled} from '../modules/form';
import {Form} from 'antd';

var formData = '';
const MyForm = Form.create({
  onFieldsChange(props, field) {
    saveFiled(field);
    console.log(field);
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

const mapActionCreators = {}
const mapDispatchToProps = (dispatch) =>{
  return {
    actions: bindActionCreators({saveFiled}, dispatch)
  }
}
const mapStateToProps = (state) => ({myForm: state.myForm})
export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
