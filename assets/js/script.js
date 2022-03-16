var $slider = $('.slideshow .slider'),
  maxItems = $('.item', $slider).length,
  dragging = false,
  tracking,
  rightTracking;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');
$('.slideshow-left').slick({
  vertical: true,
  verticalSwiping: false,
  arrows: false,
  infinite: true,
  dots: false,
  autoplay: true,
  speed: 1000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

  if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', -1);
    $('.slideshow-text').slick('slickGoTo', maxItems);
  } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems);
    $('.slideshow-text').slick('slickGoTo', -1);
  } else {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
    $('.slideshow-text').slick('slickGoTo', nextSlide);
  }
});

$('.slideshow-right .slider').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 950,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});
$('.slideshow-text').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

/* Slide 2 */

var $slider2 = $('.slideshow2 .slider2'),
  maxItems2 = $('.item2', $slider2).length,
  dragging = false,
  tracking2,
  rightTracking2;

$sliderRight2 = $('.slideshow2').clone().addClass('slideshow-right2').appendTo($('.split-slideshow2'));

rightItems2 = $('.item2', $sliderRight2).toArray();
reverseItems2 = rightItems2.reverse();
$('.slider2', $sliderRight2).html('');
for (i = 0; i < maxItems; i++) {
  $(reverseItems2[i]).appendTo($('.slider2', $sliderRight2));
}

$slider2.addClass('slideshow-left2');
$('.slideshow-left2').slick({
  vertical: true,
  verticalSwiping: false,
  arrows: false,
  infinite: true,
  dots: false,
  autoplay: true,
  speed: 1000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

  if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
    $('.slideshow-right2 .slider2').slick('slickGoTo', -1);
    $('.slideshow-text2').slick('slickGoTo', maxItems);
  } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
    $('.slideshow-right2 .slider2').slick('slickGoTo', maxItems);
    $('.slideshow-text2').slick('slickGoTo', -1);
  } else {
    $('.slideshow-right2 .slider2').slick('slickGoTo', maxItems - 1 - nextSlide);
    $('.slideshow-text2').slick('slickGoTo', nextSlide);
  }
});

$('.slideshow-right2 .slider2').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 950,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});
$('.slideshow-text2').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

