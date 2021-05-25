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


var user_name=localStorage.getItem("username");
var room_name=localStorage.getItem("roomname");

function send()
{
 message_sent=document.getElementById("message").value;
 firebase.database().ref(room_name).push({ name: user_name, message:message_sent , like: 0 });
 document.getElementById("message").value=""
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code

      } });  }); }
getData();
{
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output2").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              childData = childSnapshot.val();
              if (childKey != "purpose") {
                    firebase_message_id = childKey;
                    message_data = childData;

                    console.log(firebase_message_id);
                    console.log(message_data);

                    name1 = message_data['name'];
                    message = message_data['message'];
                    like = message_data['like'];
                    name_with_tag = "<h4> " + name1 + "<img class='user_tick' src='tick.png'>";
                    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                    like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                    row = name_with_tag + message_with_tag + like_button + span_with_tag;
                    document.getElementById("output2").innerHTML += row
              }
        });
  });
}