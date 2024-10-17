AOS.init();
function openInvitation(){
    const cover = document.querySelector("#cover");
    const cover2 = document.querySelector("#cover2");
    cover.style.opacity = "0";
    
    setTimeout(() => {
        cover.style.display = "none";
        cover2.style.display = "block";
        setTimeout(() => {
            cover2.style.opacity = "1";
        }, 50);
        cover2.classList.add("active");
        AOS.refresh();
    }, 1500);
    document.getElementById("sound").innerHTML = "<audio autoplay loop preload='none' src='./audio/GoldenHour.mp3'></audio>";
}

/gallery/
document.addEventListener('DOMContentLoaded', () => {
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel img');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentIndex = 0;
  const totalImages = images.length;
  function updateCarousel() {
      const width = images[0].clientWidth;
      carouselImages.style.transform = translateX(-$,currentIndex * width,px);
  }
  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
  });
  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
  });
  setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
  }, 5000);
  window.addEventListener('resize', updateCarousel);
});

/audio/
function putarMusik(){
    const musik = document.querySelector('#musik');
    const imgmusik = document.querySelector('#imgmusik');

    if(musik.paused){
      musik.play();
      imgmusik.src = "Assets/img/mute2.png";
    } else {
      musik.pause();
      imgmusik.src = "Assets/img/unmute2.png";
    }
  }
