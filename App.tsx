import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { ButtonIn } from './src/Components/Button';
import { Header } from './src/Components/Header';
import { Banner } from './src/Components/Banner';
import { useTranslation } from 'react-i18next';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const { t } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#F5F5F5' : '#DCDCDC'
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: backgroundStyle.backgroundColor, padding: 20}}>
        <Header />
      </View>
      <Banner />
      <ScrollView>
        <ButtonIn title={t('Components:Button.title')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
