import React from "react";
import { Alert, View, TouchableOpacity, Text } from "react-native";

export function ButtonIn({ title }: { title: string }) {
  return (
    <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
        style={{ borderRadius: 10, width: 200, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4169E1' }}
        onPress={() => Alert.alert('Pressionado')}
        >
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
        </TouchableOpacity>
    </View>
    
  );
}