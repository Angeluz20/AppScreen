import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyASQwR4sfZywbm0dSB-NAps1QzTGMK5DFg",
    authDomain: "meapp-fb371.firebaseapp.com",
    databaseURL: "https://meapp-fb371-default-rtdb.firebaseio.com",
    projectId: "meapp-fb371",
    storageBucket: "meapp-fb371.appspot.com",
    messagingSenderId: "642114327759",
    appId: "1:642114327759:web:dceebe80c477be730193ba",
    measurementId: "G-6DK8EVRBGX"
  };
  

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app)
  //const analytics = getAnalytics(app);

  
  
 