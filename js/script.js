


// CREO ARRAY FRUTTA
const fruitArray = ["mela", "pera", "luagne", "mango"]
console.log(fruitArray);
const fruitList = document.querySelector(`.list`)
console.log(fruitList);
// CICLO
let i = 0
while (i < fruitArray.length) {
    let frutto = fruitArray[i]
    fruitList.innerHTML += `<li class="frutto">${frutto}</li>`
    i++
}