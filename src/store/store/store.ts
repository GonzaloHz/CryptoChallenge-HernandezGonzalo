import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {useDispatch} from 'react-redux';
import rootReducer from '../reducer/reducer';

const Reducer = combineReducers({
  cryptos: rootReducer,
});
const store = createStore(Reducer, applyMiddleware(thunk));

export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;