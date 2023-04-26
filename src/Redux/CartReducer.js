import {ADD_TO_CART, REMOVE_FROM_CART} from './ActionType';

const initialState = {
  count: 0,
};

export default function CartReducer(state = initialState, action) {
  console.log(state, 'shethink sourcebae');
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,

        count: state.count + 1,

        // cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,

        count: state.count > 0 ? state.count - 1 : state.count,
      };
    default:
      return state;
  }
}
