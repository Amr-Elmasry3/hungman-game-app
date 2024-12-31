// Access To All Element To Use Them

let myGame= document.querySelector('.my-game');
let sourceWord= document.querySelector(".source-word span");
let manShape= Array.from(document.querySelectorAll(".man span"));
let characters= Array.from(document.querySelectorAll(".characters span"));
let successAll= document.querySelector("success-all");
let failAll= document.querySelector("fail-all");

// Divs Are Creat In Page And Style

let divOfCharacters= document.createElement("div");

let btnAgain= document.createElement("button");
btnAgain.appendChild(document.createTextNode("Again"));
btnAgain.style.cssText= "display: block ; margin: 15px 0 10px ; position: relative ; left: 50% ; transform: translateX(-50%) ; border: none ; background-color: #eee ; font-size: 25px ; font-weight: bold ; color: #009688 ; padding: 5px 10px ; box-shadow: inset 3px 3px 5px #858585, inset -3px -3px 5px #858585 ; cursor: pointer";

let coverDiv= document.createElement("div");
coverDiv.style.cssText= "position: fixed ; top: 0 ; width: 100% ; height: 100%";

// Part Of Arrays

let players= ["Shikabala","Cole Palmer","De Bruyne","Robinho","Balotli","Nasser Mansy"];
let Movies= ["BlackList","Shutter Island","Prison Break","John Wick","Seven","Prestige"];
let Programming= ["Coding","JavaScript","Function","Paython","Develpoer","Project"];
let countries= ["Palestine","Egypt","Yemen","Qatar","Bahrain","Japan"];
let allOfArray=  [players,Movies,Programming,countries];

// Part Of Variables

let randomArray,randomWord;
let dataSet= 1,counter= 0,stats= false,counterOfManShape= 0,res= "";

// The Main Code

appereTypeOfWord();

characters.forEach((ele) => {
  ele.addEventListener("click",(eve) => {
    for (let x=0 ; x<allOfArray[randomArray][randomWord].length ; x++){
      if (eve.currentTarget.innerHTML == allOfArray[randomArray][randomWord][x].toUpperCase()){
        stats= true;
        eve.currentTarget.style.cssText= "background-color: #eee ; pointer-event: none";
        let allSpanOfChara= document.querySelectorAll(".all-chara span");
        allSpanOfChara.forEach((ele) => {
          let goal= ele.getAttribute("data-number");
          if (parseInt(goal)-1 == x){
            ele.innerHTML= eve.currentTarget.innerHTML;
          }
        })

        // Check If The User Complete The Word
        res="";
        allSpanOfChara.forEach((ele) => {
          res+= ele.innerHTML;
        })
        res === allOfArray[randomArray][randomWord].toUpperCase() ? userFoundWord() : false;
      }
      else if (eve.currentTarget.innerHTML != allOfArray[randomArray][randomWord][x].toUpperCase()) {
        if (x === allOfArray[randomArray][randomWord].length-1 && stats === false){
          eve.currentTarget.style.cssText= "background-color: #eee ; pointer-event: none";
          manShape[counter].classList.add("appere");
          checkappereAllManShape();
          counter+=1;
        }
        else {
          continue;
        }
      }
    }
    stats= false;
  })
});

btnAgain.onclick= function (){
  window.location.reload();
}

// Part Of Functions

function appereTypeOfWord(){
  randomArray= Math.floor(Math.random() * allOfArray.length);
  randomWord= Math.floor(Math.random() * allOfArray[randomArray].length);

  randomArray === 0 ? sourceWord.innerHTML= "PLayers" : randomArray === 1 ? sourceWord.innerHTML= "Movies" : randomArray === 2 ? sourceWord.innerHTML= "Programming" : sourceWord.innerHTML= "Countries";
  // console.log(allOfArray[randomArray][randomWord]);

  divOfCharacters.setAttribute("class","contanier");
  divOfCharacters.classList.add("all-chara");
  divOfCharacters.style.cssText= "background-color: white ; padding: 10px 5px ; margin-top: 20px ; display: flex ; align-items: center ; justify-content: center ; flex-wrap: wrap";
  myGame.appendChild(divOfCharacters);

  for (let x=0 ; x<allOfArray[randomArray][randomWord].length ; x++){
    let spanOfCharacter= document.createElement("span");
    spanOfCharacter.style.cssText= "background-color: #eee ; width: 35px ; height: 40px ; border-bottom: 4px solid #009688 ; padding: 5px ; margin: 0 15px 10px ; display: flex; align-items: center ; justify-content: center ; font-size: 29px ; fonr-weight: bold";
    
    let shapeSpan= document.createElement("span");
    shapeSpan.style.cssText= "width: 25px ; height: 4px ; background-color: #121212";
    
    if (allOfArray[randomArray][randomWord][x] === " "){
      shapeSpan.setAttribute("data-number",`${dataSet}`);
      shapeSpan.innerHTML= " "; 
      divOfCharacters.appendChild(shapeSpan);
      dataSet++;
    }
    else {
      spanOfCharacter.setAttribute("data-number",`${dataSet}`);
      divOfCharacters.appendChild(spanOfCharacter);
      dataSet++;
    }
  }
}

function checkappereAllManShape(){
  counterOfManShape= 0;
  manShape.forEach((ele) => {
    ele.classList.contains("appere") ? counterOfManShape++ : false;
  })
  if (counterOfManShape === 8){
    let gameOver= document.createElement("div");
    let hOne= document.createElement("h1");
    let textTwo= document.createTextNode(`The Word Was ${allOfArray[randomArray][randomWord]}`);

    gameOver.style.cssText= "position: fixed ; width: 50%; top: 50% ; left: 50% ; transform: translate(-50%,-50%) ; background-color: #009688 ; text-align: center ; padding: 10px ; border-radius: 10px ; color: white ; font-size: 18px";
    hOne.style.cssText= "color: red ; font-size: 50px ; margin: 0 0 15px";

    hOne.appendChild(document.createTextNode("Game Over"));
    gameOver.appendChild(hOne);
    gameOver.appendChild(textTwo);
    gameOver.appendChild(btnAgain);
    coverDiv.appendChild(gameOver);
    myGame.appendChild(coverDiv);
    failAll.play();
  }
}

function userFoundWord(){
  let congratolation= document.createElement("div");
  let congHOne= document.createElement("h1");

  congratolation.style.cssText= "position: fixed ; width: 50%; top: 50% ; left: 50% ; transform: translate(-50%,-50%) ; background-color: #009688 ; text-align: center ; padding: 10px ; border-radius: 10px ; color: white ; font-size: 18px";
  congHOne.style.cssText= "color: White ; font-size: 50px ; margin: 0 0 15px";

  congHOne.appendChild(document.createTextNode("Congratulations"));
  congratolation.appendChild(congHOne);
  congratolation.appendChild(btnAgain);
  coverDiv.appendChild(congratolation);
  myGame.appendChild(coverDiv);
}


// 3