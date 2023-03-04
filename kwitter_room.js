
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBpE4s83vdAInbYON5XVETn5mMUVfz3cXo",
  authDomain: "letschat-61543.firebaseapp.com",
  databaseURL: "https://letschat-61543-default-rtdb.firebaseio.com",
  projectId: "letschat-61543",
  storageBucket: "letschat-61543.appspot.com",
  messagingSenderId: "282278539513",
  appId: "1:282278539513:web:7927496c2c54a0f2987228",
  measurementId: "G-JLF521D6BB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" ! ";
 

 function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room Name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="Kwitter_page.html";
 }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  room = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+Room_names + "</div><hr>";
  document.getElementById("output").innerHTML+= room;


  //End code
  });});}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name",name);
  window.location="Kwitter_page.html";
}



function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}

function logOut() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}
  
