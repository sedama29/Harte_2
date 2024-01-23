import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '../util/key';


GoogleSignin.configure({
  androidClientId: '31462645493-mn84svkckvu16koamr4aaq64lq5loj6i.apps.googleusercontent.com',
  webClientId: '31462645493-37t5n59nrg8e14esnmjfvka0608ehfse.apps.googleusercontent.com',
  iosClientId: '31462645493-c786nkss2dsbd55oq8u8lkvsldhh0a6i.apps.googleusercontent.com',
});

export const signInWithGoogle = async () => {
  try {

    // await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin[Platform.OS === 'android' ? 'signIn' : 'signInSilently']();
    console.log('User Info:', userInfo);
    await GoogleSignin.revokeAccess();
  } catch (error) {
    console.error('Google Sign-In Error:', error);
  }
};
