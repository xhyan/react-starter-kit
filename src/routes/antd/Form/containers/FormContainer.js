import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import MyForm from '../components/Form';
import {saveFiled} from '../modules/form';
import {Form} from 'antd';


const mapActionCreators = {
  saveFiled
}
const mapDispatchToProps = (dispatch) =>{
  return {
    // actions: bindActionCreators({saveFiled}, dispatch)
    saveFiled: (field) =>{
      dispatch(saveFiled(field))
    }
  }
}
const mapStateToProps = (state) => ({myForm: state.myForm})
export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
