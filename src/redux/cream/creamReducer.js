import { BUY_CREAM } from "./creamTypes";

const initialState = {
  numOfCreams: 20,
};

export const creamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CREAM:
      return {
        ...state,
        numOfCreams: state.numOfCreams - 1,
      };

    default:
      return state;
  }
};
