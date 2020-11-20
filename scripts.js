jQuery(document).ready(function () {
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
      body.removeClass('menu--open')
    }
  })

  // inits
  mobile_menu()
  smoothScroll()
  highlight_current_menu_item()

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
      body.toggleClass('menu--open')
      var menuLinks = jQuery('.nav ul.opened a')

      menuLinks.on('click', function() {
        menuWrapper.removeClass('opened')
        btn.removeClass('opened')
        body.removeClass('menu--open')
      })

      jQuery(document).click(function(event) {
        if(!jQuery(event.target).closest('.nav').length) {
          menuWrapper.removeClass('opened')
          btn.removeClass('opened')
          body.removeClass('menu--open')
        }
      });
    })

    if (windW < 1020) {
      menuWrapper.removeClass('opened')
      btn.removeClass('opened')
    }
  }

  function smoothScroll() {
    jQuery('a[href*=\\#]:not([href=\\#])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = jQuery(this.hash);
       target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         jQuery('html,body').animate({
           scrollTop: target.offset().top - 80
         }, 1000);
         return false;
       }
     }
   });
 }

 function highlight_current_menu_item() {
  jQuery('.nav ul a').on('click', function(e) {
    e.preventDefault();
    jQuery('li.current-menu-item').removeClass('current-menu-item');
    jQuery(this).parent('li').addClass('current-menu-item');
  });

  var navLink = jQuery('.nav ul a');
  var aArray = [];

  for(var i = 0; i < navLink.length; i++) {
    var aChild = navLink[i];
    var navArray = jQuery(aChild).attr('href');
    aArray.push(navArray);
    var selector = aArray.join(" , ");
  }

  jQuery(window).scroll(function() {
    var scrollTop = jQuery(window).scrollTop();
    var tops = [];

    jQuery(selector).each(function() {
      var top = jQuery(this).position().top -90;
      if(scrollTop > top) {
        var id = jQuery(this).attr('id');
        jQuery('.current-menu-item').removeClass('current-menu-item');
        jQuery('a[href="#'+id+'"]').parent().addClass('current-menu-item');
      }
      tops.push(top);
    });
  });
  }
})
