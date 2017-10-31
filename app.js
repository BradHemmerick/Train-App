// Initialize Firebase
var config = {
    apiKey: "AIzaSyAB5lys6ivytfIVijwqqLfkB-wiipvqFaI",
    authDomain: "nothertrain.firebaseapp.com",
    databaseURL: "https://nothertrain.firebaseio.com",
    projectId: "nothertrain",
    storageBucket: "nothertrain.appspot.com",
    messagingSenderId: "495137989496"
  };
  firebase.initializeApp(config);
//make a var to call the database
  var database = firebase.database();
//a var where i can push train names
  var trainsName = ""
  //a var where i can push the destination
  var destination = ""
  //a var where i can push the frequency(in minutes)
  var freqMin = ""
  //a var where i can put the time for the next arrivial
  var firstTrain = ""
  //a var where i can put the time in minutes away
  var minsAway = ""
  //on click of the submit button
  $("#submit-button").on("click", function (e) {
    //prevent any repeats  
    e.preventDefault();
  
    //the value of user input for trainName is = to the var ser up above same for destination freq and NA
     trainsName = $("#trainNameInput").val();
      destination = $("#destinationInput").val();
      freqMin = $("#freqInput").val();
      firstTrain = $("#firstTrainInput").val();
  
    //push it all to the database
     database.ref().push({
          trainsName: trainsName,
          destination: destination,
          freqMin: freqMin,
          firstTrain: firstTrain,
  
  
     });
  
  });
  //when so a new child is added this function will run
  database.ref().on("child_added", function(data){
      //test
      console.log(data.val().trainsName);  
  
      //get the val of TrainNames and append it to the TrainNames
     $("#TrainNames").append(data.val())
     //get the val of destination and append it to the destination
      $("#destination").append(data.val())
      //get the val of nextArrival and append it to the NextArrival
      $("#firstTrain").append(data.val())
      //get the val of minsaway and append it to The minsAway
      $("#minsAway").append(data.val())
      
  });
  