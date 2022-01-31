///////////////////////
///    DOM NODES    ///
///////////////////////


const menu = document.querySelector('.menu')
const menuEl = document.querySelector('.elements')
const startBtn = document.querySelector('#start')
const introBtn = document.querySelector('#intro')
const intro = document.querySelector('.intro')
const introElBtn = document.querySelector('.intro > button')
const attBtn = document.getElementById('attack')
const abilBtn = document.getElementById('ability')
const distBtn = document.getElementById('distract')
const dist = document.querySelectorAll('.distracted')
const mapIcon = document.querySelector('.icon')
const map = document.querySelector('.map')
const combat = document.querySelector('.combat')
let playerStatus = document.querySelector('.player')
let shadowStatus = document.querySelector('.shadow')


///////////////////////
///    FUNCTIONS    ///
///////////////////////


function playerCheck(){
    if(player.hp <= 0){
        alert('You\'ve been defeated! Better luck next time!')
    }
}

function enemyTurn(){
    if(enemies[enemies.length - 1].hp <= 0){
        enemies.pop()
        alert('You\'ve defeated the shadow! On to the next area!')
        shadowStatus.textContent = 'Health: ' + enemies[enemies.length - 1].hpMax + '/' + enemies[enemies.length - 1].hp
    } else {
        alert('The shadow is preparing to attack!')
        enemies[enemies.length - 1].attack()
        playerCheck()
    }
}

function nextLevel(){
    
}


////////////////////////////////
///    OBJECTS AND ARRAYS    ///
////////////////////////////////


const player = {
    name: 'Warrior of Light',
    hpMax: 150,
    hp: 150,
    att: 10,
    accuracy: .7,

    attack(){
        if(Math.random() < player.accuracy){
            enemies[enemies.length - 1].hp -= player.att;
            alert('You hit the shadow!')
            shadowStatus.textContent = 'Health: ' + enemies[enemies.length - 1].hpMax + '/' + enemies[enemies.length - 1].hp
            if(enemies[0] && enemies[enemies.length - 1].hp > 0){
                shadowStatus.textContent = 'Health: ' + enemies[enemies.length - 1].hpMax + '/' + enemies[enemies.length - 1].hp
            } else if(enemies[enemies.length - 1].hp <= 0){
                shadowStatus.textContent = 'Health: ' + enemies[enemies.length - 1].hpMax + '/' + 0
            }
        } else if(enemies[0]){
            alert('The shadow avoided the hit!')
        }
    },

    ability(){
        if(Math.random() < player.accuracy){
            enemies[enemies.length - 1].hp -= (player.att * 2);
            alert('You hit the shadow!');
            if(enemies[0] && enemies[enemies.length - 1].hp > 0){
                shadowStatus.textContent = 'Health: ' + enemies[enemies.length - 1].hpMax + '/' + enemies[enemies.length - 1].hp
            } else if(enemies[enemies.length - 1].hp <= 0){
                shadowStatus.textContent = 'Health: ' + enemies[enemies.length - 1].hpMax + '/' + 0
            }
        }else if(enemies[0]){
            alert('The shadow avoided the hit!')
        }
    },
}

playerStatus.textContent = 'Health: ' + player.hpMax + '/' + player.hp

const shadow1 = {
    name: 'Shadow Grunt',
    hpMax: 20,
    hp: 20,
    att: 5,
    accuracy: .6,

    attack(){
        if(Math.random() < shadow1.accuracy){
            player.hp -= shadow1.att;
            alert('You\'ve been hit')
            alert('Your hp is at ' + player.hp + '!')
            playerStatus.textContent = 'Health: ' + player.hpMax + '/' + player.hp
        } else {
            alert('You avoided the hit!')
        }
    },
}

const shadow2 = {
    name: 'Shadow Soldier',
    hpMax: 30,
    hp: 30,
    att: 10,
    accuracy: .6,

    attack(){
        if(Math.random() < shadow2.accuracy){
            player.hp -= shadow2.att;
            alert('You\'ve been hit')
            alert('Your hp is at ' + player.hp + '!')
            playerStatus.textContent = 'Health: ' + player.hpMax + '/' + player.hp
        } else {
            alert('You avoided the hit!')
        }
    },
}

const shadow3 = {
    name: 'Shadow Boss',
    hpMax: 40,
    hp: 40,
    att: 15,
    accuracy: .7,

    attack(){
        if(Math.random() < shadow3.accuracy){
            player.hp -= shadow3.att;
            alert('You\'ve been hit')
            alert('Your hp is at ' + player.hp + '!')
            playerStatus.textContent = 'Health: ' + player.hpMax + '/' + player.hp
        } else {
            alert('You avoided the hit!')
        }
    },
}

const shadow4 = {
    name: 'Mother of Shadows',
    hpMax: 50,
    hp: 50,
    att: 20,
    accuracy: .8,

    attack(){
        if(Math.random() < shadow4.accuracy){
            player.hp -= shadow4.att;
            alert('You\'ve been hit')
            alert('Your hp is at ' + player.hp + '!')
            playerStatus.textContent = 'Health: ' + player.hpMax + '/' + player.hp
        } else {
            alert('You avoided the hit!')
        }
    },
}

const enemies = [shadow4,shadow3,shadow2,shadow1]

shadowStatus.textContent = 'Health: ' + enemies[enemies.length - 1].hpMax + '/' + enemies[enemies.length - 1].hp


/////////////////////////////
///    EVENT LISTENERS    ///
/////////////////////////////


startBtn.addEventListener('click', evt => {
    menu.classList.add('hide')
    map.classList.remove('hide')
})

introBtn.addEventListener('click', evt => {
    menuEl.classList.add('hide')
    intro.classList.remove('hide')
})

introElBtn.addEventListener('click', evt => {
    intro.classList.add('hide')
    menuEl.classList.remove('hide')
})

distBtn.addEventListener('click', evt => {
    dist[0].classList.remove('hide')
    dist[1].classList.remove('hide')
    enemies[enemies.length - 1].accuracy -= .2
    enemyTurn()
})

attBtn.addEventListener('click', evt => {
    player.attack()
    console.log(enemies[enemies.length - 1].hp)
    enemyTurn()
})

abilBtn.addEventListener('click', evt => {
    player.ability()
    console.log(enemies[enemies.length - 1].hp)
    enemyTurn()
})