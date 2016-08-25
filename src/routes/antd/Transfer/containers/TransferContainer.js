import { connect } from 'react-redux';
import {fetch, handleChange} from '../modules/transfer';
import MyTransfer from '../components/Transfer';

const mapActionCreators = {
    fetch,
    handleChange
}

const mapStateToProps = (state) =>({
    transfer: state.transfer
})

export default connect(mapStateToProps, mapActionCreators)(MyTransfer);
