
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './config';
import { getStorage } from 'firebase/storage';
// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];


let analytics;
// const isSupportedAnalytics = async () => await isSupported();

// isSupportedAnalytics().then(() => {
//   analytics = getAnalytics(firebase_app);
// }).catch((error) => {
//   throw new Error(getErrorText(error));
// })


const auth = getAuth(firebase_app);
const storage = getStorage(firebase_app);



export { analytics, auth, storage };
export default firebase_app;