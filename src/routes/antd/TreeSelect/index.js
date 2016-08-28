import { injectReducer } from '../../../store/reducers';

export default (store) => ({
  path: '/antd/treeSelect',
  getComponent (nextState, cb){
    require.ensure([], (require) => {
      const TreeSelect  = require('./containers/TreeSelectContainer').default;
      const reducer = require('./modules/treeSelect').default;
      // const Table = require('./components/Table').default;
      injectReducer(store, {key: 'ts', reducer});
      cb(null, TreeSelect);
    }, 'ts')
  }
});
