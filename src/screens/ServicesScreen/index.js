import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Profile as ProfileIcon, ShoppingCart } from 'iconsax-react-native'
import CoberturaLogoWhite from '../../Assets/Icons/CoberturaLogoWhite.png'
import SoatLogo from '../../Assets/Icons/SoatLogo.png'
import SurgicalLogo from '../../Assets/Icons/SurgicalLogo.png'
import ViajesLogo from '../../Assets/Icons/ViajesLogo.png'
import ArriendoLogo from '../../Assets/Icons/ArriendoLogo.png'
//import MotoLogo from '../../Assets/Icons/MotoLogo.png'
import AutomovilLogo from '../../Assets/Icons/AutomovilLogo.png'
//import SegurosVoluntariosLogo from '../../Assets/Icons/SegurosVoluntariosLogo.png'
//import PlanComplementarioLogo from '../../Assets/Icons/PlanComplementarioLogo.png'
import CasaLogo from '../../Assets/Icons/CasaLogo.png'
import BackgroundCoberturasJ from '../../Assets/Icons/BackgroundCoberturasJ.jpg'
import CoberturaLogoBlue from '../../Assets/Icons/CoberturaLogoBlue.png'
import SoatLogoBlue from '../../Assets/Icons/SoatLogoBlue.png'
import ViajesLogoBlue from '../../Assets/Icons/ViajesLogoBlue.png'
import ArriendoLogoBlue from '../../Assets/Icons/ArriendoLogoBlue.png'
//import MotoLogoBlue from '../../Assets/Icons/MotoLogoBlue.png'
import AutomovilLogoBlue from '../../Assets/Icons/AutomovilLogoBlue.png'
//import SegurosVoluntariosLogoBlue from '../../Assets/Icons/SegurosVoluntariosLogoBlue.png'
import PetsLogo from '../../Assets/Icons/PetsLogo.png'
import PetsLogoBlue from '../../Assets/Icons/PetsLogoBlue.png'
//import PlanComplementarioLogoBlue from '../../Assets/Icons/PlanComplementarioLogoBlue.png'
import CasaLogoBlue from '../../Assets/Icons/CasaLogoBlue.png'
import ServicesCardScreen from '../../components/ServicesCardScreen'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Profile from '../Profile'
import { AuthContext } from '../../Context/AuthContext'
//import axios from 'axios'
// import {REACT_APP_USERDATABASE, REACT_APP_SERVER} from "@env"

const servicess = [
  {
    id: '1',
    name: 'Legal Coverage',
    description: 'It is a legal and judicial protection tool designed for you, in order to shield your actions...',    price: '150.000',
    logo: CoberturaLogoWhite,
    logoDetail: CoberturaLogoWhite,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
    procedimientos: [
      {
        estetico: {
          planes: [
            {
              planId: '1',
              planName: 'Basic',
              planDescription: `It is a legal and judicial protection tool designed for you, in order to shield your professional actions prior to performing any surgical procedure or aesthetic treatment and after its effective performance. Comprehensively covers all surgical procedures performed by the plastic surgeon and medical surgeon (in pairs or exclusively by a plastic surgeon) and non-surgical (aesthetic treatments), performed by the plastic surgeon or medical surgeon and/or aesthetics. Likewise, any type of post-surgical treatment (massages, drains, use of laser equipment, ultrasound, carboxys or in general) and aesthetic medicine services are covered. However, with personalized attention you can protect in a particular way each intervention and/or treatment to be carried out by you or your company.${"\n"}${"\n"} 1. Legal Advice and Support in the Pre-contractual Stage with your patient.${"\n"}${"\n"} 2. Judicial representation in medical civil liability proceedings and/or civil liability in the case of companies dedicated to the provision of surgical and aesthetic medical services.$ {"\n"}${"\n"} 3. Legal representation in criminal proceedings.${"\n"}${"\n"} 4. Legal representation in medical disciplinary liability proceedings before the Ethics Tribunal Medical.${"\n"}${"\n"} 5. Accompaniment and permanent advice in the postoperative process and reestablishment of the doctor-patient relationship.${"\n"}${"\n"} 6. Accompaniment and Training in completing the Clinical History.`,              
              planPrice: '100.000'
            },
            {
              planId: '2',
              planName: 'Plus',
              planDescription: 'Includes the services of the basic coverage and additionally filing, contracts, documentation and training for the doctor or the company that provide a better management of the clinical history as the basis of any judicial process.',              
              planPrice: '150.000'
            }
          ]
        }
      },
      {
        quirurgico: {
          planes: [
            {
              planId: '1',
              planName: 'Basic',
              planDescription: `It is a legal and judicial protection tool designed for you, in order to shield your professional actions prior to performing any surgical procedure or aesthetic treatment and after its effective performance. Comprehensively covers all surgical procedures performed by the plastic surgeon and medical surgeon (in pairs or exclusively by a plastic surgeon) and non-surgical (aesthetic treatments), performed by the plastic surgeon or medical surgeon and/or aesthetics. Likewise, any type of post-surgical treatment (massages, drains, use of laser equipment, ultrasound, carboxys or in general) and aesthetic medicine services are covered. However, with personalized attention you can protect in a particular way each intervention and/or treatment to be carried out by you or your company.${"\n"}${"\n"} 1. Legal Advice and Support in the Pre-contractual Stage with your patient.${"\n"}${"\n"} 2. Judicial representation in medical civil liability proceedings and/or civil liability in the case of companies dedicated to the provision of surgical and aesthetic medical services.$ {"\n"}${"\n"} 3. Legal representation in criminal proceedings.${"\n"}${"\n"} 4. Legal representation in medical disciplinary liability proceedings before the Ethics Tribunal Medical.${"\n"}${"\n"} 5. Accompaniment and permanent advice in the postoperative process and reestablishment of the doctor-patient relationship.${"\n"}${"\n"} 6. Accompaniment and Training in completing the Clinical History.`,
              planPrice: '150.000'
            },
            {
              planId: '2',
              planName: 'Plus',
              planDescription: 'Includes the services of the basic coverage and additionally filing, contracts, documentation and training for the doctor or the company that provide a better management of the clinical history as the basis of any judicial process.',
              planPrice: '280.000'
            }
          ]
        }
      }
    ]
  },
  {
    id: '2',
    name: 'Post-surgical Complications',
    description: 'Its purpose is to cover medical, emergency, hospital and...',
    descriptionL: `Its purpose is to cover the medical, emergency, hospital and surgical expenses that derive from a complication of Cosmetic Surgery.${"\n"}${"\n"}It allows the insured, the medical professional health or the institution that provides health services IPS, have additional protection in medical expenses in the event of any medical-surgical complication, framed in the safety of health care for the insured patient.${"\n" }${"\n"}Covers up to the limit established on the face of the policy (as maximum liability), for medical expenses derived from the care of a complication from a surgical procedure covered by the policy.${ "\n"}${"\n"}Covered complications${"\n"}${"\n"}- Complications that may appear within 45 calendar days from the time of delivery are covered. start of the procedure. In the event of the occurrence, the company will indemnify emergency, hospital and surgical medical expenses for up to three hundred and sixty-five (365) calendar days from the date of diagnosis of the complication or up to the contracted value. $ {"\n"}${"\n"}- Coverage is provided for the surgical management of Capsular Contracture as part of the coverage for mammoplasty.${"\n"}${"\n"}- Authorized Within the same surgical act, functional procedures related to the following specialties: Dermatology, Otolaryngology, Gynecology, General Surgery and Oral Surgery. As long as they are associated with a covered Aesthetic procedure and are authorized by the insurer.`,
    price: '100.000',
    logo: SurgicalLogo,
    logoDetail: SurgicalLogo,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
  },
  {
    id: '3',
    name: 'SOAT',
    description: 'With the Compulsory Traffic Accident Insurance you drive calmly because you know you are...',
    descriptionL: `With the Compulsory Traffic Accident Insurance you drive calmly because you know that you are complying with the law and with the responsibility of guaranteeing a benefit for drivers, passengers or pedestrians who are affected in the event of an accident. Account with:${"\n"}${"\n"}- Compensation for death and funeral expenses: If you lose your life as a result of a traffic accident, the SOAT guarantees that your beneficiaries receive 750 current legal minimum daily wages that include funeral expenses. Keep in mind that this compensation is only possible if the death of the victim occurs before one year after the accident and as a consequence of this, that is, if a person remains in a coma, but dies after twelve months, this coverage would no longer be valid within the insurance. This compensation is also given to the beneficiaries of the people who go with you or to the pedestrians who die as a result of the accident.${"\n"}${"\n"}- Health services: If in an accident you, The people who go with you or a pedestrian that you ran over need medical attention, the SOAT covers expenses such as surgeries, exams, therapies, medicines and everything necessary for their recovery.${"\n"}${"\n"}- Disability: If after having a traffic accident, the doctor determines some loss of work capacity, you have compensation of a maximum of 180 current legal daily minimum wages. Keep in mind that if it is a temporary disability, the SOAT does not cover you, but you must go to your EPS.${"\n"}${"\n"}- Transportation expenses: The SOAT covers your expenses transportation of each of the people who are affected by the accident, from the place where it occurs to a medical center. For each one there are 10 current legal daily minimum wages.${"\n"}${"\n"}The beneficiaries can count on compensation of 750 current legal daily minimum wages in the event that you, your companions or a pedestrian die as a result of a traffic accident.${"\n"}${"\n"}Your health services are paid, those of the people who go with you at the time of the accident or those of a pedestrian, up to a maximum 800 current legal daily minimum wages.${"\n"}${"\n"}You can have compensation up to 180 current legal daily minimum wages if you become disabled.${"\n"}${"\n" }Covers transportation costs from the accident site to a medical center for 10 legal daily minimum wages in force.`,
    price: '100.000',
    logo: SoatLogo,
    logoDetail: SoatLogo,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
  },
  {
    id: '4',
    name: 'Travel insurance',
    description: 'If during your trip you have an accident or illness, coordinating the medical services that...',
    descriptionL: `If during your trip you have an accident or illness, coordinating the medical services you require. If you don't feel well, receive medical attention by means of a telephone call from wherever you are to be attended by an expert and, according to your state of health, we will guide you in the best way.${"\n"}${" \n"}You are paid the insured value if you face any of the following situations: your luggage is lost or delayed, your documents are stolen or your trip is cancelled.${"\n"}${"\n"}Lines free service in five countries and fast service via WhatsApp. In addition, ​coverage for pre-existing illnesses for up to ten thousand dollars.${"\n"}${"\n"}All people who, like you, plan to enjoy unlimited national or international travel, whether land or air, Alone or in the company of your loved ones.${"\n"}${"\n"}The coverages are available to anyone between the ages of 0 and 74 for international insurance and without any limit for national insurance. No medical evaluation or statement of insurability required.`,
    price: '250.000',
    logo: ViajesLogo,
    logoDetail: ViajesLogo,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
  },
  {
    id: '5',
    name: 'Digital Leasing',
    description: 'It generates peace of mind knowing that every month you have the money paid by the...',
    descriptionL: `It generates peace of mind knowing that every month you have the money paid by the tenants of your property, but when it is not the case, do not worry! We have the solution so that you never stop receiving your income.​​​​​​​​​​${"\n"}${"\n"}Depending on the modality and plan you choose:${"\n "}Basic coverages:${"\n"}- Payment of the rent in case of default by your tenant${"\n"}- Payment of administration fees.${"\n"}- Residential public services pending in the delivery of the property${"\n"}${"\n"}Optional coverages:${"\n"}- Damages and missing inventory${"\n"}- Home assistance (plumbing services, electricity , locksmith, glass replacement, transfer expenses and telephone legal assistance).${"\n"}${"\n"}In the event of a claim, the coverage will be maintained until the property is restored or until the tenant make the payment of its obligations, with a maximum limit of compensation of 12 months. The insurance must be current and in good standing.`,
    price: '250.000',
    logo: ArriendoLogo,
    logoDetail: ArriendoLogo,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
  },
  {
    id: '6',
    name: 'Pet Insurance',
    description: 'With this solution you protect your heritage, in case it is affected...',
    descriptionL: `With this solution you protect your heritage, in case it is affected by any event related to your dogs or cats, and it accompanies you by satisfying your needs and those of your pets, through the provision of different services, so that you can take care of them , care for them and pamper them as they deserve. to third parties: if your pet causes material damage, injury or death to a third party, which must be repaired, Sura accompanies you.${"\n"}- Veterinary expenses: expenses incurred due to illness or accident of your pet.${"\n"}- Funeral or funeral expenses: it is an aid that we grant you in case your pet dies or must be euthanized.${"\n"}- Expenses due to theft or loss of pet: it is an aid that we grant you in case your pet disappears.​${"\n"}- Nursery in case of hospitalization or trip of the owners.${"\n"}- Bath service for your pet.`,
    price: '100.000',
    logo: PetsLogo,
    logoDetail: PetsLogo,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
  },
  {
    id: '7',
    name: 'Car Insurance',
    description: 'Through your mobility you carry out the activities of your daily life. Therefore, we are with you so that...',
    descriptionL: `Through your mobility you carry out the activities of your daily life. For this reason, we are with you so that you can travel safely, feeling accompanied and saving time and money. It has solutions that adapt to the means you choose for your journeys, recognizing that, more than insuring your vehicle, we take care of your life, that of those you find on the road and the heritage you have built.${"\n "}${"\n"}All plans provide payment to those affected by the damages you cause in a crash or accident (if you had any liability). We also look for an on-site reconciliation if possible. Also, if you crash or get stranded, we send someone to take care of your car while you continue with your activities or, if you prefer, we can accompany you by phone so you don't feel alone. In addition, we assist you in a traffic accident if your physical and mental health or that of others involved is at risk.${"\n"}${"\n"}The plans have insurability inspection virtually or online the Autos SURA Service Center and those of allies, services through the SURA Insurance App, unlimited mobile workshop if you are stranded (due to a flat tire, battery damage or lack of gasoline) and comprehensive care at the crash site or accident to evaluate your health and manage the repair of your vehicle from the site. Additionally, hotel or displacement if you are stranded or have an accident while on a road trip and cannot continue to your destination.`,
    price: '200.000',
    logo: AutomovilLogo,
    logoDetail: AutomovilLogo,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
  },
  {
    id: '9',
    name: 'Home Insurance',
    description: 'When you have home insurance you know that, whatever happens, you keep the assets you have...',
    descriptionL: `When you have home insurance, you know that, whatever happens, you keep the heritage that you have built over the years or that you are starting, thus you protect the place where you live, the appliances and furniture, your personal items, clothing that you use every day and even the elements associated with the business that you have in your home.${"\n"}${"\n"}If at any time an event covered by insurance occurs, such as a fire, hurricane, collapse, among others, we reimburse you the money to replace what is affected.${"\n"}${"\n"}You also have the option of obtaining additional coverage that supports you in case of robbery with or without violence , damage to others and damage or loss of mobile content that may be outside your home, for example, laptops, tablets or cameras.${"\n"}${"\n"}Possibility to request quick and easy assistance from experts who take care of plumbing, electrical, locksmith and glass emergencies in your home. Likewise, request legal advice by telephone to resolve concerns related to criminal, civil, tax, administrative, labor and commercial issues.${"\n"}${"\n"}May include:${"\n"}- Fire .${"\n"}- Lightning strike at the insured location.${"\n"}- Explosion.${"\n"}- Damage caused by smoke.${"\n"}- Damage caused by hail.${"\n"}- Damage caused by flooding.${"\n"}- Landslide, landslide or landslide and rockfall.${"\n"}- Damage caused by hail water inside the home.${"\n"}- Falling aircraft or objects falling from them.${"\n"}- Hurricane, cyclone, typhoon or tornado.${"\n"}- Impact of land vehicles on the home.${"\n"}- Damage to soil and land.${"\n"}- Breakage of glass, acrylic, mirrors and sanitary units.${"\n"}- Riot, riot, civil commotion, strike, malicious acts by third parties, and terrorism.${"\n"}- Earthquake, tremor, volcanic eruption, tsunami, and tsunami.
    Theft with or without violence.${"\n"}- Internal damage to electrical, electronic and gas equipment.${"\n"}- Protection of mobile contents outside the insured place.${"\n"}- Increase in material and labor costs.${"\n"}- Damages to others.${"\n"}- Home care.${"\n"}- Home maintenance bonus.`,
    price: '100.000',
    logo: CasaLogo,
    logoDetail: CasaLogo,
    status: 'comprar',
    backgroundImg: BackgroundCoberturasJ,
  }
]

const ServicesScreen = () => {
  const Navigation = useNavigation()
  const bottomSheetModalProfileRef = useRef(null)
  const snapModalPoint = ["100"]
  const {shopping} = useContext(AuthContext)
  
  // const [services, setServices] = useState([])
  
  const handlerModal = () => {
    bottomSheetModalProfileRef.current?.present()
  }

  useEffect(() => {

    // const getServices = async () => {
    //   await axios.get(`${REACT_APP_USERDATABASE}/trackingservice`).then((resp) => {
    //     setServices(resp.data)
    //   }).catch((err) => console.log(err))
    // }
    // getServices()

    Navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={handlerModal}>
          <ProfileIcon color="black" variant="Linear" size={30} style={{ marginLeft: 20 }} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => Navigation.navigate("ShoppingCart")} style={{position: 'relative'}}>
          <ShoppingCart color="black" variant="Linear" size={30} style={{ marginRight: 20 }} />
          {shopping.length > 0 ?
            <View style={{position: 'absolute', right: 10, top: -7, backgroundColor: '#267871', height: 22, width: 22, borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 12}}>{shopping.length}</Text>
            </View>
            :
            null
          }
        </TouchableOpacity>
      ),
      headerTitle: 'Agregar Servicios',
      headerStyle: {
        borderBottomColor: 'white',
        shadowOpacity: 0, 
      },
      //for android
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16
      },
    })

  }, [Navigation, shopping])

  return (
    <BottomSheetModalProvider>
      <View style={styles.servicesScreen}>
        <BottomSheetModal ref={bottomSheetModalProfileRef} index={0} snapPoints={snapModalPoint}>
          <Profile />
        </BottomSheetModal>
        <View style={styles.servicesScreen_}>
          <FlatList data={servicess} keyExtractor={(item) => item.id} renderItem={({item}) => <ServicesCardScreen status={item.status} logo={item.logo} name={item.name} description={item.description} price={item.price} id={item.id} descriptionL={item.descriptionL} backgroundImg={item.backgroundImg} logoDetail={item.logoDetail} planes={item.planes} procedimientos={item.procedimientos} url={item.url}/>} showsVerticalScrollIndicator={false} />
        </View>  
      </View>
    </BottomSheetModalProvider>
  )
}

export default ServicesScreen

const styles = StyleSheet.create({
  servicesScreen: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
  servicesScreen_: {
    width: '90%'
  }
})