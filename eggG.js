(function(){
console.log("Starting SUPER AWESOME LIBRARY...");

var date = new Date();

if(date.getSeconds() % 2 === 0){
console.log("EVEN STEVEN ODD TODD, this is your lucky day! \n You dont have to click and get annoying sounds!");
} else{
  window.onclick = function(){
    var audio = new Audio('http://soundbible.com/grab.php?id=1567&type=mp3');
    setInteval(function(){
        audio.play();
    },10);


  document.title = "I LIKE TO EAT"
  }
}

})();
