var firebaseConfig = {
    apiKey: "AIzaSyANQ16xDRCGIr39KjfBFy9KZHcVbC1w9mI",
    authDomain: "laughter1.firebaseapp.com",
    databaseURL: "https://laughter1-default-rtdb.firebaseio.com",
    projectId: "laughter1",
    storageBucket: "laughter1.appspot.com",
    messagingSenderId: "844566195025",
    appId: "1:844566195025:web:886e4daaccb956a4978170",
    measurementId: "G-YBDV2MEM6Z"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({ purpose : "adding user" }); 
}