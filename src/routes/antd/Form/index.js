import { injectReducer } from '../../../store/reducers';

export default (store) => ({
  path: '/antd/form',
  getComponent (nextState, cb){
    require.ensure([], (require) => {
      const Form  = require('./containers/FormContainer').default;
      const reducer = require('./modules/form').default;
      // const Form = require('./components/Form').default;
      injectReducer(store, {key: 'myform', reducer});
      cb(null, Form);
    }, 'form')
  }
});
