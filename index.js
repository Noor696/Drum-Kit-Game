var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    switch (buttonInnerHTML) {
      case "w":
        var audiotom1 = new Audio("sounds/tom-1.mp3");
        audiotom1.play();
        break;

      case "a":
        var audiotom2 = new Audio("sounds/tom-2.mp3");
        audiotom2.play();
        break;

      case "s":
        var audiotom3 = new Audio("sounds/tom-3.mp3");
        audiotom3.play();
        break;

      case "d":
        var audiotom4 = new Audio("sounds/tom-4.mp3");
        audiotom4.play();
        break;

      case "j":
        var audiosnare = new Audio("sounds/snare.mp3");
        audiosnare.play();
        break;

      case "k":
        var audiocrash = new Audio("sounds/crash.mp3");
        audiocrash.play();
        break;

      case "l":
        var audiokick = new Audio("sounds/kick-bass.mp3");
        audiokick.play();
        break;

    
    }
  });
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event){
    makeSound(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
          var audiotom1 = new Audio("sounds/tom-1.mp3");
          audiotom1.play();
          break;
  
        case "a":
          var audiotom2 = new Audio("sounds/tom-2.mp3");
          audiotom2.play();
          break;
  
        case "s":
          var audiotom3 = new Audio("sounds/tom-3.mp3");
          audiotom3.play();
          break;
  
        case "d":
          var audiotom4 = new Audio("sounds/tom-4.mp3");
          audiotom4.play();
          break;
  
        case "j":
          var audiosnare = new Audio("sounds/snare.mp3");
          audiosnare.play();
          break;
  
        case "k":
          var audiocrash = new Audio("sounds/crash.mp3");
          audiocrash.play();
          break;
  
        case "l":
          var audiokick = new Audio("sounds/kick-bass.mp3");
          audiokick.play();
          break;
  
      
      }

}
