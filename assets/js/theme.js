$(function(){

  	/*==== Mobile Menu  ====*/
    $('.mobile-menu nav').meanmenu({
      meanScreenWidth: "991",
      meanMenuContainer: ".mobile-menu",
      onePage: true,
    });
    
    /*==== Top quearys menu  ====*/
    var emsmenu = $(".em-quearys-menu i.t-quearys");
    var emscmenu = $(".em-quearys-menu i.t-close");
    var emsinner = $(".em-quearys-inner");
    emsmenu.on('click', function() {
      emsinner.addClass('em-s-open');
      $(this).addClass('em-s-hiddens');
      emscmenu.removeClass('em-s-hidden');
    });
    emscmenu.on('click', function() {
      emsinner.removeClass('em-s-open');
      $(this).addClass('em-s-hidden');
      emsmenu.removeClass('em-s-hidden');
    });
  
    /*==== popup mobile menu  ====*/
    
    var mrightma = $(".mobile_menu_o i.openclass");
    var mrightmi = $(".mobile_menu_o i.closeclass");
    var mrightmir = $(".mobile_menu_inner");
    var mobile_ov = $(".mobile_overlay");
    mrightma.on('click', function() {
      mrightmir.addClass('tx-s-open');
      mobile_ov.addClass('mactive');
    });
    mrightmi.on('click', function() {
      mrightmir.removeClass('tx-s-open');
      mobile_ov.removeClass('mactive');
    });
    
    /*=============== sticky menu ================= */
    var header = $('.main_menu_area');
    $(window).on('scroll',function(){
        if($(window).scrollTop()>50){
            $('.main_menu_area').addClass('sticky');
        }
        else{
            header.removeClass('sticky');
        }
    });

    /*============= main nav icons popup  ===========*/
    $('.main_nav_icons i').click(function(){
      $('.nav_icon_popup').addClass('icon_popup');
    });
    $('.inner_nav_icon_popup i').click(function(){
      $('.nav_icon_popup').removeClass('icon_popup');
    });

    $('.main_nav_icon_right i').click(function(){
      $('.main_nav_icon_right_popup').addClass('site_popup');
    });
  
    $('.m_nav_rpi_close i').click(function(){
      $('.main_nav_icon_right_popup').removeClass('site_popup');
    });

     /* faq active js */
     $('.inner_faq_ac_item a').click(function(){
      $('.inner_faq_ac_item a').removeClass('active');
      $(this).addClass('active');
      });

      /* ==== wow js ==== */
      new WOW().init();

    /*========== slider active js =============*/
    $('.slider_active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        fade: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          },
        ]
      });

      /*============== counter js ============== */
      $('.counter').counterUp({
        delay: 30,
        time: 4000
      });
      
      /*================ img active js =============*/
      $('.img_active').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          },
        ]
      });

      /*================ testimonial active js =============*/
      $('.test_active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: true, // Enable arrows
        dots: false,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>', // Left arrow
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>', // Right arrow
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
            }
          },
        ]
      });
            
      /*================ brand active js =============*/
      $('.brand_active').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            }
          },
        ]
      });

      /* ========== veno box js ========= */
      new VenoBox({
        selector: '.my-image-links',
        spinner: 'rotating-plane'
      });
      new VenoBox({
        selector: '.my-video-links',
      });

      /* faq active js */
      $('.inner_ac_items a').click(function(){
        $('.inner_ac_items a').removeClass('active');
        $(this).addClass('active');
      });
      
      /*==== scrollUp  ====*/
			$.scrollUp({
				scrollText: '<i class="icofont-thin-up"></i>',
				easingType: 'linear',
				scrollSpeed: 900,
				animation: 'fade'
			});
  });