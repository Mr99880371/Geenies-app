export type QuizOptions = {
  answer: answerType;
};

export type answerType = string[];

export type QuizActionType = {
  type: '@quiz/SELECT_ANSWER' | '@quiz/RESET_ANSWER';
  payload: {
    answer: answerType;
  };
};
