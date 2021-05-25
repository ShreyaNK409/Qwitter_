var firebaseConfig = {
    apiKey: "AIzaSyAn8vHKgfbh_z3RqSw-J-jIfQEQaRzK53s",
    authDomain: "qwitter-83bbb.firebaseapp.com",
    databaseURL: "https://qwitter-83bbb-default-rtdb.firebaseio.com",
    projectId: "qwitter-83bbb",
    storageBucket: "qwitter-83bbb.appspot.com",
    messagingSenderId: "88824874458",
    appId: "1:88824874458:web:62a8ddf05b3bf514ed2ce3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




function addroom() {
      room_name = document.getElementById("roomname").value;
      localStorage.setItem("roomname", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      window.location = "kwitter_room_oppened.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  room_names = childKey;
                  console.log(room_names);
                  row = "<div class='room_name' id=" + room_names + " onclick='redirectToRoomName(this.id)' >#" + room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //Start code

                  //End code
            });
      });
}

function  redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("roommane",name);
   window.location="room_openned.html"
}


getData();


function logout() 
{
   localStorage.removeItem("username"); 
   localStorage.removeItem("roomname");   
   window.location="index.html";
} 