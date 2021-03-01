$(function(){
  // Trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('section, .menu a').click(function(){
    $('.gnb').removeClass('active')
    $('.trigger').removeClass('active')
})
// Smooth Scrolling
  $('.menu a').click(function(e){
    $.scrollTo(this.hash || 0, 700)

  })
})
