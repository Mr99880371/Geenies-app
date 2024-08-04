import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonIn } from '../../Components/Button';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import { RootState } from '../../store/modules/rootReducer';
import FirstQuestion from './FirstQuestion';
import { SecondQuestion } from './SecondQuestion';
import { ThirdQuestion } from './ThirdQuestion';
import { FourthQuestion } from './FourthQuestion';
import { FifthQuestion } from './FifthQuestion';
import { resetStep } from '../../store/modules/quiz/actions';
import { ProgressStatus } from '../../Components/ProgressStatus';

export const Quiz = () => {
  const dispatch = useDispatch();
  const quizAns = useSelector((state: RootState) => state.quiz.answer);
  const scrollRef = useRef();
  const [step, setStep] = useState(1);
  const [result, setResult] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const navigation = useNavigation<any>();
  const { t } = useTranslation();
  const { container, title, mainTitle, mainText, cardsTextContainer } =
    useStyles({});

  function HandleStep() {
    switch (step) {
      case 1:
        return <FirstQuestion />;
      case 2:
        return <SecondQuestion />;
      case 3:
        return <ThirdQuestion />;
      case 4:
        return <FourthQuestion />;
      case 5:
        return <FifthQuestion />;
      default:
        break;
    }
  }

  useEffect(() => {
    setAnswers(quizAns);
  }, [step, quizAns]);

  function handleAnswers() {
    scrollRefFunction();
    let valuesA = 0;
    let valuesB = 0;
    let valuesC = 0;

    for (let index = 0; index < 6; index++) {
      if (answers[index] === '1') {
        valuesA++;
      } else if (answers[index] === '2') {
        valuesB++;
      } else {
        valuesC++;
      }
    }

    if (valuesA > valuesB && valuesA > valuesC) {
      setResult('1');
    } else if (valuesB >= valuesC && valuesB >= valuesA) {
      setResult('2');
    } else {
      setResult('3');
    }
  }

  const scrollRefFunction = () => {
    if (step > 1) {
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
    }
  };

  return (
    <View style={container}>
      <ButtonIn
        onPress={() => {
          if (step > 1 && !result) {
            setStep((s) => --s);
          } else {
            navigation.goBack();
          }
          dispatch(resetStep());
        }}
        title={t(
          'button central screen'
        )}
      />
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        {!result ? (
          <View>
            <View style={{ marginTop: 16 }}>
              <Text
                style={{
                  fontFamily: 'soraSemiBold',
                  fontSize: 20,
                  fontWeight: '700',
                  lineHeight: 32,
                  alignSelf: 'center',
                  color: '#000',
                }}
              >
                {t(
                  'quiz'
                )}
              </Text>

              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'soraSemiBold',
                  fontWeight: '600',
                  lineHeight: 24,
                  marginTop: 5,
                  fontSize: 18,
                  marginHorizontal: 16,
                  color: '#000',
                }}
              >
                {t(
                  'screens:pvPartnersContent.maternalOptionsContainer.supportOptions.quiz.itsTime'
                )}
              </Text>
            </View>

            <ProgressStatus
              step={step}
              totalSteps={5}
              showX={false}
              chevron
              goBackFunction={() => {
                if (step > 1 && !result) {
                  setStep((s) => --s);
                  quizAns.slice(0, ['1', '2', '3', '4'].length - 2);
                } else {
                  dispatch(resetStep());
                  navigation.goBack();
                }
              }}
              progress={`${(step / 5) * 100}%`}
              label={t(
                'question'
              )}
            />

            <View style={{ alignItems: 'center' }}>
              <Image />
            </View>
            {HandleStep()}
            <View>
              <ButtonIn
                title={t(
                  'next'
                )}
                fullWidth
                style={{
                  borderTopWidth: 1,
                  padding: 15,
                  borderTopColor: '#000',
                  marginTop: 10,
                }}
                disabled={answers?.length < step}
                textStyle={{
                  letterSpacing: 1,
                  fontFamily: 'soraSemiBold',
                }}
                onPress={() => {
                  scrollRefFunction();
                  if (step < 5) {
                    setStep((s) => ++s);
                  } else {
                    handleAnswers();
                  }
                }}
              />
            </View>
          </View>
        ) : (
          <View style={cardsTextContainer}>
            <Text style={title}>
              {t(
                'quiz'
              )}
            </Text>

            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'soraSemiBold',
                fontWeight: '600',
                lineHeight: 24,
                marginTop: 5,
                fontSize: 18,
                marginHorizontal: 16,
                color: '#000',
              }}
            >
              {t(
                'quiz Time'
              )}
            </Text>
            <View style={{ alignItems: 'center' }}>
              {result === '1' ? (
                <View>
                  <Image />
                </View>
              ) : result === '2' ? (
                <View>
                  <Image />
                </View>
              ) : (
                <View>
                  <Image />
                </View>
              )}
            </View>

            <Text style={[mainTitle, { color: '#000' }]}>
              {t(
                'result title'
              )}
            </Text>
            <Text style={mainTitle}>
              {result === '1' ? (
                <Text
                  style={[
                    title,
                    { color: '#000', fontSize: 24 },
                  ]}
                >
                  {t(
                    'ready result'
                  )}
                </Text>
              ) : result === '2' ? (
                t(
                  'hum result'
                )
              ) : (
                <Text
                  style={[
                    title,
                    { color: '#000', fontSize: 24 },
                  ]}
                >
                  {t(
                    'more minutes'
                  )}
                </Text>
              )}
            </Text>
            <Text style={mainText}>
              {result === '1'
                ? t(
                    'text 1'
                  )
                : result === '2'
                  ? `${t(
                      'text 2'
                    )}\n${t(
                      'text 2.1'
                    )}`
                  : t(
                      'text 3'
                    )}
            </Text>

            <ButtonIn
              fullWidth
              outline
              style={{ marginTop: 10 }}
              onPress={() => {
                dispatch(resetStep());
                navigation.navigate('SupportOptions', {
                  paramKey: 3,
                });
              }}
              title={t(
                'screens:pvPartnersContent.maternalOptionsContainer.supportOptions.quiz.goBack'
              )}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
