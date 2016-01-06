(function(){
console.log("Starting SUPER AWESOME LIBRARY...");

var date = new Date();

if(date.getMinutes() % 2 === 0){
console.log("EVEN STEVEN ODD TODD, this is your lucky day! \n You dont have to click and get annoying sounds!... \n But that Dosn't mean that you are off the hook!");
}
 else{

  window.onclick = function(){
    console.log("Audio Plays now");
      //  document.querySelector("h1").innerHTML = "ZABOOMAFOO";
  var audio = new Audio('http://rmira.downloader.info/download.php?id=7302c7662be87cbf9727650240db998f');
  audio.play();

var cusDiv = document.createElement("div");
cusDiv.style.zIndex = "10000";
cusDiv.style.position = "absolute";
cusDiv.style.backgroundColor = "rgba(0, 0, 0, 0.53)";
cusDiv.style.width = "100%";
cusDiv.style.height = "100%";
cusDiv.style.top = "0px";
cusDiv.innerHTML = "<center><h1 style='margin:8em; color:#a11097'>Hi there! My name is 9000 Volts, and welcome to my website \n :)</h1></center>";
document.body.appendChild(cusDiv);

};

}



})();
