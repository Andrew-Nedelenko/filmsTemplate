// JQuery code
$(document).ready(function () {
    $('.parallax-window').parallax({imageSrc: '../img/main_par.jpg'});
});

const hamb = $(".fa-bars");
let bool = true;
const hide_nav = $(".hide_nav");
const nav_hover = $('.start_section');
hamb.click(function () {
    if(bool)
    {   
        nav_hover.addClass('nav_hover');
        hide_nav.css('left', '0');
        bool = false;
    }else
    {
        nav_hover.removeClass('nav_hover');
        hide_nav.css('left', '-300px');
        bool = true;
    }
});


const scrolled_nav = $('.scroll_nav_bar');


