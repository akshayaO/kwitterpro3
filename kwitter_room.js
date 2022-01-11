var firebaseConfig = {
    apiKey: "AIzaSyBAABLr1wNQQ2UMzGZ2fIH3kRt4Mx-TvvQ",
    authDomain: "kwitter-1bee9.firebaseapp.com",
    databaseURL: "https://kwitter-1bee9-default-rtdb.firebaseio.com",
    projectId: "kwitter-1bee9",
    storageBucket: "kwitter-1bee9.appspot.com",
    messagingSenderId: "369204052374",
    appId: "1:369204052374:web:323b6ebe2b5552224a9db7"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);

  window.location="kwitter_message.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("Room Name-" + Room_names);
 row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
 });});}

 getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_message.html";
}