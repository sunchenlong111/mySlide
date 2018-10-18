  var $allButtons = $('.btn>span')
  var $imgWindow = $('.images')
  var len = $allButtons.length
  var timer = timeSet()
  var n = 0

  for (let i = 0; i < len; i++) {
    $allButtons.eq(i).on('click', (e) => {
      var index = $(e.currentTarget).index()
      changeState(index)
      n = index
    })
  }

  arrowAction('left')
  arrowAction('right')

  $('.container').on('mouseover', () => {
    clearInterval(timer)
    changeDisplay('left','right','show')
  })

  $('.container').on('mouseleave', () => {
    timer = timeSet()
    changeDisplay('left', 'right', 'hidden')
  })




  //////////////////////////////////////

  function changeDisplay(name1,name2,value){
     $(`.${name1}`).addClass(value)
     $(`.${name2}`).addClass(value)
  }

  function arrowAction(arrow) {
    $(`.${arrow}`).on('click', (e) => {
      if (arrow === 'left') {
        n--
        if (n >= 0) {
          changeState(n)
        } else {
          n = 3
          changeState(n)
        }
      } else if (arrow === 'right') {
        n++
        if (n <= 3) {
          changeState(n)
        } else {
          n = 0
          changeState(n)
        }
      }
    })
  }


  function changeState(x) {
    var $button = $allButtons.eq(x)
    changePosition(-300 * x)
    addActive($button)
  }

  function changePosition(n) {
    $imgWindow.css({
      transform: `translate(${n}px)`
    })
  }

  function addActive($button) {
    $button.addClass('active')
      .siblings().removeClass('active')
  }

  function timeSet() {
    return setInterval(() => {
      $allButtons.eq(n % len).trigger('click')
      n++
    }, 2000)
  }