let dark = document.getElementById('Dark');
let light = document.getElementById('Light');
let body = document.querySelector('body');
let about =document.getElementsByClassName('About')
let coffee = document.getElementsByClassName('coffee')
let greenboxa = document.getElementsByClassName('greenboxa')
let greenboxb = document.getElementsByClassName('greenboxb')
let greenboxc = document.getElementsByClassName('greenboxc')
let click = document.getElementsByClassName('click')
let plan = document.getElementsByClassName('plan')
let text = document.querySelector('ul')

dark.addEventListener('click', function(){
   body.style.backgroundColor = 'black'
   body.style.color = 'white'
   about.style.backgroundColor = '#2e2d2d'
   about.style.color = 'white'
   coffee.style.color = 'white'
   greenboxa.style.backgroundColor = '#7fccb5'
   greenboxa.style.color = 'black'
   greenboxb.style.backgroundColor = '#7fccb5'
   greenboxb.style.color = 'black'
   greenboxc.style.backgroundColor = '#7fccb5'
   greenboxc.style.color = 'black'
   click.style.backgroundColor = '#7fccb5'
   click.style.color = 'black'
   plan.style.backgroundColor = 'grey'
   text.style.color = 'white'
});
light.addEventListener('click', function(){
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    about.style.backgroundColor = '#2e2d2d'
    about.style.color = 'white'
    coffee.style.color = 'black'
    listitem.style.color = 'white'
    greenboxa.style.backgroundColor = '#7fccb5'
    greenboxa.style.color = 'black'
    greenboxb.style.backgroundColor = '#7fccb5'
    greenboxb.style.color = 'black'
    greenboxc.style.backgroundColor = '#7fccb5'
    greenboxc.style.color = 'black'
    click.style.backgroundColor = '#7fccb5'
    click.style.color = 'black'
    plan.style.backgroundColor = 'grey'
 });