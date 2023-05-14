import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TermsAndConditionsText from '../TermsAndConditionsText'

const TermsAndConditionsCobertura = ({ setAccept, bottomSheetModalTermRef }) => {

  const acceptTerms = () => {
    setAccept(true)
    bottomSheetModalTermRef.current.close()
  }

  const noAcceptTerms = () => {
    setAccept(false)
    bottomSheetModalTermRef.current.close()
  }

  return (
    <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
      <View style={styles.termsAndConditions}>
        <Text style={styles.termsAndConditions_title}>Terms and Conditions / Privacy Policy</Text>
        <ScrollView style={{ height: '60%' }}>
          <Text style={styles.termsAndConditions_containerTitle}>The legal agreements set out below govern the use that you make of the application / Medical Surgical Shielding Platform and the services derived from it.</Text>
          <TermsAndConditionsText />
        </ScrollView>
        <View style={styles.termsAndConditions_buttons}>
          <TouchableOpacity onPress={acceptTerms} style={styles.termsAndConditions_buttonsAccept}>
            <Text style={{ color: 'white', fontWeight: '600' }}>Accept</Text>
          </TouchableOpacity>
          <View style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={noAcceptTerms} style={styles.termsAndConditions_buttonsNoAccept}>
              <Text style={{color: 'black'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TermsAndConditionsCobertura

const styles = StyleSheet.create({
  termsAndConditions: {
    width: '85%',
    marginTop: 30,
    alignItems: 'center'
  },
  termsAndConditions_title: {
    width: '100%',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 20,
    color: 'black'
  },
  termsAndConditions_containerTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    color: 'black'
  },
  termsAndConditions_buttons: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  termsAndConditions_buttonsAccept: {
    width: 100,
    height: 40,
    backgroundColor: '#267871',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  termsAndConditions_buttonsNoAccept: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
})