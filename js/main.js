 let sectionOffset =$('#about').offset().top;

 $(window).scroll(function(){
  let windowScroll = $(window).scrollTop();
    if (windowScroll > sectionOffset - 300 ) {
      $(".navbar").css('backgroundColor' , '#e82574');
      $('.btnUp').fadeIn(500);
     
    }else{
      $(".navbar").css('backgroundColor' , 'transparent');
      $('.btnUp').fadeOut(500);
    }
 }) 

$('.btnUp').click( function () {
    $('html , body').animate({scrollTop:0} , 3000)
})



$(window).on("load", function() {
    /*-------------------------- Preloader ----------*/
    $(".loader").fadeOut(1000 , function () {
      $(".loader").remove();
    });
    
});



const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  ScrollReveal().reveal(".home p", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".home h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".about .image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  
  ScrollReveal().reveal(".about .header-p", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".about .header-h", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".about .description", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".about .btn", {
    ...scrollRevealOption,
    delay: 2000,
  });

  ScrollReveal().reveal(".room .card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // service container
  ScrollReveal().reveal(".services-list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "left",
  });
  ScrollReveal().reveal(".banner .col-md-4", {
    ...scrollRevealOption,
    interval: 500,
    origin: "left",
  });
  ScrollReveal().reveal(".explore .card", {
    ...scrollRevealOption,
    interval: 500,
    origin: "left",
  });
  ScrollReveal().reveal(".explore .card p", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".explore .card h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".explore .card button", {
    ...scrollRevealOption,
    delay: 500,
  });