// Variables
const sliderImages = document.querySelectorAll('.slide-in');

// Generic debounce
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {

  // Run logic on all images
  sliderImages.forEach(sliderImage => {
    // Halfway through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // Bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    // Determine if the image should scrolled in or out
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrollPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrollPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });

}

// Event listener
window.addEventListener('scroll', debounce(checkSlide, 10));