$(document).ready(function () {
    
  //==============================
  // smooth scroll
  //==============================
  $("#site-nav .navbar-nav li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000);

  });


  //==============================
  //on-scroll
  //==============================
  $(window).on('scroll', function () {
    var wscroll = $(this).scrollTop();
    //fixed-nav
    wscroll > 1 ? $(".navbar").addClass("fixed") : $(".navbar").removeClass("fixed");

    // go top appear
    wscroll > 700 ? $("#goTop").fadeIn() : $("#goTop").fadeOut();

  });

  //go top
  $("#goTop").click(function () {
    $("body, html").animate({
      scrollTop: 0
    }, 600);
  });


    //===================
    // Logo Slide
    //===================
    $('#logo-slide').owlCarousel({
        nav:false,
        dots:false,
        margin:40,
        loop:true,
        autoplay: true,
        responsive:{
            0:{items:1},
            576: {items:20},
            768: {items:4},
            992: {items:6}
        }
    });

    // qoute slide
    $('#qoute-slide').owlCarousel({
        items: 1,
        autoplay:true,
        dots: false,
        nav:true,
        loop:true,
        navText: ["<i class='fa fa-arrow-left'>", "<i class='fa fa-arrow-right'>"]

    });
});