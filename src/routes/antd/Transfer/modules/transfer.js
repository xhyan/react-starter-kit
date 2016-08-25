// ------------------------------------
// Constants
// ------------------------------------
const REQUEST = 'REQUEST';
const CHANGE = 'CHANGE';
// ------------------------------------
// Actions
// ------------------------------------
export function fetch(){
    var source = [];
    var target = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i,
        title: `内容${i + 1}`,
        description: `内容${i + 1}的描述`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        target.push(data.key);
      }
      source.push(data);
    }
    return (dispatch, getState) =>{
        dispatch({
            type: REQUEST,
            sourceData: source,
            targetData: target
        });
    }
}

export function handleChange(targetKeys, direction, moveKeys){
  console.log(direction, moveKeys);
  return (dispatch, getState) => {
    dispatch({
      type: CHANGE,
      targetData:targetKeys
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
    },
    [CHANGE]: (state, action) => {
        return {...state,
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
