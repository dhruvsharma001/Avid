
import firebase_app from './firebase';
import { getFirestore, setLogLevel } from 'firebase/firestore';






const firestore = getFirestore(firebase_app);
// if (process.env.NEXT_PUBLIC_APP_ENV === 'development')
//     setLogLevel("debug");
export default firestore;