import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';

export default function ButtonTraslate() {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    return (
        <View style={styles.container}>
             <TouchableOpacity style={styles.button} onPress={() => handleChangeLanguage('en')}>
                <Text>
                    English
                </Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleChangeLanguage('pt')}>
            <Text>
                Português
            </Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flexGrow: 1,
        borderWidth: 1,
        borderColor: '#191970',
        borderRadius: 5, 
        padding: 16, 
        margin: 10

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        position: 'absolute',
        width: '100%',
        height: 100,
    }
})