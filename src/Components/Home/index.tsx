import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { ButtonIn } from '../Button';
import { Banner } from '../Banner';
import { useTranslation } from 'react-i18next';
import { Header } from '../Header';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
  const { t } = useTranslation();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={{flex: 1}}>
        <Header />
      <Banner />
      <ScrollView>
        <ButtonIn 
          title={t('Components:Button.title')} 
          onPress={() => navigation.navigate('Quiz')}
        />
      </ScrollView>
    </View>
  );
}