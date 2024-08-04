import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Quiz: undefined;
  // Adicione outras telas aqui
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Quiz'>;

export function ButtonIn() {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
        style={{ borderRadius: 10, width: 200, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4169E1' }}
        onPress={() => navigation.navigate('Quiz')}
        >
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{t('Components:Button.title')}</Text>
        </TouchableOpacity>
    </View>
    
  );
}