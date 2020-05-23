(() => {
console.log('hello from JS!');
 
  let toggleButton = document.querySelector(".switch-text"),
    myHeading = document.querySelector('h1');
 
   allSVGs = document.querySelectorAll(".svg");


   
  function changeText() {
    myHeading.textContent = "Means of Transportation";
  }

  
  function logSVG() {
    console.log(this.id);
  }

  
  toggleButton.addEventListener("click", changeText);



  allSVGs.forEach(item => item.addEventListener("click", logSVG));

 
})();
