$(document).ready(() => {

  $('.dropbtn').click(() => {
    if ($('.menu').hasClass('hide')) {
      $('.menu').slideDown();
    } else { 
      $('.menu').slideUp();
    }
    $('.menu').toggleClass('hide');
  });
});