// ------------------------------------
// Constants
// ------------------------------------
const SHOW = 'SHOW';
const HIDE = 'HIDE';
// ------------------------------------
// Actions
// ------------------------------------
function show() {
  return {type: SHOW}
}

function hide() {
  return {type: HIDE}
}

export function onClick() {
  return (dispatch, getState) => {
    dispatch(show());
  }
}

export function handleOk() {
  return (dispatch, getState) => {
    dispatch(hide());
  }

}

export function handleCancel() {
  return (dispatch, getState) => {
    dispatch(hide());
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [HIDE]: (state) => {
    return ({
      ...state,
      visible: false
    })
  },
  [SHOW]: (state) => {
    return ({
      ...state,
      visible: true
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  visible: false
}
export default function(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler
    ? handler(state, action)
    : state;
}
