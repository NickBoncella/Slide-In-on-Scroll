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
    // window height at bottom of window
    const slideInAt = (window.scrollY + window.innerHeight);
    // window has scrolled into img 
    const isShown = slideInAt > image.offsetTop;
    if (isShown) {
      image.classList.add('active');
    }
  });
}

window.addEventListener('scroll', debounce(slideImages));
