const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);


$(document).ready(function(){
  $('.demo').viewportChecker({
  // Class to add to the elements when they are visible
  classToAdd: 'progressMoved',
  
  // The offset of the elements (let them appear earlier or later)
  offset: 100,
  
  // Add the possibility to remove the class if the elements are not visible
  repeat: false,
  
   // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
  callbackFunction: function(elem, action){}
  });
  });