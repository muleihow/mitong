var main = document.querySelector('.main')
var imgs = document.querySelectorAll('.main img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var lis = document.querySelectorAll('.nums li')
var showIndex = 0
var timer


animate(imgs[showIndex], { 'opacity': 1 }, function () {
  timer = setInterval(function () {
    moveNext()
  }, 2000)
})


function moveNext() {

  imgs[showIndex].className = ''
  lis[showIndex].className = ''
  imgs[showIndex].style.opacity = 0.1

  showIndex++
  if (showIndex >= imgs.length) {
    showIndex = 0
  }

  imgs[showIndex].className = 'show'
  lis[showIndex].className = 'active'
  animate(imgs[showIndex], { 'opacity': 1 })
}


function movePrev() {

  imgs[showIndex].className = ''
  lis[showIndex].className = ''
  imgs[showIndex].style.opacity = 0.1

  showIndex--
  if (showIndex < 0) {
    showIndex = imgs.length - 1
  }

  imgs[showIndex].className = 'show'
  lis[showIndex].className = 'active'
  animate(imgs[showIndex], { 'opacity': 1 })
}


prev.onclick = function () {

  clearInterval(timer)
  clearInterval(imgs[showIndex].timer)

  movePrev()


  timer = setInterval(function () {
    moveNext()
  }, 2000)
}


next.onclick = function () {

  clearInterval(timer)
  clearInterval(imgs[showIndex].timer)

  moveNext()


  timer = setInterval(function () {
    moveNext()
  }, 2000)
}

main.onmouseover = function () {
  clearInterval(timer)
  clearInterval(imgs[showIndex].timer)
  // moveNext() 
}
main.onmouseout = function () {
  timer = setInterval(function () {
    moveNext()
  }, 2000)
}


for (var i = 0, len = lis.length; i < len; i++) {
  lis[i].index = i
  lis[i].onclick = function () {

    clearInterval(timer)
    clearInterval(imgs[showIndex].timer)


    imgs[showIndex].className = ''
    lis[showIndex].className = ''
    imgs[showIndex].style.opacity = 0.1

    showIndex = this.index

    imgs[showIndex].className = 'show'
    lis[showIndex].className = 'active'
    animate(imgs[showIndex], { 'opacity': 1 })


    timer = setInterval(function () {
      moveNext()
    }, 2000)
  }
}


