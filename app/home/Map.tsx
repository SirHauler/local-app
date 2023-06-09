import React, {useEffect, useState} from 'react';
import {
    RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput, 
  TouchableOpacity, 
  useColorScheme,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
// import userPageStyle from '../styles/userPageStyle';
// import ComfortaaText from '../styles/fonts/ComfortaaText';
import appStyles from '../../assets/appStyles';
import MapView, { Marker } from 'react-native-maps';
import VendorComponent from '../../components/vendorComponent';
import { LazyVendorInfo } from '../../src/models';
import fetchVendors from '../../util/fetchVendors';
export type Props = {

}

const Map: React.FC<Props> = ({

}) => {
    const [vendorData, setVendorData] = useState<LazyVendorInfo[]>([]);
    useEffect(() => {
        fetchVendors(setVendorData) 
        // console.log("Vendors: \n" + JSON.stringify(vendorData))
    }, [])
    const sfRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    return (
        <View style={styles.map}>
            <MapView style={{flex: 1}} provider="google"
                        initialRegion={sfRegion}
                        
                >
                    <Marker coordinate={sfRegion}

                    />
            </MapView>
            <View style={styles.searchBox}>
                <Ionicons name='search-sharp' size={20}/>
                <TextInput placeholder='Search Here' style={styles.searchInput}/>
            </View>
            <View style={styles.vendorScroll}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={1}>

                    {vendorData.map((vendor, key) => {
                        return (
                            <VendorComponent specialties={vendor.specialities}
                                             hours={vendor.hours}
                                             name={vendor.name}
                                             rating={vendor.rating}
                                             address={vendor.address}
                                             key={key}/>
                        )
                    })}
            </ScrollView>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }, 
    vendorScroll: {
        position: 'absolute',
        alignSelf: 'center', 
        bottom: 10, 
        justifyContent: 'space-between', 
    }, 
    searchBox: {
        position: 'absolute', 
        backgroundColor: 'white', 
        alignSelf: 'center', 
        marginTop: 50, 
        padding: 10, 
        borderRadius: 10, 
        width: 300, 
        flexDirection: 'row'
    }, 
    searchText: {
        marginLeft: 10
    }, 
    searchInput: {
        width: 250, 
        marginLeft: 10
    }
})

export default Map; 