var sticky = $('.cta-main').offset().top;
$(window).scroll(function(){    
    if ($(this).scrollTop() > sticky){ 
        $('.cta1').addClass('fixed');
    }
    else{
        $('.cta1').removeClass('fixed');
    }
});

var removesticky = $('.steps').offset().top;
$(window).scroll(function(){    
    if ($(this).scrollTop() + 200 > removesticky){ 
        $('.cta1').removeClass('fixed');
    }
});