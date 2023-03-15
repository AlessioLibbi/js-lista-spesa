


// CREO ARRAY FRUTTA
const fruitArray = ["mela", "pera", "luagne", "mango"]
console.log(fruitArray);
const fruitList = document.querySelector(`.list`)
console.log(fruitList);
// CICLO
let i = 0
let fruitItem = ""
while (i < fruitArray.length) {
    let frutto = fruitArray[i]
    fruitItem += `<li class="frutto">${frutto}</li>`
    i++
}

fruitList.innerHTML = fruitItem