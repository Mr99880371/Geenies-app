import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import iconLeft from 'react-native-vector-icons/Entypo';
import { ProgressStatusProps } from './types';
import styles from './styles';
import { useTranslation } from 'react-i18next';

const ProgressStatus: FunctionComponent<ProgressStatusProps> = ({
  leftText,
  progress,
  showX,
  chevron,
  step,
  label,
  totalSteps,
  currentStepStyle,
  containerStyle,
  percentage,
}) => {
  const { t } = useTranslation();
  const {
    mainContainer,
    btnClose,
    labelText,
    triageText,
    currentStep,
    progressBarWrapper,
    labelWrapper,
    chevronWrapper,
    progressBar,
    progressBarLine,
    progressBarStatus,
  } = styles;
  const navigation = useNavigation<any>();

  return (
    <View
      style={[
        mainContainer,
        containerStyle !== undefined ? containerStyle : {},
      ]}
    >
      <View style={labelWrapper}>
        {showX && (
          <TouchableOpacity style={btnClose} onPress={closeProcess}>
            <Icon name="close" size={18} color="#000" />
          </TouchableOpacity>
        )}
        {percentage ? (
          <Text style={[labelText, !showX && { marginLeft: 0, flex: 1 }]}>
            {step?.toFixed(0)}%
          </Text>
        ) : leftText ? (
          <Text
            style={[
              labelText,
              triageText,
              !showX && { marginLeft: 0, flex: 1 },
            ]}
          >
            {label}: {leftText}
          </Text>
        ) : (
          <Text style={[labelText, !showX && { marginLeft: 0, flex: 1 }]}>
            {`${label || t('components:progressStatus.step')} `}
            <Text style={[currentStep, currentStepStyle]}>
              {step?.toFixed(0)}
            </Text>{' '}
            {t('components:progressStatus.of')} {totalSteps}
          </Text>
        )}
      </View>

      <View style={progressBarWrapper}>
        {chevron && (
          <TouchableOpacity
            style={chevronWrapper}
            onPress={() =>
              
                  navigation.goBack()
            }
          >
            <Image
              source={iconLeft}
              resizeMethod="resize"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        <View style={[progressBar]}>
          <View style={progressBarLine}>
            <View style={[progressBarStatus, { width: progress }]} />
          </View>
        </View>
      </View>
    </View>
  );
};

export { ProgressStatus };
