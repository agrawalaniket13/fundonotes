import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUid = async () => {
    const Uid = await AsyncStorage.getItem('uid');
    return Uid;
};
//export default function dashboardScreen({navigation})

export const getCollectionData = async ()=>{
    const notesList=[];
    const Uid=await getUid();
    await firestore()
        .collection(Uid)
        .doc('keepData')
        .collection('notes')
        .where('deleteNote','==',false && 'pinNote','==',false && 'archiveNote','==',false)
        .get()
        .then(querySnapshot=>{
            console.log('total users:',querySnapshot.size);
            querySnapshot.forEach(documentSnapshot=>{
                //console.log('User ID',documentSnapshot.id, documentSnapshot.data());
                const data=documentSnapshot.data();
                data.id = documentSnapshot.id;
                notesList.push(data);
                
            });
        });
        //console.log("knjnjn",notesList);
    return notesList;
};

export const getDeleteData = async ()=>{
    const notesList=[];
    const Uid=await getUid();
    await firestore()
        .collection(Uid)
        .doc('keepData')
        .collection('notes')
        .where('deleteNote','==',true)
        .get()
        .then(querySnapshot=>{
            console.log('total users:',querySnapshot.size);
            querySnapshot.forEach(documentSnapshot=>{
                //console.log('User ID',documentSnapshot.id, documentSnapshot.data());
                const data=documentSnapshot.data();
                data.id = documentSnapshot.id;
                notesList.push(data);
                
            });
        });
        //console.log("knjnjn",notesList);
    return notesList;
};

export const getArchiveData = async ()=>{
    const notesList=[];
    const Uid=await getUid();
    await firestore()
        .collection(Uid)
        .doc('keepData')
        .collection('notes')
        .where('archiveNote','==',true)
        .get()
        .then(querySnapshot=>{
            console.log('total users:',querySnapshot.size);
            querySnapshot.forEach(documentSnapshot=>{
                //console.log('User ID',documentSnapshot.id, documentSnapshot.data());
                const data=documentSnapshot.data();
                data.id = documentSnapshot.id;
                notesList.push(data);
                
            });
        });
        //console.log("knjnjn",notesList);
    return notesList;
};

// export default getCollectionData