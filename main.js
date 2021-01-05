new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 4,
  autoplay:2000
}).mount()

function myFunction(x) {
  if (x.matches) { // If media query matches
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      
      autoplay:2000
    }).mount()
  } else {
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 4,
      autoplay:2000
    }).mount()
  }
}

var x = window.matchMedia("(max-width: 400px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)