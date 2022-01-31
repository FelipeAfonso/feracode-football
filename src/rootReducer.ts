import {Action, combineReducers} from '@reduxjs/toolkit';

const reducers = combineReducers({
  //areas: areasSlice,
});

const rootReducers = (state: any, action: Action) => {
  //interception logic goes here if needed
  return reducers(state, action);
};

export default rootReducers;
