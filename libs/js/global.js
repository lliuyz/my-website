/*
 * @Author: summer
 * @LastEditTime: 2020-11-29 16:40:55
 */
// JavaScript Document

$(document).ready(function (e) {
  // 移动端头部
  var key = true;
  var onindex = -1;
  $('.menu-icon').click(function () {
    if (key) {
      $('.menu-item-drop').fadeOut();
      $('.menu-bg').fadeIn();
      var mov = window.setTimeout(function () {
        $('.menu-list').animate({
          left: 0
        });
      });
      $('body').css({ overflow: 'hidden' });
      key = !key;
      $('.menu-bg').css({ background: 'rgba(0,0,0,0.2)', left: '0' });
    } else {
      $('.menu-list').animate({
        left: '-50%'
      });
      var mov = window.setTimeout(function () {
        $('.menu-bg').fadeOut();
      });
      $('body').css({ overflow: 'auto' });
      key = !key;
      $('.menu-bg').css({ background: 'rgba(0,0,0,0)' });
    }
  });
  $('.yijijiantou2').click(function () {
    $('.menu-item-drop').fadeOut();
    $(this).parents('.menu-item').find('.menu-item-drop').fadeIn();
  });

  $('.nav-item').hover(
    function () {
      $(this).find('.nav-drop-list').slideDown();
    },
    function () {
      $(this).find('.nav-drop-list').slideUp();
    }
  );

  $('.footer-lang').hover(
    function () {
      $(this).find('.footer-lang-drop').slideDown();
    },
    function () {
      $(this).find('.footer-lang-drop').slideUp();
    }
  );
  // $('.footer-lang').click(function () {
  //   $(this).find('.footer-lang-drop').slideDown();
  // });
  let jobIndex = -1;
  $('.job-item').click(function () {
    onIndex = $(this).index();
    $('.job-item-drop').slideUp();
    if (onIndex != jobIndex) {
      $(this).find('.job-item-drop').slideDown();
      $('.job-item').removeClass('on');
      $('.job-item').eq(onIndex).addClass('on');

      jobIndex = onIndex;
    } else {
      jobIndex = -1;
      $('.job-item').removeClass('on');
    }
    // $(this).find('.job-item-drop').slideDown();
  });

  // 导航栏
  $('.nav-item').hover(
    function () {
      $(this).find('.nav-item-drop').show();
      $(this).parents('.header2').addClass('on');
      // $(this).parents('.header2').css({ background: '#fff', color: '#333' });
    },
    function () {
      $(this).find('.nav-item-drop').hide();
      $(this).parents('.header2').removeClass('on');
    }
  );
  $('.service-crumbs-item').hover(
    function () {
      activeIndex = $(this).index();
      let left = activeIndex * 0.2;
      left = (left * 100).toFixed(0) + '%';
      $('.service-crumbs-img').css({ left: left });
    },
    function () {}
  );

  $('.business-nav-item').click(function () {
    let tabIndex = $(this).index();
    $('.business-nav-item').removeClass('on');
    $('.business-tab-item').removeClass('on');
    $(this).addClass('on');
    $('.business-tab-item').eq(tabIndex).addClass('on');
  });

});
