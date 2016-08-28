// ------------------------------------
// Constants
// ------------------------------------
const CHANGE = 'CHANGE';
const treeData = [{
  label: '节点一',
  value: '0-0',
  key: '0-0',
  children: [{
    label: '子节点一',
    value: '0-0-0',
    key: '0-0-0',
  }],
}, {
  label: '节点二',
  value: '0-1',
  key: '0-1',
  children: [{
    label: '子节点三',
    value: '0-1-0',
    key: '0-1-0',
  }, {
    label: '子节点四',
    value: '0-1-1',
    key: '0-1-1',
  }, {
    label: '子节点五',
    value: '0-1-2',
    key: '0-1-2',
  }]
}];
// ------------------------------------
// Actions
// ------------------------------------
export function change(value){
  return (dispatch, getState) => {
    dispatch({
      type: CHANGE,
      treeValue: value
    });
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE]: (state, action) =>{
    return ({ ...state,
      treeValue: action.treeValue
    });
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  treeData: treeData,
  treeValue: ['0-0-0']
}
export default function(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ?
    handler(state, action) :
    state;
}
