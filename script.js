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
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
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

  $('.intro').typetype('Hi! I\'m Sheryl!');

  setTimeout(function(){
    $('.like').fadeIn(2000);
  }, 4000);

  setTimeout(function(){
    $('.make')
    .typetype('make things pretty!')
    .delay(1000)
    .backspace(20)
    .typetype('make things smart.')
    .delay(1000)
    .backspace(18)
    .typetype('make things work.')
    .delay(1000)
    .backspace(30)
    .typetype('make.allTheThings( )');
  }, 7000);

  $('li.nav_to_page.tab-li ').on('click', function(){
    if($('.side-nav').hasClass('inactive')){
      $('.side-nav').removeClass('inactive').addClass('active');
    }
    else if($('.side-nav').hasClass('active')){
      $('.side-nav').removeClass('active').addClass('inactive');
    }
  });

  var projects =
  [
    {
      title: 'the history of us',
      tech_icon: '/assets/tech_icons/mean_icon.jpg',
      views: [
        {img: '/assets/projects/history_splash.png', summary: 'some stuff happened some stuff happened some stuff happened some stuff happened some stuff happened some stuff happened'},
        {img: '/assets/projects/history_blank.png', summary: 'fbjsdb hfsjv cd fsdji a hnkg '},
        {img: '/assets/projects/history_storyForm.png', summary: '0000000 fdsxfd dwhs fsdn fharuhgdj'}
      ],
      link: 'https://the-history-of-us.herokuapp.com/#/'
    }
  ];

  $('img.projects:not(.project_hero)').on('click', function(e){
    e.stopPropagation();

    var $currentProjectTitle = $(this).parent().parent()
    .children('#project-title').text().toLowerCase().trim();
    console.log($currentProjectTitle);
    var currentProject;
    projects.forEach(function(project){
      if(project.title === $currentProjectTitle){
        currentProject = project;
      }
    });
    console.log(currentProject);

    var $currentHero = $(this).parent().parent().children('.project_hero');
    var newSrc = $(this).attr('src');
    var oldSrc = $($currentHero).attr('src');
    $($currentHero).attr('src', newSrc);
    $(this).attr('src', oldSrc);
    var $currentView = $(this).parent().parent().children('img.project_hero').attr('src');
    console.log($currentView);
    var summary;
    currentProject.views.forEach(function(view){
      if(view.img === $currentView){
        summary = view.summary;
      }
    });
    $(this).parent().parent().children('.summary').text(summary);
  });

  var project_pages = $('.project_page');
  var totalPages = project_pages.length;
  var counter = totalPages-1;
  var project_page_width = $('.project_page').width();

  $('.project_page').click(function(e){
    console.log(counter);
    e.stopPropagation();
    if(counter === 0){
      $('.project_page').css('transform', '');
      counter = totalPages;
    }
    else{
      $(project_pages[counter]).css('transform', 'translate(-'+ project_page_width + 'px)');
    }
    counter --;
  });

  $('.btn').click(function(e){
    e.stopPropagation();
    alert('works');
  });


});
