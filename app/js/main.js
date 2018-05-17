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

});

const left_slide = $('.fa-angle-left');
const right_slide = $('.fa-angle-right');
const slide_body = $('.inner_slider img');
let lefted = 0;
left_slide.click(function () {
    if(lefted >= 652)
    {
        lefted = 0;
        slide_body.css('right', lefted + 'px');
    }else
    {
        lefted += 163;
    slide_body.css('right', lefted + 'px');
    }    
});

right_slide.click(function () {
    if(lefted <= -652)
    {
        lefted = 0;
        slide_body.css('right', lefted + 'px');
    }else
    {
        lefted -= 163;
    slide_body.css('right', lefted + 'px');
    }
});