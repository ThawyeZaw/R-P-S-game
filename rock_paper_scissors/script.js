const items = ["rock", "paper", "scissors"];
const links = {
  rock: "images/fist.png",
  paper: "images/three.png",
  scissors: "images/peace.png",
};
var myattri;
var botattri;
var mymark = 0;
var botmark = 0;
var time = 1;
var correct = new Audio("./sounds/correct.mp3");
var wrong = new Audio("./sounds/wrong.mp3");
var myans = document.getElementById("mying");
var botans = document.getElementById("botimg");
var item = items[Math.floor(Math.random() * items.length)];

var set_time = function () {
  $("#time").html(time);
  time++;
};
var timecount = function () {
  setInterval(set_time, 1000);
};
var removeclass = function () {
  $("botimg").removeClass("rock");
  $("botimg").removeClass("paper");
  $("botimg").removeClass("scis");
};
var randombot = function () {
  var item = items[Math.floor(Math.random() * items.length)];
  if (item == "rock") {
    document.getElementById("botimg").setAttribute("src", "images/fist.png");
    $("#botimg").addClass("rock");
  } else if (item == "paper") {
    document.getElementById("botimg").setAttribute("src", "images/three.png");
    $("#botimg").addClass("paper");
  } else {
    document.getElementById("botimg").setAttribute("src", "images/peace.png");
    $("#botimg").addClass("scis");
  }
};

var mymarkcal = function () {
  myattri = document.getElementById("myimg").getAttribute("src");
  botattri = document.getElementById("botimg").getAttribute("src");
  if (myattri == "images/fist.png") {
    if (botattri == "images/peace.png") {
      correct.play()
      mymark += 1
      document.getElementById("mymark").innerHTML =
        "Your mark is (" + mymark + ")";
    } else if (botattri == "images/three.png") {
      wrong.play()
      mymark -= 1
      document.getElementById("mymark").innerHTML =
        "Your mark is (" + mymark + ")";
    } else if (botattri == "images/fist.png") {
      wrong.play()
      mymark += 0
      document.getElementById("mymark").innerHTML =
        "Your mark is (" + mymark + ")";
    } else {
      alert("Error")
    }
  } else if (myattri == "images/three.png") {
    if (botattri == "images/peace.png") {
      wrong.play()
      mymark -= 1
      document.getElementById("mymark").innerHTML =
        "Your mark is (" + mymark + ")";
    } else if (botattri == "images/three.png") {
      wrong.play()
      mymark += 0
      document.getElementById("mymark").innerHTML =
        "Your mark is (" + mymark + ")";
    } else if (botattri == "images/fist.png") {
      correct.play()
      mymark += 1
      document.getElementById("mymark").innerHTML =
        "Your mark is (" + mymark + ")";
    } else {
      alert("Error")
    }
  } else if (myattri == "images/peace.png") {
    if (botattri == "images/peace.png") {
      wrong.play()
      mymark += 0
      document.getElementById("mymark").innerHTML =
        "Your mark is (" + mymark + ")";
    } else if (botattri == "images/three.png") {
      correct.play()
      mymark += 1
      document.getElementById("mymark").innerHTML =
        "Your mark is (" + mymark + ")";
    } else if (botattri == "images/fist.png") {
      wrong.play()
      mymark -= 1
      document.getElementById("mymark").innerHTML =
        "Your mark is (" + mymark + ")"
    } else {
      alert("Error")
    }
  } else {
    alert("something went wrong!")
  }
};

function reset() {
  if ($(".myans > img").hasClass("active")) {
    mymark = 0
    document.getElementById("mymark").innerHTML =
      "Your mark is (" + mymark + ")";
    $(".myans > img").attr("src", "images/question-mark.png")
    $("#botimg").attr("src", "images/question-mark.png")
  }
}

function myfunc() {
  $(".myans > img").addClass("active")
  //making the button work
  $("#mymark").html("Your mark is (0)")
  $("#botmark").html("Bot mark is (0)")
  //counting the time
}

function dorock() {
  if ($(".myans > img").hasClass("active")) {
    $(".myans > img").attr("src", "images/fist.png")
    $("#time").html("")
    randombot()
    mymarkcal()
    setTimeout(removeclass, 1000)
  }
}

function dopaper() {
  if ($(".myans > img").hasClass("active")) {
    $(".myans > img").attr("src", "images/three.png")
    $("#time").html("")
    randombot()
    mymarkcal()
    setTimeout(removeclass, 1000)
  }
}

function doscis() {
  if ($(".myans > img").hasClass("active")) {
    $(".myans > img").attr("src", "images/peace.png")
    $("#time").html("")
    randombot()
    mymarkcal()
    setTimeout(removeclass, 1000)
  }
}
