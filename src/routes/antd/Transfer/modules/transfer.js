// ------------------------------------
// Constants
// ------------------------------------
const REQUEST = 'REQUEST';
// ------------------------------------
// Actions
// ------------------------------------
export function fetch(){
    var source = [];
    var target = [];
    return (dispatch, getState) =>{
        dispatch({
            type: REQUEST,
            sourceData: source,
            targetData: target
        });
    }
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [REQUEST]: (state, action) => {
        return {...state,
            source: action.sourceData,
            target: action.targetData
        }
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initState = {
    source: [],
    target: []
}
export default function(state = initState, action){
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
