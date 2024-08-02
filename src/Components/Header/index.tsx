import React from "react";
import { View, Text, TextInput } from "react-native";
import '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonTraslate from "./buttonTraslate";

export function Header() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ padding: 100}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <ButtonTraslate />
        </View>
        
        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', color: '#191970'}}>{t('Components:Header.whatdouknow')}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
           <Text>{t('Components:Header.location')}</Text> 
        </View>
        <TextInput placeholder={t('Components:Header.search')} style={{ borderWidth: 1, borderColor: '#191970', borderRadius: 5, padding: 10, marginTop: 10}} />
    </SafeAreaView>
  );
}