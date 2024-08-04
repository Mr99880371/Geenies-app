import { css } from '@emotion/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: css`
      flex-direction: row;
      align-items: center;
      padding-top: 10px;

      max-width: 90%;
    `,
    innerContainer: css`
      flex-direction: column;
      margin-top: 10px;
      align-items: center;
      margin-bottom: 10px;
      flex: 1;
    `,
    text: css`
      font-family: 'sourceSans3Regular';
      color: #000;
      font-size: 14px;
      line-height: 24px;
      margin-left: 8px;
    `,
    textDisabled: css`
      display: flex;
      flex-wrap: wrap;
      height: 50px;
      max-width: 89%;
    `,

    outerCircle: css`
      width: 18px;
      height: 18px;
      border-radius: 8.5px;
      background-color: #fff;
      border-color: #000;
      border-width: 1px;
      align-items: center;
      justify-content: center;
    `,
    innerCircle: css`
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background-color: #000;
    `,
})

export default styles;
