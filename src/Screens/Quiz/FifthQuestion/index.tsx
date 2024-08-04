import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,

} from 'react-native';
import { RadioButton } from './../../../Components/RadioButton';
import { RootState } from './../../../store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { setAnswer } from './../../../store/modules/quiz/actions';

const FifthQuestion = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState('');
  const quizAns = useSelector((state: RootState) => state.quiz.answer);
  const { t } = useTranslation();
  const radioProps = [
    {
      label: t(
        'screens:pvPartnersContent.maternalOptionsContainer.supportOptions.quiz.fifthQuestion.phrase1'
      ),
      value: '1',
    },
    {
      label: t(
        'screens:pvPartnersContent.maternalOptionsContainer.supportOptions.quiz.fifthQuestion.phrase2'
      ),
      value: '2',
    },
    {
      label: t(
        'screens:pvPartnersContent.maternalOptionsContainer.supportOptions.quiz.fifthQuestion.phrase3'
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
              'screens:pvPartnersContent.maternalOptionsContainer.supportOptions.quiz.fifthQuestion.newFaces'
            )}
          </Text>
          <View style={{ paddingBottom: 15 }}>
            <RadioButton
              data={radioProps}
              initial={Number(quizAns[4])}
              selectedRadio={(item) => {
                setOptions({ ...options, value: item?.value });
                if (item?.value) {
                  const arr = [...quizAns];
                  if (arr[4]) {
                    arr[4] = item?.value;
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

export { FifthQuestion };
