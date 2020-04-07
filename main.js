let lives = 8
let win = 0

function myTimer(){
    let secs=0;
    let min=0;
    let timer= min + ":" + secs;
    let myInterval = setInterval(()=>{
   
    secs++;
    
    if(secs === 60){
        min++; // A min will add everytime min hits 60
        secs=0; // will return to 0 once secs hit 60
    }
    $('.timer').html(timer)
},1000)
}
myTimer()
console.log(myTimer)



let imgs = ['fas fa-beer', 'fas fa-glass-martini', 'fas fa-glass-whiskey', 'fas fa-wine-bottle',
 'fas fa-glass-cheers', 'fas fa-cocktail', 'fas fa-glass-martini-alt', 'fas fa-wine-glass-alt', 'fas fa-flask',
 'fas fa-beer', 'fas fa-glass-martini', 'fas fa-glass-whiskey', 'fas fa-wine-bottle',
  'fas fa-glass-cheers', 'fas fa-cocktail', 'fas fa-glass-martini-alt', 'fas fa-wine-glass-alt', 'fas fa-flask',
]

let shuffle = function shuffleCards(imgs) {
    let currentIndex = imgs.length// length in the array
    var temporaryValue
    var randomIndex
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1 
        temporaryValue = imgs[currentIndex]
        imgs[currentIndex] = imgs[randomIndex]
		imgs[randomIndex] = temporaryValue
    }
    return imgs;
}
shuffle(imgs)

console.log(imgs)

let myBeverages = imgs.map(item=>{
return `<div data-id="${item}" class="card"><div class="front"></div><div class="back"></div><span class= "${item}"></span></div>`//added imgs to span


}).join('')
 $('#drinks').html(myBeverages)//injects imgs into html

 
 
 let card1 = null
 let card2 = null
 
$('.card').click(function() {//identifies whats clicked
    $(this).addClass('active')//when card is clicked, a class of active will be added to card
    
    //let indentifier = $(this).data('id')


    if(!card1) {
        card1= $(this)
    }
    else {
        card2= $(this)
    }

console.log(card1,card2)
if (card1 && card2) {
    //will let me know if my cards exist... BEFORE I ADDED (CARD1 && CARD2) I WAS HAVING MAJOR ISSUES WITH TRYING TO GET THE TWO CARDS TO EXIST.
    let time = setTimeout(() => {
        card1.removeClass('active')
        card2.removeClass('active')
        card1 = null
        card2 = null
    },1000)

    console.log(card1, card2)

    if (card1.data('id') === card2.data('id')) {
        card1.addClass('match')
        card2.addClass('match')
        win++
        clearTimeout(time)
        
    }
    if (win===9){
        alert ('DRINKS ON ME!')
        console.log(win)
    }

    else (card1.data('id') !== card2.data('id')); {
        lives--
        console.log(lives)
        $('.lives').html(lives)
    }
    if(lives===0){
        alert   ('NOOO BOOZE FOR YOU!')
    }
} 
})

     

