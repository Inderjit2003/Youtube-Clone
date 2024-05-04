import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from 'firebase/app';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB68cz-jEbBZu1FkersDrNmswxoFGdHjM",
  authDomain: "clone-df517.firebaseapp.com",
  projectId: "clone-df517",
  storageBucket: "clone-df517.appspot.com",
  messagingSenderId: "160996565628",
  appId: "1:160996565628:web:962b38bc797b9a7b0f5ff9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
