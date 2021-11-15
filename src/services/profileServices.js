import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const updateUserProfile = async (ImageUrl) => {
    return await auth()
      .currentUser.updateProfile({
        photoURL: ImageUrl,
      })
      .then();
};


export const getUserDetails = async () => {
    return auth().currentUser;
};