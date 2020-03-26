/*
    firebase config should be added here
*/

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#userName');
let userEmail = document.querySelector('#userEmail');
let userMessage = document.querySelector('#userMessage');

const db = firestore.collection("collection_name_comes_here"); //add your collection name

submitBtn.addEventListener('click', function(){
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value;

    db.doc()
      .set({
          name: userNameInput,
          email: userEmailInput,
          message: userMessageInput
      })
      .then(function(){
          console.log("Data saved");
      })
      .catch(function(error){
          console.log(error);
      });
});