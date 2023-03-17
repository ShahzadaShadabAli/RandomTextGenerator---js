var randomText = ""
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"


for( var i = 0;i<7;i++){
    randomText +=characters.charAt(Math.floor(Math.random() * characters.length))
}
document.querySelector("h1").innerHTML=randomText
document.querySelector(".verify").onclick = function(){
    var input = document.querySelector("input").value;
    var bg = document.querySelector("body")
   if( randomText == input){

    bg.classList.add("bg-success")
    var emoji = document.querySelector('.emoji')
    emoji.innerHTML=`<i class="fas fa-smile "></i>`
    
} else{
    bg.classList.add("bg-danger")
    var emoji = document.querySelector('.emoji')
    emoji.innerHTML=`<i class="far fa-angry "></i>`
} 
document.querySelector("input").value=""
}

