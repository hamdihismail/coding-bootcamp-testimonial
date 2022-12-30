const slide1 = document.querySelector('.testimonial-1');
const slide2 = document.querySelector('.testimonial-2');
const prevBtn = document.querySelectorAll('.prev');
const nextBtn = [...document.querySelectorAll('.next')];
const slides = document.querySelectorAll('.slide');

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });
  
let counter = 0;

nextBtn.forEach((e)=>{
    e.addEventListener('click',()=>{
        console.log('next');
        counter++;        
        carousel();
    })
})
prevBtn.forEach((e)=>{
    e.addEventListener('click',()=>{
        console.log('prev');
        counter--;        
        carousel();
    })
})

function carousel() {
    // working with slides
    if (counter === slides.length) {
      counter = 0;
    }
    if (counter < 0) {
      counter = slides.length - 1;
    }
    // working with buttons
  
    // if (counter < slides.length - 1) {
    //   nextBtn.style.display = "block";
    // } else {
    //   nextBtn.style.display = "none";
    // }
    // if (counter > 0) {
    //   prevBtn.style.display = "block";
    // } else {
    //   prevBtn.style.display = "none";
    // }
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }