import { connect } from 'react-redux';
import AntForm from '../components/Form';
import { Form } from 'antd';

const mapActionCreators = {
}

const mapStateToProps = (state) => ({
  // myform: state.form
})

const MyForm = Form.create({
      // onFieldsChange(props, field) {
      //   props.onFieldsChange(field);
      // },
      mapPropsToFields(props) {
        // console.log(props);
        console.log(props.form);
        mapStateToProps(props.fields);
        return props.fields;
      }
    })(AntForm);

export default connect(mapStateToProps, mapActionCreators)(MyForm);
