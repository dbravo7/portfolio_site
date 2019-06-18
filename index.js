"use strict";

$(document).ready(() => {
 
  $('.dropbtn').click(() => {
    if ($('.menu').hasClass('hide')) {
      $('.menu').slideDown();
    } else { 
      $('.menu').slideUp();
    }
    $('.menu').toggleClass('hide');
  });

  $('.main_header').click(() => {
    if (!($('.menu').hasClass('hide'))) {
      $('.menu').slideUp();
      $('.menu').toggleClass('hide');
    }
  });

  $('.nav').click(function (event) {
    if (!($('.menu').hasClass('hide')) &&
      !(this.is('.dropbtn')) &&
        !(this.is('.menu'))) {
          $('.menu').slideUp();
          $('.menu').toggleClass('hide');
        }
  });
});