import { createStore } from "redux";

const INITIAL_STATE = {
  devs: []
};

function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOAD_DEVS":
      return { ...state, devs: [...state.devs, ...action.payload] };
    case "ADD_DEV":
      if (state.devs.find(element => element._id === action.payload._id)) {
        return state;
      }
      return { ...state, devs: [action.payload, ...state.devs] };

    case "DELETE_DEV":
      return {
        ...state,
        devs: state.devs.filter(dev => dev._id !== action.payload._id)
      };
    default:
      return state;
  }
}

const store = createStore(devs);

export default store;
