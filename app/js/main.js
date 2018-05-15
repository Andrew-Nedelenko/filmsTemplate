'use strict';
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
        hide_nav.css('left', '-301px');
        bool = true;
    }
});


const scrolled_nav = $('.scroll_nav_bar');
$(window).on('scroll', function () {
    if($(window).scrollTop() >= 70)
    {
        scrolled_nav.css('top', '0');
    }
    else
    {
        scrolled_nav.css('top', '-80px');
    }

});

const search_icon = $('.fa-search');
const search_input = $('.nav_bar input');
let bool_search = true;
search_icon.click(function () {
    if(bool_search)
    {
        search_input.css('top', '26px');
        bool_search = false;
    }else
    {
        search_input.css('top', '-50px');
        bool_search = true;
    }

})

