import { injectReducer } from '../../../store/reducers';

export default (store) => ({
  path: '/antd/modal',
  getComponent (nextState, cb){
    require.ensure([], (require) => {
      const Modal  = require('./containers/ModalContainer').default;
      const reducer = require('./modules/modal').default;
      // const Table = require('./components/Table').default;
      injectReducer(store, {key: 'modal', reducer});
      cb(null, Modal);
    }, 'modal')
  }
});
