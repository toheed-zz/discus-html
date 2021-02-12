var sticky = $('.cta-main').offset().top;
$(window).scroll(function(){    
    if ($(this).scrollTop() > sticky){ 
        $('.cta1').addClass('fixed');
    }
    else{
        $('.cta1').removeClass('fixed');
    }
});

var removesticky = $('.steps-area').offset().top;
$(window).scroll(function(){    
    if ($(this).scrollTop() > removesticky){ 
        $('.cta1').removeClass('fixed');
    }
});