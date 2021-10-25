//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
function send(){
      msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0
});
document.getElementById("msg").value="";}