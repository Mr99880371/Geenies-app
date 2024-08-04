import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron
  .configure({ name: 'whatDoYouknowQuizApp' }) // Nome do seu aplicativo
  .useReactNative() // Adiciona os plugins específicos do React Native
  .use(reactotronRedux()) // Adiciona o plugin do Redux
  .connect(); // Conecta ao Reactotron

// Limpa o console do Reactotron na inicialização
reactotron.clear();

console.tron = reactotron; // Permite usar console.tron.log() em todo o app

export default reactotron;