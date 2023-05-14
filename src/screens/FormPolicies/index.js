import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { WebView } from 'react-native-webview'
import { useNavigation } from '@react-navigation/native'

const FormPolicies = ({ route }) => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Form',
      headerTintColor: 'black',
      headerBackTitleVisible: false
    })
  }, [navigation])

  useEffect(() => {

  }, [])
try{
  return (
    <View style={styles.formPolices}>
      <View style={styles.formPolices_container}>
        {route.params?.url !== '' ?
          <WebView style={styles.formPolicies_webView} javaScriptEnabled={true} source={{ uri: route.params?.url }} onLoad={console.log('Cargando')} />
          :
          <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>No tengo Uri</Text>
          </View>
        }

      </View>
    </View>
  );}
  catch (error) {
    console.log('WebView error:', error);
  }
}

export default FormPolicies

const styles = StyleSheet.create({
  formPolices: {
    flex: 1,
  },
  formPolices_container: {
    flex: 1,
  },
})