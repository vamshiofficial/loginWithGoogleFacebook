import { StyleSheet, Text, View ,Image} from 'react-native';
import React, { useEffect, useState } from 'react';

import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
const LoginWithGoogle = () => {
    const [useGoogleInfo, setuseGoogleInfo] = useState({})
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '409789601287-cafm6vuc452babponevvu79h7bqfb4hc.apps.googleusercontent.com',
            offlineAccess: true,
        })
        // isSignIn()
    },[])
    const SIgnIn = async () => {
        // login
        try{
            await GoogleSignin.hasPlayServices()
            const userInfo = await GoogleSignin.signIn();
            setuseGoogleInfo(userInfo)
            setisLoading(true)
        }
        catch(e){
            console.log(e);
        }
        // try {
        //     await GoogleSignin.hasPlayServices();
        //     const userInfo = await GoogleSignin.signIn();
        //     console.log('====================================');
        //     console.log(userInfo);
        //     console.log('====================================');
        //     setisLoading(true)
        //     setuseGoogleInfo(userInfo)
        // } catch (error) {
        //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //         // user cancelled the login flow
        //         console.log('user cancelled the login flow');
        //     } else if (error.code === statusCodes.IN_PROGRESS) {
        //         // operation (e.g. sign in) is in progress already
        //         console.log(' operation (e.g. sign in) is in progress already');
        //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //         // play services not available or outdated
        //         console.log('play services not available or outdated');
        //     } else {
        //         // some other error happened
        //         console.log(' some other error happened', error);
        //     }
        // }
    }
    return (
        <View>
            <GoogleSigninButton
                onPress={SIgnIn}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                // style={{ width: 100, height: 50, }}
            />
            {
                isLoading ?
                    <View>
                        <Text>{useGoogleInfo.user.name}</Text>
                        <Text>{useGoogleInfo.user.email}</Text>
                        <Image
                            style={{ width: 200, height: 100 }}
                            source={{ uri: useGoogleInfo.user.photo }}
                        />
                    </View>
                    :
                    <Text>Not logged yet</Text>
            }
        </View>
    );
};

export default LoginWithGoogle;

const styles = StyleSheet.create({});
