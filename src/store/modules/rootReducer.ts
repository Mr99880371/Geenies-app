import { combineReducers } from 'redux';
import quiz from './quiz/reducers';

const rootReducer = combineReducers({
  quiz,
});

export type RootState = ReturnType<typeof rootReducer>;

export default (state: any, action: any) => {
  if (action.type === '@auth/SIGN_OUT' && state !== undefined) {
    Object.keys(state).forEach((key) => {
      if (key !== 'magicLinks') {
        state[key] = undefined;
      }
    });
  }

  return rootReducer(state, action);
};
