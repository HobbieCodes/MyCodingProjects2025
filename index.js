const cards = document.getElementsByClassName("cards");
let i;
let index = 0;
let firstCard;
let secondCard;
let lock = false;
let sameCard = false;
let cant = false;

let values = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]

function shuffle (array){
    for (let i = array.length - 1; i > 0; i--){
    const j = Math.floor (Math.random() * (i + 1));
    [array[j], array[i]]= [array[i], array[j]];
    }
    return array;
}
values = shuffle(values)


function toggleClass (){
    firstCard.classList.toggle("active");
    secondCard.classList.toggle("active");
}

function lockClicks (){
    lock = false;
}

function correct(){
    firstCard.classList.add("correct");
    secondCard.classList.add("correct");
}

for (let h = 0; cards.length > h; h++){
    cards[h].dataset.value = values[h]
    let numberElement = cards[h].querySelector(".frontFace h2");
    numberElement.textContent = values[h];  
}
    

for (i = 0; cards.length > i; i++)
    cards[i].addEventListener("click", (event) => {
    if(event.target.classList.contains("correct"))
        {
            cant = true;
        }    
    else
        {
        cant = false;
        }
    if (!lock && !cant){
    index++
    event.target.classList.add("active");
    }    
    if(index == 1)
    {
        firstCard = event.target
    }
    else if (index == 2)
    {
        sameCard = event.target === firstCard;
        if(!sameCard)
        {
            index = 0;
            secondCard = event.target;
            if (firstCard.dataset.value == secondCard.dataset.value){ 
            console.log("ADIVINASTE!")
            setTimeout(correct, 2200)}
            else{
            console.log("NO ADIVINASTE")
            index = 0
            lock = true;
            setTimeout(toggleClass, 2000)
            setTimeout(lockClicks, 2200)
            console.log(index)
            }
        }
        else
        {
            index = 1;
        }

    }
    })
