import { SIDEBAR } from './sidebarActions';

const initialState = {
  data: null,
};

const sidebarReducer = (state = initialState, action) => {
  //console.log(state);
  switch (action.type) {
    case SIDEBAR:
      return {
        data: action.payload,
      };

    default:
      break;
  }
  return state;
};

export default sidebarReducer;
