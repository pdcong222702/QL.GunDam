import { combineReducers } from '@reduxjs/toolkit'
import { reducer as oauthReducer } from './oauth.slice';

const reducer = combineReducers({
    oauth: oauthReducer,
})
export default reducer;
