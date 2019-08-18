const xs = 0
const sm = 576
const md = 768
const lg = 992
const xl = 1367

/* $sm:576px;
$md:768px;
$lg:992px;
$elg:1200px; */

// navbar effect
$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 30) {
      $('.navbar').addClass('scrolled')
    } else {
      $('.navbar').removeClass('scrolled')
    }
  })
})

// animation add class effect
$(window).bind('DOMContentLoaded load resize', function() {
  // pengecekan ukuran width window, bila widthnya lebih kecil atau lebih besar
  if ($(window).innerWidth() <= md && $(window).innerWidth() >= xl) {
    $('#garis').removeClass('line')
  } else {
    $('#garis').addClass('line')
  }
})

$(window).bind('DOMContentLoaded load resize', function() {
  // pengecekan ukuran width window, bila widthnya lebih kecil atau lebih besar
  if ($(window).innerWidth() <= lg) {
    // Kita remove class navbar-fixed
    $('#garis_keterangan').addClass('line_keterangan')

  } else {
    // diluar dari kondisi diatas kita akan add class navbar-fixed
    $('#garis_keterangan').removeClass('line_keterangan')
  }
})

$(window).bind('DOMContentLoaded load resize', function() {
  // pengecekan ukuran width window, bila widthnya lebih kecil atau lebih besar
  if ($(window).innerWidth() <= sm) {
    // Kita remove class navbar-fixed
    $('#contener').addClass('container')

  } else {
    // diluar dari kondisi diatas kita akan add class navbar-fixed
    $('#contener').removeClass('container')
  }
})

$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 30) {
      $('.line').animate({
        height: 'hide'
      })
    } else {
      $('.line').animate({
        height: 'show'
      })
    }
  })
})

// carousel
$(document).ready(function() {
  const iniSlider = function() {
    return $('#productSlider .active').index('#productSlider .carousel-item')
  }
  const slider = function(IndexNumber) {
    $('.slider .image')
      .removeClass('active')
      .eq(IndexNumber)
      .addClass('active')
  }
  // inisialisasi
  slider(iniSlider())
  $('#productSlider').on('slid.bs.carousel', function() {
    slider(iniSlider())
  })
})

// humberger menu
$(document).ready(function() {
  $('#nav-icon3').click(function() {
    $(this).toggleClass('open')
  })
})

// search
/*
function buka() {
  const x = document.getElementById('myNav')
  if (x.style.height === '0%') {
    x.style.height = '10%'
  } else {
    x.style.height = '0%'
  }
}*/

function openNav() {
  document.getElementById("myNav").style.height = "10%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


// owl carousel
const owl = $('.owl-carousel')

owl.owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  margin: 30,

  dots: true,
  center: true,

  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      margin: 10,
      stagePadding: 10
    },
    576: {
      items: 2,
      margin: 170,
      stagePadding: 50
    },
    768: {
      items: 3,
      margin: 300,
      stagePadding: 50
    },
    992: {
      items: 3,
      margin: -70
    },
    1180: {
      items: 4,
      margin: 70
    },
    1367: {
      items: 4,
      margin: 150,
      stagePadding: 50
    }
  }
})



// navs for new articles
$(function() {
  $('#terbaru li .dropdown-menu ').click(function() {
    $(this).tab('show')
  })
})

//scroll to top
// ===== Scroll to Top ==== 
// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(500); // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(500); // Else fade out the arrow
  }
});
$('#return-to-top').click(function() { // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0 // Scroll to top of body
  }, 500);
});

//search

/* $sm:576px;
$md:768px;
$lg:992px;
$elg:1200px; */