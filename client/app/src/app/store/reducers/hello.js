import { HELLO_WORLD } from '../actions/hello';

const initialState = { greeting: undefined };

const hello = (state = initialState, action) => {
  switch (action.type) {
    case HELLO_WORLD: {
      return { ...state, greeting: 'hello, I\'m here' };
    }
    default:
      return state;
  }
};

export default hello;
