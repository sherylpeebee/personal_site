$(function () {
  $('.curtains').curtain({
      scrollSpeed: 400,
      controls: '.menu',
      nextSlide: function() { console.log('next slide'); },
      prevSlide: function() { console.log('previous slide'); }
  });

  $pages = $('.curtain-page');

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    // tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
    // image: {
    //   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    //   titleSrc: function(item) {
    //     return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
    //   }
    // }
  });

list = $('.selfies');

function faces(){
var i = 0;
  setInterval(function() {
    i++ ;
      $(list[i]).show();
      if (i >= list.length){
        i = 0;
        console.log("done");
        $('.selfies').hide();
      }
  }, 800);

}
  faces();

  $('.intro')
  .typetype('Hi! I\'m Sheryl!');

  setTimeout(function(){
    $('.like').fadeIn(2000);
  }, 4000);


  setTimeout(function(){
    $('.make')
    .typetype('make things pretty!')//try to separate the adjectives into own elements for own styling
    .delay(1000)
    .backspace(20)
    .typetype('make things smart.')
    .delay(1000)
    .backspace(18)
    .typetype('make things work.')
    .delay(1000)
    .backspace(30)
    .typetype('make.allTheThings( )');
    // .fadeOut(); // regular jQuery effects queue up nicely
  }, 7000);

$('li.nav_to_page.tab-li ').on('click', function(){
  if($('.side-nav').hasClass('inactive')){
    $('.side-nav').removeClass('inactive').addClass('active');
  }
  else if($('.side-nav').hasClass('active')){
    $('.side-nav').removeClass('active').addClass('inactive');
  }
});




  $('img.projects:not(.project_hero)').on('click', function(){
    var newSrc = $(this).attr('src');
    var oldSrc = $('img.project_hero').attr('src');
    $('img.project_hero').attr('src', newSrc);
    $(this).attr('src', oldSrc);
  });



});
