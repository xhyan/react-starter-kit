// ------------------------------------
// Constants
// ------------------------------------
const SAVE_FIELD = 'SAVE_FIELD';
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
    type: SAVE_FIELD,
    field: field
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SAVE_FIELD]: (state, action) =>{
    return ({ ...state,
      ...field
    });
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    numbers: {
      value: 5
    },
    switch: {},
    level: {},
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
