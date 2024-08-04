import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/store'
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
  View,
} from 'react-native';
import { ButtonIn } from './src/Components/Button';
import { Header } from './src/Components/Header';
import { Banner } from './src/Components/Banner';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Quiz } from './src/Screens/Quiz';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const { t } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#F5F5F5' : '#DCDCDC'
  };

  return (
    <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: backgroundStyle.backgroundColor, padding: 20}}>
        <Header />
      </View>
      <Banner />
      <ScrollView>
        <ButtonIn title={t('Components:Button.title')} />
      </ScrollView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ButtonIn} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </Provider>
  );
}

export default App;
