import { answerType } from './types';

export function setAnswer(answer: answerType) {
  return {
    type: '@quiz/SELECT_ANSWER',
    payload: { answer },
  };
}
export function resetStep() {
  return {
    type: '@quiz/RESET_ANSWER',
  };
}
