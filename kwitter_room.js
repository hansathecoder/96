
//ADD YOUR FIREBASE LINKS HERE
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


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("roomname",+Room_names);
     row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML+=row;
      });});}
      function addroom(){
            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
      }
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
