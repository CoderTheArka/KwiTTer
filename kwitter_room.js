
const firebaseConfig = {
      apiKey: "AIzaSyD4Q11zXQd4IzlMtY5qlTfQgCQr4Gm4VhE",
      authDomain: "kwitter-58f2b.firebaseapp.com",
      databaseURL: "https://kwitter-58f2b-default-rtdb.firebaseio.com",
      projectId: "kwitter-58f2b",
      storageBucket: "kwitter-58f2b.appspot.com",
      messagingSenderId: "792929370894",
      appId: "1:792929370894:web:0fd129f6c710a5f40bcd5f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name = localStorage.getItem('USERNAME');
    document.getElementById('abcde').innerHTML = "Welcome : " + user_name + ' !';

    function addRoom(){
      room_name = document.getElementById('room_name').value ;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"

      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
     //End code
      });});}
getData();

function redirecttoRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
