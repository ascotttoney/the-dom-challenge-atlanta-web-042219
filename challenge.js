// document.addEventListener('DOMContentLoaded', startCounter)

// const counterH1 = document.getElementById('counter')
// const addButton = document.getElementById('+')
// const deleteButton = document.getElementById('-')
// const likeButton = document.getElementById('likeButton')
// const pauseButton = document.getElementById('pause')
// const submitButton = document.getElementById('submit')

// let timer
// let num
// let status = 'paused'
// let likes = document.querySelector(`ul[class='likes']`)

// document.addEventListener('click', handleEvents)

// //--- INCREASE COUNTER -------------------------------------------------//

// function startCounter() {
//   timer = window.setInterval(increase, 1000)
// }

// function increase() {
//   num = parseInt(counterH1.innerText)
//   counterH1.innerText = num + 1
// }

// //--- HANDLE EVENTS ----------------------------------------------------//

// function handleEvents(e) {
//   e.preventDefault()
//   console.log(e.target.id)

//   if (status !== 'paused'){
//     if (e.target.id === 'submit'){
//       let commentInput = document.getElementById('comment')
//       let commentList = document.getElementById('list')

//       commentList.innerHTML += `<p>${commentInput.value}</p>`
//       commentInput.value = ''
//     }

//     if (e.target === addButton) {
//       num++
//       counterH1.innerText = num
//     }

//     if (e.target === deleteButton) {
//       num--
//       counterH1.innerText = num
//     }
//   }

//   if (e.target.id === 'pause'){
//     pauseApp(e)
//   }

//   else {
//     addButton.active = false
//     deleteButton.active = false
//     likeButton.active = false
//     submitButton.active = false
//   }
// }

// function pauseApp(e) {
//   if (e.target.innerText === 'pause'){
//     e.target.innerText = 'resume'
//     clearInterval(timer)
//     status = 'paused'
//   }
  
//   else {
//     e.target.innerText = 'pause'
//     startCounter()
//     status = 'not paused'
//   }
// }

// function likeNum() {
//   let likedNum = document.querySelector(`ul[class="likes"] > li[data-num="${counter.innerText}"]`)
  
//   if (likedNum) let span = likedNum.querySelector('span').innerText++
//   else likes.innerHTML += `<li data-num="${counter.innerText}">${counter.innerText} has been liked <span>1</span> times</li>`
// }



document.addEventListener("DOMContentLoaded", init)

let timer
let status = 'not paused'
let counter = document.getElementById('counter')
let form = document.getElementById('comment-form')
let likes = document.querySelector(`ul[class='likes']`)

document.addEventListener("click", handleEvents)

function init(){
  timer = window.setInterval(function(){counter.innerText++}, 1000)
}

function handleEvents(e){
  e.preventDefault()

  if(status !== 'paused'){
    if(e.target.id === 'submit'){
      addComment()
    } else if(e.target.id === '-'){
      counter.innerText--
    } else if(e.target.id === '+'){
      counter.innerText++
    } else if(e.target.id === '<3'){
      likeNum()
    }
  }

  if(e.target.id === 'pause'){
    pauseApp(e)
  }
}

function pauseApp(e){
  if(e.target.innerText === 'pause'){
    e.target.innerText = 'resume'
    clearInterval(timer)
    status = 'paused'
  } else {
    e.target.innerText = 'pause'
    init()
    status = 'not paused'
  }
}

function addComment(){
  let commentInput = document.getElementById('comment')
  let commentList = document.getElementById('list')

  commentList.innerHTML += `<p>${commentInput.value}</p>`
  commentInput.value = ''
}


function likeNum(){
  let likedNum = document.querySelector(`ul[class="likes"] > li[data-num="${counter.innerText}"]`)
  
  if(likedNum){
    let span = likedNum.querySelector('span').innerText++
  } else {
    likes.innerHTML += `<li data-num="${counter.innerText}">${counter.innerText} has been liked <span>1</span> times</li>`
  }
}