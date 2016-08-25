import { connect } from 'react-redux';
import {fetch} from '../modules/transfer';
import Transfer from '../components/Transfer';

const mapActionCreators = {
    fetch
}

const mapStateToProps = () =>({
    transfer: state.transfer
})

export default connect(mapStateToProps, mapActionCreators)(Transfer);
