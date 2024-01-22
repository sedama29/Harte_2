import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '../util/key';


GoogleSignin.configure({
  androidClientId: '31462645493-mn84svkckvu16koamr4aaq64lq5loj6i.apps.googleusercontent.com',
  webClientId: '31462645493-37t5n59nrg8e14esnmjfvka0608ehfse.apps.googleusercontent.com',
});

export const signInWithGoogle = async () => {
  try {

    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('User Info:', userInfo);
    await GoogleSignin.revokeAccess();
  } catch (error) {
    console.error('Google Sign-In Error:', error);
  }
};
