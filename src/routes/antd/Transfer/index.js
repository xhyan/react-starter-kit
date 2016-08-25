import { injectReducer } from '../../../store/reducers';

export default (store) => ({
    path: '/antd/table',
    getComponent(nextState, cb){
        require.ensure([], (require) => {
            const Transfer = require('./containers/TransferContainer').default;
            const reducer = require('./modules/transfer').default;
            injectReducer(store, {key: 'transfer', reducer});
            cb(null, Transfer);
        }, 'transfer');
    }
});
