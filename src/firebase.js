import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjsTEXK77i1WZ1umLFQ474E4vpZH7nxWs",
  authDomain: "web-c1e10.firebaseapp.com",
  projectId: "web-c1e10",
  storageBucket: "web-c1e10.appspot.com",
  messagingSenderId: "629113868499",
  appId: "1:629113868499:web:b72b35256a90d038a00426",
  databaseURL : "https://web-c1e10-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);