//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCULc4IETQDoQ5n-m_hY3rlBWfe_DSqCo8",
    authDomain: "kwitter-5ceb9.firebaseapp.com",
    databaseURL: "https://kwitter-5ceb9-default-rtdb.firebaseio.com",
    projectId: "kwitter-5ceb9",
    storageBucket: "kwitter-5ceb9.appspot.com",
    messagingSenderId: "717130051682",
    appId: "1:717130051682:web:23716e11137c2dcf08613b"
  };
  // Initialize Firebase               
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
    function send() { msg = document.getElementById("msg").value; firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 }); document.getElementById("msg").value = ""; }
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data["name"];
    mesage = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class''message_h4>" + message + "</h4>";
    like_button = "<button class='btn btn-warning' id="+firebase_message_id+ "value"+like+"onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";
    row= name_with_tag + message_with_tag +like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
    

    
    getData();
    
    function updateLike(message_id){
          console.log("clicked onlike button - "+ message_id);
          button_id = message_id;
          likes = document.getElementById(button_id).value;
          updated_likes = Number(likes) + 1;
          console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
    });
    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location.replace("kwitter.html");
    }
    }
    