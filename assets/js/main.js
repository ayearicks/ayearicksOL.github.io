$(document).ready(function() {

  function intoView(target) {
    let topView = $(window).scrollTop();
    let bottomView = topView + $(window).height();
    let targetTop = $(target).offset().top;
    let targetBottom = targetTop + $(target).height();

    return ((targetBottom <= bottomView) && (targetTop >= topView));
  }

  $(window).scroll(function() {
    $('.animate__animated').each(function() {
      if(intoView(this) === true) {
        $(this).addClass('animate__fadeInUp');
      }
    });
  });

});