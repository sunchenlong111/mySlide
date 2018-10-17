  var $allButtons = $('.btn>button')
  var $imgWindow = $('.images')
  var len = $allButtons.length
  var n = 1
  for (let i = 0; i < len; i++) {
    $allButtons.eq(i).on('click', (e) => {
      var index = $(e.currentTarget).index()
      var length = index * (-300)
      $imgWindow.css({
        transform: `translate(${length}px)`
      })
      addRed($allButtons.eq(index))
      n = index
    })
  }

  function addRed($button) {
    $button.addClass('red')
      .siblings().removeClass('red')
  }

  var timer = timeSet()

  function timeSet() {
    return setInterval(() => {
      $allButtons.eq(n % len).trigger('click')
      n++
    }, 1000)
  }


  $('.window').on('mouseover', () => {
    clearInterval(timer)
  })

  $('.window').on('mouseleave', () => {
    timer = timeSet()
  })