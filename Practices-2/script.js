const clickCommand = document.querySelector(".ClickMe");
const containerClass = document.querySelector(".container");
const popUp = document.querySelector(".pop-up");
const gancelButton = document.querySelector(".Gancel");
const confirmButton = document.querySelector(".Confirm");
const wMessage = document.querySelector(".warning-Message");
clickCommand.addEventListener("click", function(e){
    containerClass.style.display = "none";
     popUp.style.display = "flex";
     e.preventDefault();
})
gancelButton.addEventListener("click", function(){
    containerClass.style.display = "flex";
    popUp.style.display = "none";
})
confirmButton.addEventListener("click", function(){
    containerClass.style.display = "none";
    popUp.style.display = "none";
    wMessage.style.display = "flex";
})
