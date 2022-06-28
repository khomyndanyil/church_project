document.addEventListener('DOMContentLoaded', () => {
    
  const modalInf = document.querySelector('.video-show'),
        modalClose = document.querySelector('.video-sidepanel__close'),
        modal = document.querySelector('.modal'),
        sidepanel = document.querySelector('.video-sidepanel');
  if(modalInf){
      modalInf.addEventListener('click', () => {
          sidepanel.classList.add('video-sidepanel_active');
          modal.classList.add('modal_active');
          // modal.style= 'display : block;';
          
      });
  }
  if(modalClose){
      modalClose.addEventListener('click', () => {
          sidepanel.classList.remove('video-sidepanel_active');
          modal.classList.remove('modal_active');    
      });
  }

  if(modal){
      modal.addEventListener('click', () => {
          sidepanel.classList.remove('video-sidepanel_active');
          modal.classList.remove('modal_active');    
      });
  }

  $('.about-us__block_slider').slick({
      infinite: true,
      prevArrow :'<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"/></svg></button>',
      slidesToShow: 3,
      autoplay: true ,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            }
          }
          
        ]
    });
    $('.news-slider').slick({
      infinite: true,
      prevArrow :'<button type="button" class="slick-prev_news "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next_news "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"/></svg></button>',
      slidesToShow: 3,
      autoplay: false ,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 910,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    // slider-about-us

    $('.about-us_news-slider').slick({
      infinite: true,
      prevArrow :'<button type="button" class="slick-prev_about-us"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next_about-us"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"/></svg></button>',
      slidesToShow: 3,
      autoplay: true ,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 910,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    // fade nav
  $(window).scroll(function() {
      if($(this).scrollTop() > 87) {
          $('.header_fadeIn').fadeIn();
      } else{
          $('.header_fadeIn').fadeOut();
      }
      if($(this).scrollTop() > 87) {
          $('.pageup').fadeIn();
      } else{
          $('.pageup').fadeOut();
      }
  });
  //slider school

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 3000,
      },
  });


  // modal search
  const search = document.querySelectorAll('.navbar-block__other_search'),
        searchModal = document.querySelector('.modal-search'),
        closeSearchModal = document.querySelector('.modal-search_close');

  // search.addEventListener('click', () => {
  //     searchModal.classList.add('modal-search_active');
  // });

    search.forEach(i => {
      i.addEventListener('click', () => {
        searchModal.classList.add('modal-search_active');
        document.body.style.overflow = 'hidden';
      });
    });
  
    closeSearchModal.addEventListener('click', () => {
      searchModal.classList.remove('modal-search_active');
      document.body.style.overflow = '';
    });
  
  searchModal.addEventListener('click', (e) => {
    if(e.target === searchModal){
      searchModal.classList.remove('modal-search_active');
      document.body.style.overflow = '';
    }
  });
  

  // menu
  const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu-block'),
        menuOverlay = document.querySelector('.menu-overlay'),
        hamburgerWhite = document.querySelector('.hamburger_white');

  if(hamburger){
      hamburger.addEventListener('click', () => {
        menu.classList.add('menu-block_active');
        menuOverlay.classList.add('menu-overlay_active');
        // document.body.style.overflow = 'hidden';
    });
  }
  if(menuOverlay){
    menuOverlay.addEventListener('click', () => {
      menuOverlay.classList.remove('menu-overlay_active');
      menu.classList.remove('menu-block_active');
      // document.body.style.overflow = '';
  });
  }
  if(hamburgerWhite){
    hamburgerWhite.addEventListener('click', () => {
      menu.classList.add('menu-block_active');
      menuOverlay.classList.add('menu-overlay_active');
  });
  }
  
  const fadeParent = document.querySelector('.menu-link'),
        fadeChild = document.querySelector('.sub-menu-list');

    fadeParent.addEventListener('click', () => {
      fadeChild.style.dispay = 'flex';
    });
    fadeParent.addEventListener('click', () => {
      fadeChild.style.dispay = 'none';
    });


    const menuFadeParent = document.querySelectorAll('.menu_link'),
          subSubMenu = document.querySelectorAll('.add-menu'),
          subSubMenuLi = document.querySelectorAll('.sub-sub_menu_list');

    for(let i = 0; i<menuFadeParent.length; i++){
      let subMenu= menuFadeParent[i].nextElementSibling;
      menuFadeParent[i].addEventListener('click', () => {
        if(subMenu.style.display == 'block'){
          subMenu.style.display = 'none';
          
        } else{
          subMenu.style.display = 'block';
          
        }
        
      });
      

    }
    
    for(let i = 0; i<subSubMenu.length; i++){
      let subSubMenuLink= subSubMenuLi[i];
      subSubMenu[i].addEventListener('click', () => {
        if(subSubMenuLink.style.display == 'block'){
          subSubMenuLink.style.display = 'none';
          
        } else{
          subSubMenuLink.style.display = 'block';
          
        }
        
      });
      

    }
    
    new WOW().init();

    

  
  
});

