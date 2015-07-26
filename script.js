$(function () {
  $('.curtains').curtain({
      scrollSpeed: 400,
      controls: '.menu',
      nextSlide: function() { console.log('next slide'); },
      prevSlide: function() { console.log('previous slide'); }
  });

  $('.like').fadeIn(2000);

  setTimeout(function(){
    $('.list')
    .typetype('make things pretty!')
    .delay(1000)
    .backspace(20)
    .typetype('make things smart.')
    .delay(1000)
    .backspace(18)
    .typetype('make things work.')
    .delay(1000)
    .backspace(30)
    .typetype('make things! ^_^ ');
    // .fadeOut(); // regular jQuery effects queue up nicely
  }, 2000);


});
