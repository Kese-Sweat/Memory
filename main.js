//need to make 18 boxes
//find imgs from fontawesome for boxes..9 imgs total
//boxes need to be selected
//flip boxes backover if pair doesn't match
// show hidden imgs
// minus lives when pair doesn't match
//create timer
//losing screen
//winning screen

imgs = ['fas fa-beer', 'fas fa-glass-martini', 'fas fa-glass-whiskey', 'fas fa-wine-bottle',
 'fas fa-glass-cheers', 'fas fa-cocktail', 'fas a-glass-martini-alt', 'fas fa-wine-glass-alt', 'fas fa-flask',
 'fas fa-beer', 'fas fa-glass-martini', 'fas fa-glass-whiskey', 'fas fa-wine-bottle',
  'fas fa-glass-cheers', 'fas fa-cocktail', 'fas a-glass-martini-alt', 'fas fa-wine-glass-alt', 'fas fa-flask',
]

myBeverages = imgs.map(item=>{
return `<span class= "${item}"></span>`


}).join('')
 $('#drinks').html(myBeverages)