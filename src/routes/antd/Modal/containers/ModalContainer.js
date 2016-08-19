import { connect } from 'react-redux';
import {onClick, handleOk, handleCancel} from '../modules/modal';
import AntModal from '../components/Modal';

const mapActionCreators = {
  onClick,
  handleOk,
  handleCancel
}

const mapStateToProps = (state) => ({
  modal: state.modal
})

export default connect(mapStateToProps, mapActionCreators)(AntModal);
