var animateCss = require('animate.css-js');
var postThumbs = document.querySelectorAll('.post-thumb');

module.exports = console.log(postThumbs);


// function postJello() {
//   var randNum = Math.round(Math.random() * $('.post-thumb')
//     .length)
//   $('.post-thumb')
//     .eq(randNum)
//     .addClass('is-emph')
//     .siblings()
//     .removeClass('is-emph');
// }
// function startPosts(){
//   var wScroll = $(window).scrollTop();
//
//   if($('section.blog').offset().top - $(window).height()/1.2 < wScroll) {
//     $('.post-thumb').each(function(i){
//       setTimeout(function(){
//         $('.post-thumb').eq(i).addClass('is-visible');
//       }, 200 * i);
//     });
//   }
// }
//
// $(window).scroll(function () {
//   startPosts();
// });
//
// $(function() {
//   setInterval(function() {
//     postJello()
//   }, 4000);
// });
