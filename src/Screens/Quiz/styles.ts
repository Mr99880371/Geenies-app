import { css } from '@emotion/native';
import { StyleSheet } from 'react-native';

const useStyles = StyleSheet.create({
container: css`
      flex: 1;
    `,
    verticalScrollView: css`
      flex-grow: 1;
      padding: 16px 0px 16px 0px;
    `,
    title: css`
      font-family: 'soraSemiBold';
      font-size: 20px;
      align-self: center;
      color: #000;
    `,
    mainTitle: css`
      font-family: 'soraSemiBold';
      font-size: 24px;
      padding: 5px 0px 5px 0px;
      align-self: center;
      color: #000;
    `,
    mainText: css`
      font-family: 'sourceSans3Regular';
      margin-top: 4px;
      margin-bottom: 16px;
      font-size: 18px;
      color: #000;
    `,
    cardsTextContainer: css`
      padding: 16px;
    `,
})

export default useStyles;
