import React, {
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { View, Text, TextStyle, ViewStyle } from 'react-native';
import RadioButtonRN from './RadionButtonRN';
import useStyles from './styles';

interface RadioItem {
  label: string;
  value: string;
}
interface RadioButtonProps {
  data: RadioItem[];
  disabled?: boolean;
  selectedRadio: (value: RadioItem) => void;
  initial?: number;
  unstyled?: boolean;
  textStyle?: TextStyle;
  innerContainerStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  color?: string;
  style?: any;
  boxStyle?: any;
}

const RadioButton: FunctionComponent<RadioButtonProps> = ({
  data,
  disabled,
  selectedRadio,
  initial,
  containerStyle,
  textStyle,
  innerContainerStyle,
  style,
  boxStyle,
  unstyled = false,
  color,
}: RadioButtonProps) => {
  const {
    container,
    outerCircle,
    innerCircle,
    text,
    innerContainer,
    textDisabled,
  } = useStyles({});
  const [radioSelected, setRadioSelected] = useState<RadioItem>({
    label: '',
    value: '',
  });

  useEffect(() => {
    selectedRadio(radioSelected);
  }, [radioSelected]);

  return disabled ? (
    <View style={[container, containerStyle]}>
      {data.map((item, index) => (
        <View style={[innerContainer, innerContainerStyle]}>
          <View
            style={[
              outerCircle,
              initial === index + 1 && color
                ? {
                    borderTopColor: color,
                    borderLeftColor: color,
                    borderBottomColor: color,
                    borderRightColor: color,
                  }
                : {},
            ]}
          >
            {initial === index + 1 && (
              <View
                style={[innerCircle, color ? { backgroundColor: color } : {}]}
              />
            )}
          </View>
          <Text style={[text, textDisabled, textStyle]}>{item.label}</Text>
        </View>
      ))}
    </View>
  ) : (
    <RadioButtonRN
      data={data}
      selectedBtn={(e) => setRadioSelected(e)}
      circleSize={9}
      animationTypes={['zoomIn']}
      duration={200}
      textStyle={[text, textStyle || { paddingLeft: 8 }]}
      activeColor="#FFF"
      deactiveColor="#000"
      boxDeactiveBgColor="#FFF"
      textColor="#4A4D55"
      box={false}
      boxStyle={
        innerContainerStyle !== undefined
          ? innerContainerStyle
          : !unstyled
            ? {
                flexDirection: 'row',
                flex: 1,
                border: 'none',
                backgroundColor: 'white',
              }
            : { boxStyle }
      }
      style={
        !unstyled ? { flexDirection: 'row', width: '100%', ...style } : style
      }
      initial={initial || -1}
    />
  );
};

export { RadioButton };
