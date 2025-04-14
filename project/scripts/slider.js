const image = [
    { src: "image/slider1.jpg", alt: "Northern forest in Iran" },
    { src: "image/slider2.jpg", alt: "Kish Island sunset" },
    { src: "image/slider3.jpg", alt: "Historical mosque in Isfahan" }
  ];
  
  let index = 0;
  const sliderImg = document.getElementById("slider-img");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  
  function updateSlider() {
    const { src, alt } = image[index];
    sliderImg.src = src;
    sliderImg.alt = alt;
  }
  
  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % image.length;
    updateSlider();
  });
  
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % image.length;
    updateSlider();
  });
  
  setInterval(() => {
    index = (index + 1) % image.length;
    updateSlider();
  }, 5000);
  
  updateSlider();
  