import { css } from '@emotion/native';
import { StyleSheet } from 'react-native';

const useStyles = StyleSheet.create({
mainContainer: css`
      width: 100%;
      margin: 0 0 5px;
      padding: 16px 16px 0px;
      background-color: transparent;
    `,
    labelWrapper: css`
      flex-direction: row;
      align-items: center;
    `,
    btnClose: css`
      width: 44px;
      height: 44px;
      justify-content: center;
      position: absolute;
      left: 0;
    `,
    labelText: css`
      flex: 1;
      color: #000;
      font-size: 14px;
      line-height: 22px;
      font-family: 'sourceSans3Regular';
      text-align: center;
    `,
    triageText: css`
      text-align: left;
      color: #000;
      font-family: 'sourceSans3Regular';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 8px;
      line-height: 24px;
    `,
    currentStep: css`
      color: #000;
    `,
    progressBarWrapper: css`
      flex-direction: row;
      align-items: center;
      width: 100%;
    `,
    chevronWrapper: css`
      width: 18px;
      align-items: flex-start;
      justify-content: center;
    `,
    progressBar: css`
      flex: 1;
      justify-content: center;
    `,
    progressBarLine: css`
      position: relative;
      width: 100%;
      background-color: #eaeaea;
      height: 6px;
      z-index: 1000;
      border-radius: 6px;
    `,
    progressBarStatus: css`
      position: absolute;
      border-width: 3px;
      width: 100%;
      border-radius: 6px;
      height: 3px;
      background-color: #000;
      border-color: #000;
    `,
})
export default useStyles;
