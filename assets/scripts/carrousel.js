
  const carouselSlide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");

  // Set initial position and width for the slide container
  let slideIndex = 0;
  const slideWidth = images[0].clientWidth;

  // Function to slide the images
  function slideImages() {
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    carouselSlide.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  }

  // Function to handle automatic sliding (every 3 seconds)
  function autoSlide() {
    slideIndex = (slideIndex + 1) % images.length;
    slideImages();
  }

  // Start auto sliding
  setInterval(autoSlide, 3000);

