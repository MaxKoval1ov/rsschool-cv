import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { headerReducer } from './reducers/rootReducer';


export const store = createStore(headerReducer, composeWithDevTools(applyMiddleware(thunk)));