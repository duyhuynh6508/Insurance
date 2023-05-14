import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Record, RecordCircle } from 'iconsax-react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import TermsAndConditionsCobertura from '../../../components/TermsAndConditionsCobertura'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import {REACT_APP_USERDATABASE} from '@env'

const CardPlansWebView = ({ titleDescription, description, price, backgroundImg, name, logoDetail, url, nameU, serviceU }) => {
  const navigation = useNavigation()
  const bottomSheetModalTermRef = useRef(null)
  const snapModalPoint = ["65"]

  const [accept, setAccept] = useState(false)

  const onPressAdd = async () => {
    if(accept === true) {
      navigation.navigate('FormPolicies', { price: price, backgroundImg: backgroundImg, name: name, logoDetail: logoDetail, url: url})
      try{await axios.post(`https://blindaje.pdtcomunicaciones.com/api/update/trackingService/${name}`, {
        user_id: 12,
        tracking_service_id: 2,
        start: Date.now(),
        end: Date.now()
      }).then(response => {
        // Handle the response data
        console.log(response.data.service);
      })}
      catch(error){
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log('Server responded with a status code:', error.response.status);
          console.log('Response data:', error.response.data);
          console.log('Response headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error:', error.message);
        }
        console.log('Error config:', error.config);
      }
    } else {
      Alert.alert(
        'Accept Terms and Conditions',
        'To continue you must accept the terms and conditions',
        [
          {
            text: "Ok"
          }
        ]
      )
    }
  }

  const handlerModal = () => {
    bottomSheetModalTermRef.current?.present()
  }

  return (
    <>
      <Text style={styles.servicesDetail_containerTitleDescription}>{titleDescription}</Text>
      <ScrollView style={styles.servicesDetail_containerDescription}>
        <Text style={{color: 'black'}}>{description}</Text>
      </ScrollView>
      <View style={styles.servicesDetail_containerTermsAndConditions}>
        {accept === false ?
          <TouchableOpacity onPress={() => setAccept(!accept)}>
            <Record size={25} color='#267871' />
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => setAccept(!accept)}>
            <RecordCircle size={25} color='#267871' />
          </TouchableOpacity>
        }
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 5, color: 'black'}}>Accept </Text>
          <TouchableOpacity onPress={handlerModal} style={styles.servicesDetail_containerTermsAndConditionsText}>
            <Text style={{color: 'black'}}>terms and conditions</Text>
          </TouchableOpacity>
          <BottomSheetModal ref={bottomSheetModalTermRef} index={0} snapPoints={snapModalPoint} backgroundStyle={{ borderRadius: 30, shadowOffset: {height: -3}, shadowColor: 'black', shadowOpacity: 0.4}}>
            <TermsAndConditionsCobertura setAccept={setAccept} bottomSheetModalTermRef={bottomSheetModalTermRef} />
          </BottomSheetModal>
        </View>
      </View>
      <View style={styles.servicesDetail_containerPrice}>
        <Text style={styles.servicesDetail_containerPriceText}>${price}</Text>
        <TouchableOpacity onPress={accept => onPressAdd(accept)} style={styles.servicesDetail_containerPriceButton}>
          <Text style={styles.servicesDetail_containerPriceButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default CardPlansWebView

const styles = StyleSheet.create({
  servicesDetail_containerTitleDescription: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
    color: 'black'
  },
  servicesDetail_containerDescription: {
    maxHeight: 320
  },
  servicesDetail_containerTermsAndConditions: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  servicesDetail_containerTermsAndConditionsText: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  servicesDetail_containerPrice: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  servicesDetail_containerPriceText: {
    fontSize: 25,
    fontWeight: '500',
    color: '#267871',
    marginLeft: 10
  },
  servicesDetail_containerPriceButton: {
    width: 150,
    height: 60,
    backgroundColor: '#267871',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  servicesDetail_containerPriceButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
})