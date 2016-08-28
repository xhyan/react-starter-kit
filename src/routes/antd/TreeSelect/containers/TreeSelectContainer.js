import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import TreeSelect from '../components/TreeSelect';
import {change} from '../modules/treeSelect';


const mapActionCreators = {
  change
}

const mapStateToProps = (state) => ({
  ts: state.ts
})

export default connect(mapStateToProps, mapActionCreators)(TreeSelect);
