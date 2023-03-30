import React, {useState, useContext, useEffect} from 'react';
import {
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
import { useRouter } from 'expo-router';
import { AuthContext } from '../../util/AuthProvider';

export type Props = {

}

const Settings: React.FC<Props> = ({

}) => {
    const router = useRouter()
    const { logout } = useContext(AuthContext)


    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                        <Ionicons name='arrow-back-sharp' size={30}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.logoutButton}
                        onPress={() => logout()}
                    >
                        <Text style={{fontSize: 30}}> Logout </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backButton: {
        marginLeft: 10
    }, 
    logoutButton: {
        alignItems: 'center', 
        margin: 10, 
        backgroundColor: 'grey', 
        padding: 10, 
        borderRadius: 20, 
        width: '70%', 
        alignSelf: 'center'
    }, 
})

export default Settings; 