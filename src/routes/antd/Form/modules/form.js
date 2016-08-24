// ------------------------------------
// Constants
// ------------------------------------
const FIELD_CHANGE = 'FIELD_CHANGE';
// ------------------------------------
// Actions
// ------------------------------------
export function saveFiled(field) {
  return (dispatch, getState) =>{
    console.log(field);
    dispatch(change(field));
  }
}

function change(field){
  return {
    type: FIELD_CHANGE,
    field: field,
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FIELD_CHANGE]: (state, action) =>{
    return ({ ...state,
      ...action.field
    });
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    numbers: {value: 5},
    switch: {},
    level: {value: 2},
    name: {},
    address: {},
    startDate: {},
    endDate: {},
    time: {},
    rg: {}
}
export default function(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ?
    handler(state, action) :
    state;
}
