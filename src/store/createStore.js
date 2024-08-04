import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import Reactotron from '../config/ReactotronConfig'; // Importe a configuração do Reactotron

export default (reducers, middlewares = []) => {
  const enhancer = __DEV__
    ? compose(
        Reactotron.createEnhancer(),
        applyMiddleware(...middlewares)
      )
    : applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};