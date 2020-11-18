jQuery(document).ready(function () {
  mobile_menu()

  var body = jQuery('body'),
    $wind = jQuery(window),
    windW = $wind.width(),
    windH = $wind.height()

  $wind.on('resize', function () {
    windW = $wind.width()
    windH = $wind.height()

    if (windW > 1020) {
      jQuery('.nav ul').removeClass('opened')
      jQuery('.toggle').removeClass('opened')
    }
  })

  jQuery('.gallery .grid').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  })

  function mobile_menu() {
    var btn = jQuery('.toggle')
    var menuWrapper = jQuery('.nav ul')

    btn.on('click', function () {
      menuWrapper.toggleClass('opened')
      btn.toggleClass('opened')
    })

    if (windW < 1020) {
      menuWrapper.removeClass('opened')
      btn.removeClass('opened')
    }
  }
})
