import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import CoberturaJuridicaForm from '../CoberturaJuridicaForm'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet' 

const FormCoberturaJuridicaComponent = ({ id, plan, price, procedureTipe, nameC, logoIcon }) => {
    const navigation = useNavigation()
    const [ultil, setUltil] = useState('')

    const [doctorSelected, setDoctorSelected] = useState([])
    const [doctorsSelectedId, setDoctorsSelectedId] = useState([])
    
    let date = new Date()
    
    //Calculo de la fecha "hasta"
    let localeDate = date.toLocaleDateString()

    function toDate(today, days){
        today.setDate(today.getDate() + days)
        return today
    }
    
    let isToDate = toDate(date, 30)

    
    const buttonRegisterCoberturaJuridica = (values) => {
        navigation.navigate('PaimentMethod', { id, plan, price, procedureTipe, doctorSelected, doctorsSelectedId, values, nameC, logoIcon, car:true })
    }

    useEffect(() => {
        setUltil(isToDate.toLocaleDateString())
        
    }, [isToDate])

  return (
    <BottomSheetModalProvider>
        <ScrollView style={styles.formCoberturaJuridica_scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.formCoberturaJuridica_numberCoberture}>
                    <Text style={{color: 'black'}}>Legal Coverage No.</Text>
                    <Text style={{color: 'black'}}>0321</Text>
                </View>
                <Text style={{color: 'black'}}>Date of issue - Validity</Text>
                <View style={styles.formCoberturaJuridica_headerdate}>
                    <Text style={{color: 'black'}}>From</Text>
                    <Text style={styles.formCoberturaJuridica_headerdate_}>{localeDate}</Text>
                </View>
                <View style={styles.formCoberturaJuridica_headerdate}>
                    <Text style={{color: 'black'}}>To</Text>
                    <Text style={styles.formCoberturaJuridica_headerdate_}>{ultil}</Text>
                </View>
                <Text style={styles.formCoberturaJuridica_headerTitle}>Beneficiary</Text>
                <Formik
                    initialValues={{
                        fullNameP: null,
                        identificationP: null,
                        directionP: null,
                        phoneP: null,
                        nitC: null,
                        directionC: null,
                        cityC: null,
                        datePro: new Date(),
                        timePro: new Date(),
                    }}
                    validationSchema={Yup.object({
                        fullNameP: Yup.string().typeError('The field is required').required('The field is required'),
                        identificationP: Yup.number().typeError('The field must be of numeric type').required('The field is required'),
                        directionP: Yup.string().typeError('The field is required').required('The field is required'),
                        phoneP: Yup.number().typeError('The field must be of numeric type').required('The field is required'),
                        nitC: Yup.number().typeError('The field must be of numeric type').required('The field is required'),
                        directionC: Yup.string().typeError('The field is required').required('The field is required'),
                        cityC: Yup.string().typeError('The field is required').required('The field is required'),
                        datePro: Yup.string().typeError('The field is required'),
                        timePro: Yup.string().typeError('The field is required'),
                    })}
                    onSubmit={(values, props, doctorSelected) => buttonRegisterCoberturaJuridica(values, props, doctorSelected)}
                >
                    <CoberturaJuridicaForm procedureTipe={procedureTipe} setDoctorSelected={setDoctorSelected} doctorSelected={doctorSelected} doctorsSelectedId={doctorsSelectedId} setDoctorsSelectedId={setDoctorsSelectedId} />
                </Formik>
        </ScrollView>
    </BottomSheetModalProvider>
  )
}

export default FormCoberturaJuridicaComponent

const styles = StyleSheet.create({
    formCoberturaJuridica_scrollView: {
        width: '85%',
        height: '100%',
        position: 'relative',
        marginTop: 40
    },
    formCoberturaJuridica_numberCoberture: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formCoberturaJuridica_headerdate: {
        flexDirection: 'row'
    },
    formCoberturaJuridica_headerdate_: {
        marginLeft: 10,
        color: 'black'
    },
    formCoberturaJuridica_headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 5,
        color: 'black'
    },

    //Inputs Date and time
})