//need to make 18 boxes
//find imgs from fontawesome for boxes..9 imgs total
//boxes need to be selected
//flip boxes backover if pair doesn't match
// show hidden imgs
// minus lives when pair doesn't match
//create timer
//losing screen
//winning screen

let lives = 8


    let secs= 0;
    let min=0;
    let timer= min + ":" + secs;
function myTimer(){
setTimer = setInterval(function(){
    
    secs++;
    if(secs === 60){
        min++;// A min will add everytime min hits 60
        secs=0;// will return to 0 once secs hit 60
    }
    $('.timer').html(timer)
},1000);

}




let imgs = ['fas fa-beer', 'fas fa-glass-martini', 'fas fa-glass-whiskey', 'fas fa-wine-bottle',
 'fas fa-glass-cheers', 'fas fa-cocktail', 'fas a-glass-martini-alt', 'fas fa-wine-glass-alt', 'fas fa-flask',
 'fas fa-beer', 'fas fa-glass-martini', 'fas fa-glass-whiskey', 'fas fa-wine-bottle',
  'fas fa-glass-cheers', 'fas fa-cocktail', 'fas a-glass-martini-alt', 'fas fa-wine-glass-alt', 'fas fa-flask',
]

let myBeverages = imgs.map(item=>{
return `<div data-id="${item}" class="card"><div class="front"></div><div class="back"></div><span class= "${item}"></span></div>`//added imgs to span


}).join('')
 $('#drinks').html(myBeverages)//injects imgs into html


 
 card1 = null
 card2 = null
 
$('.card').click(function(){//identifies whats clicked
$(this).addClass('active')//when card is clicked, a class of active will be added to card
//let indentifier = $(this).data('id')


    if(!card1){
        card1= $(this)
    }
    else{
        card2= $(this)
    }
})

if (card1 && card2){//will let me know if my cards exist... BEFORE I ADDED (CARD1 && CARD2) I WAS HAVING MAJOR ISSUES WITH TRYING TO GET THE TWO CARDS TO EXIST.

    
    let time = setTimeout(()=>{
        card1.removeClass('active')
        card2.removeClass('active')
        card1 = null
        card2 = null
    },1000)

    if (card1.data('id') === card2.data('id')){
        clearTimeout(time)
        
    }
}
    //else if (card1.data('id') !== card2.data('id')){
        //clearTimeout()
    //}
//}

 