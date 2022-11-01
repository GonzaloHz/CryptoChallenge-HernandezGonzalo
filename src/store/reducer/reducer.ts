import {DELETE_CRYPTO, GET_CRYPTO} from '../actions/actiontypes';

const initialState = {
  cryptos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CRYPTO:
      return {
        ...state,
        cryptos: [...state.cryptos, action.payload],
      };
    case DELETE_CRYPTO:
      return {
        ...state,
        cryptos: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;