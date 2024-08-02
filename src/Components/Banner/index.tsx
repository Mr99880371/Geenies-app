import React from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

export const Banner = () => {
const { t } = useTranslation();

  return(
    <View style={{backgroundColor: '#191970', padding: 20, borderRadius: 10, width: '90%', alignSelf: 'center', zIndex: 100, bottom: 40}}> 
        <Text style={{color: '#fff', fontSize: 18, fontFamily: 'Cochin'}}>
            {t('Components:Banner.title')}
        </Text>
    </View>
  ) 
};