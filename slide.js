/*** DEBOUNCE FUNCTION - prevent function from constantly firing ***/
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
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

/*** DOM query to select slide imgs ***/
const images = document.querySelectorAll('.slide-in');

/*** SLIDE IMAGES FUNCTION ***/
function slideImages(e) {
  images.forEach(image => {
    // scroll through the img
    const slideInAt = (window.scrollY + window.innerHeight) - (image.height / 4);
    // bottom of the img
    const imageBottom = image.offsetTop + image.height;
    const isShown = slideInAt > image.offsetTop;
    if (isShown) {
      image.classList.add('active');
    }
  });
}

window.addEventListener('scroll', debounce(slideImages));
