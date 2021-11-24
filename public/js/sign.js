// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import { initializeAuth, getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAaOV79Bw77WAWIVScGNd9GWf0ckobRrRQ",
	authDomain: "firebear-34281.firebaseapp.com",
	databaseURL: "https://firebear-34281-default-rtdb.firebaseio.com",
	projectId: "firebear-34281",
	storageBucket: "firebear-34281.appspot.com",
	messagingSenderId: "642455892026",
	appId: "1:642455892026:web:951140ff916e6359c88503",
	measurementId: "G-ZHVQEHH0FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
createUserWithEmailAndPassword(auth, 'test@test.com', 'password')
	.then((userCredential) => {
	// Signed in 
	const user = userCredential.user;
	alert('Signed in');
	// ...
})
	.catch((error) => {
	const errorCode = error.code;
	const errorMessage = error.message;
	alert(error)
	// ..
	});