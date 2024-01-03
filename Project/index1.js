const colorCodeDiv = document.getElementById("color-code");
const button = document.getElementById("button");
const optionContainer = document.getElementById("option-container")
let randomColor = null;
let userScore = 0;
function generateRandomNumberBetween(min, max){
   return min + Math.floor(Math.random() * max + Math.floor(Math.random()))
}
function generateRandomColorRGB(){
    const red = generateRandomNumberBetween(0,255);
    const green = generateRandomNumberBetween(0,255);
    const blue = generateRandomNumberBetween(0,255);

    return `rgb(${red}, ${green}, ${blue})`
}

// function start(){
//     let randomColor = generateRandomColorRGB();
//     colorCodeDiv.innerHTML = randomColor;
// }
function scoreIncrease(){
    userScore += 1;
    document.getElementById('score').innerText = userScore;
    console.log("Score Finction")
}
function validateResult(el){
    const selectedColor = el.target.style.backgroundColor;
    if(selectedColor === randomColor){
        scoreIncrease();
    }
    return;
}
button.addEventListener("click", ()=>{
    optionContainer.innerHTML = null;
    let randomColor = generateRandomColorRGB();
    colorCodeDiv.innerHTML = randomColor;

    const astIndex = generateRandomNumberBetween(0,255)

    for(let i=0; i< 6; i++){
        const div = document.createElement("div");
        div.addEventListener('click',validateResult,()=>{
            console.log("Validate Function")
        })
        div.style.backgroundColor = i === astIndex ? randomColor : generateRandomColorRGB();
        optionContainer.append(div);
    }
});
// window.addEventListener('load', start())
