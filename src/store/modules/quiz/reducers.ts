import { produce } from 'immer';
import { QuizActionType, QuizOptions } from './types';

const INITIAL_STATE: QuizOptions = {
  answer: [],
};

export default function quiz(state = INITIAL_STATE, action: QuizActionType) {
  return produce(state, (draft: QuizOptions) => {
    switch (action.type) {
      case '@quiz/SELECT_ANSWER': {
        draft.answer = action.payload.answer;
        break;
      }
      case '@quiz/RESET_ANSWER': {
        draft.answer = [];
        break;
      }
      default:
        break;
    }
  });
}
