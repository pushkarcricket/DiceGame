// function randomNumbers(){
//     return Math.floor(Math.random()*6) +1
// }
// const result=randomNumbers()
// console.log(result)

let randomNumbers=  Math.floor(Math.random()*6) +1;
// console.log(randomNumbers);
// let image=document.getElementsByClassName("img1");
// // console.log(img1);

// image.addEventLister("click",(eve)=>{
//     console.log("i am clicked");
// }


let  randomImages="dice"+randomNumbers +".png";
console.log(randomImages)

let randomDiceSource="images/"+randomImages;
console.log(randomDiceSource);
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSource);


let randomNumbers2=Math.floor(Math.random()*6) +1;

let randomImages2="dice"+randomNumbers2 +".png";

let randomDiceSource2="images/"+ randomImages2;
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceSource2);


if(randomNumbers>randomNumbers2){
    document.querySelector("h1").innerHTML="plyr1 win";

}else if( randomNumbers<randomNumbers2){
    document.querySelector("h1").innerHTML="plyer2  win"

}else if(randomNumbers==randomNumbers2){
    document.querySelector("h1").innerHTML="scores are equals"
}else{
    console.log("no body wins")
}



let image=document.getElementById("hello");
image.addEventListener("click",(eve)=>{
    // console.log("i am clicked")
    let randomNumbers=  Math.floor(Math.random()*6) +1;
    console.log("i am clicked",randomNumbers)

})
let img2= document.getElementsByClassName("img2");

