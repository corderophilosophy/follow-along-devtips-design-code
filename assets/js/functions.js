$(function() {
  mobileNav();
  setInterval(function() {
    postJello()
  }, 4000);
});

function postJello() {
  var randNum = Math.round(Math.random() * $('.post-thumb')
    .length)
  $('.post-thumb')
    .eq(randNum)
    .addClass('is-emph')
    .siblings()
    .removeClass('is-emph');
}

$(window).scroll(function () {
  startPosts();
});


function startPosts(){
  var wScroll = $(window).scrollTop();

  if($('section.blog').offset().top - $(window).height()/1.2 < wScroll) {
    $('.post-thumb').each(function(i){
      setTimeout(function(){
        $('.post-thumb').eq(i).addClass('is-visible');
      }, 200 * i);
    });
  }
}


function mobileNav() {
  $('.mobile-nav-toggle')
    .on('click', function() {
      var status = $(this)
        .hasClass('is-open');
      if (status) {
        $('.mobile-nav-toggle, .mobile-nav')
          .removeClass('is-open');
      } else {
        $('.mobile-nav-toggle, .mobile-nav')
          .addClass('is-open');
      }
    });
}
