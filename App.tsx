import React, { useRef } from 'react';
import { Provider } from 'react-redux'
import { store } from './src/store'
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Quiz } from './src/Screens/Quiz';
import { Home } from './src/Components/Home';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#F5F5F5' : '#DCDCDC'
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <View style={{backgroundColor: backgroundStyle.backgroundColor, padding: 20}}>
            {/* Seu conteúdo de cabeçalho aqui */}
          </View>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Quiz" component={Quiz} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
