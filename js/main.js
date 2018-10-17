  var $allButtons = $('.btn>span')
  var $imgWindow = $('.images')
  var len = $allButtons.length
  var timer = timeSet()
  var n = 0
  for (let i = 0; i < len; i++) {
    $allButtons.eq(i).on('click', (e) => {
      var index = $(e.currentTarget).index()
      var length = index * (-300)
      $imgWindow.css({
        transform: `translate(${length}px)`
      })
      addActive($allButtons.eq(index))
      n = index
    })
  }

  $('.left').on('click', (e) => {
    n--
    if (n >= 0) {
      $imgWindow.css({
        transform: `translate(${-300*n}px)`
      })
      addActive($allButtons.eq(n))
    } else {
      n = 3
      $imgWindow.css({
        transform: `translate(${-900}px)`
      })
      addActive($allButtons.eq(n))
    }
  })

  $('.right').on('click', (e) => {
    n++
    if (n <= 3) {
      $imgWindow.css({
        transform: `translate(${-300*n}px)`
      })
      addActive($allButtons.eq(n))
    } else {
      n = 0
      $imgWindow.css({
        transform: `translate(0px)`
      })
      addActive($allButtons.eq(n))
    }
  })

  $('.container').on('mouseover', () => {
    clearInterval(timer)
    $('.left').css({
      display: 'block'
    })
    $('.right').css({
      display: 'block'
    })
  })

  $('.container').on('mouseleave', () => {
    timer = timeSet()
    $('.left').css({
      display: 'none'
    })
    $('.right').css({
      display: 'none'
    })
  })


  function addActive($button) {
    $button.addClass('active')
      .siblings().removeClass('active')
  }

  function timeSet() {
    return setInterval(() => {
      $allButtons.eq(n % len).trigger('click')
      n++
    }, 1000)
  }