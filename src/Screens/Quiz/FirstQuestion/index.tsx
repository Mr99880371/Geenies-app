import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';
import { RadioButton } from '../../../Components/RadioButton';
import { useTranslation } from 'react-i18next';
import { setAnswer } from './../../../store/modules/quiz/actions';
import { RootState } from './../../../store/modules/rootReducer';

const FirstQuestion = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState('');
  const { t } = useTranslation();
  const quizAns = useSelector((state: RootState) => state.quiz.answer);

  const radioProps = [
    {
      label: t(
        'screens:pvPartnersContent.maternalOptionsContainer.supportOptions.quiz.firstQuestion.phrase1'
      ),
      value: '1',
    },
    {
      label: t(
        'screens:pvPartnersContent.maternalOptionsContainer.supportOptions.quiz.firstQuestion.phrase2'
      ),
      value: '2',
    },
    {
      label: t(
        'screens:pvPartnersContent.maternalOptionsContainer.supportOptions.quiz.firstQuestion.phrase3'
      ),
      value: '3',
    },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            borderTopWidth: 1,
            padding: 10,
            borderTopColor: '#000',
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: 'sourceSans3Regular',
              marginTop: 10,
              marginHorizontal: 7,
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 24,
              color: '#000',
            }}
          >
            {t(
              'screens:pvPartnersContent.maternalOptionsContainer.supportOptions.quiz.firstQuestion.takeCareBaby'
            )}
          </Text>

          <View style={{ paddingBottom: 15 }}>
            <RadioButton
              data={radioProps}
              initial={Number(quizAns[0])}
              selectedRadio={(item) => {
                setOptions({ ...options, value: item?.value });
                if (item?.value) {
                  const arr = [...quizAns];
                  if (arr[0]) {
                    arr[0] = item?.value;
                  } else {
                    arr.push(item?.value);
                  }
                  dispatch(setAnswer(arr));
                }
              }}
              unstyled
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default FirstQuestion;
