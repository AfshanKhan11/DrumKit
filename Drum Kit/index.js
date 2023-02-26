
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) 
{
    document.querySelectorAll(".drum")[index].addEventListener("click",()=>
    {
        var buttonInnerHTML = document.querySelectorAll(".drum")[index].innerHTML;
        makeAudio(buttonInnerHTML);
        addAnimations(buttonInnerHTML);
    }
    );
}
document.addEventListener("keydown",(event)=>{
    makeAudio(event.key);
    addAnimations(event.key);
})
function makeAudio(key) {
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a" :
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();

            break;
        case "s" :
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();

            break;
        case "d" :
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();

            break;
        case "j" :
            var crash=new Audio("sounds/crash.mp3");
            crash.play();

            break;
        case "k" :
            var snare=new Audio("sounds/snare.mp3");
            snare.play();

            break;
        case "l" :
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();

            break;    
        default:
            console.log("not available");
            break;
    }     

}

function addAnimations(currentKey) {
    var abs= document.querySelector("."+currentKey);
    abs.classList.add("pressed");
    setTimeout(() => {
        abs.classList.remove("pressed");
    }, 100);
}
// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();