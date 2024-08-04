import { TextStyle, ViewStyle } from 'react-native';

export interface ProgressStatusProps {
  label?: string;
  progress: string;
  leftText?: string;
  showX?: boolean;
  chevron?: boolean;
  step?: number;
  currentStepStyle?: TextStyle;
  totalSteps?: number;
  containerStyle?: ViewStyle;
  isQuestion?: boolean;
  percentage?: boolean;
  goBackFunction?: () => void;
}
