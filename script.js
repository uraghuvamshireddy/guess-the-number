let randomNum = parseInt(Math.random()*100+1)
const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const GuessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhigh = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p=document.createElement('p')

let preguess = []
let numguess=0
let playGame= true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateguess(guess)
    })
}

function validateguess(guess){
if(isNaN(guess)){
    alert('please enter valid number')

}
else if(guess<1 || guess>100){
    alert('please enter valid number')

}
else{
    preguess.push(guess)
    if(numguess === 11){
        displayGuess(guess)
        displaymsg(`Game Over , the number was ${randomNum}`)
        endgame()
    }
    else{
        displayGuess(guess)
        checkguess(guess)

    }
}
}

function checkguess(guess){
    if(guess === randomNum){
        displaymsg('You are correct')
        endgame()
    }
    else if(guess<randomNum){
        displaymsg('Number is too low')
    }
    else if(guess>randomNum){
        displaymsg('Number is too high')
    }

}
function displayGuess(guess){
userinput.value = ''
GuessSlot.innerHTML +=`${guess} , `
numguess++
remaining.innerHTML =`${11-numguess}`
}

function displaymsg(message){
  loworhigh.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
userinput.value= ''
userinput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
startover.appendChild(p)
playGame = false
newgame()
}

function newgame(){
    const newgamebutton = document.querySelector('#newGame')
    newgamebutton.addEventListener('click',function(e){
  randomNum = parseInt(Math.random()*100+1)
preguess=[]
numguess=1
GuessSlot.innerHTML = ''
loworhigh.innerHTML = ''
remaining.innerHTML =`${11-numguess}`
userinput.removeAttribute('disabled') 
startover.removeChild(p)
        playGame = true
    })

}