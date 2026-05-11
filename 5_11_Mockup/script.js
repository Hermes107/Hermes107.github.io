document.addEventListener("DOMContentLoaded", () => {
  const contactLinks = document.querySelectorAll('a[href="index.html#contact-footer"]');

  contactLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sessionStorage.setItem("scrollToContact", "true");
    });
  });

  const shouldScroll = sessionStorage.getItem("scrollToContact");
  const footer = document.querySelector("#contact-footer");

  if (shouldScroll && footer) {
    sessionStorage.removeItem("scrollToContact");
    setTimeout(() => {
      footer.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".mockup-carousel");
  if (!carousel) return;

  const images = carousel.querySelectorAll(".carousel-image");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach((img) => img.classList.remove("active"));
    images[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(nextSlide, 3500);
});


document.addEventListener("DOMContentLoaded", () => {
  const slideCarousel = document.querySelector(".slide-carousel");
  if (!slideCarousel) return;

  const slides = slideCarousel.querySelectorAll(".slide-image");
  const prevBtn = slideCarousel.querySelector(".tiger-prev");
  const nextBtn = slideCarousel.querySelector(".tiger-next");
  let currentSlide = 0;

  function showTigerSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextTigerSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showTigerSlide(currentSlide);
  }

  function prevTigerSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showTigerSlide(currentSlide);
  }

  nextBtn.addEventListener("click", nextTigerSlide);
  prevBtn.addEventListener("click", prevTigerSlide);

  setInterval(nextTigerSlide, 3500);
});


document.addEventListener("DOMContentLoaded", () => {
  const codingCarousel = document.querySelector(".coding-carousel");
  if (!codingCarousel) return;

  const slides = codingCarousel.querySelectorAll(".coding-slide");
  const prevBtn = codingCarousel.querySelector(".coding-prev");
  const nextBtn = codingCarousel.querySelector(".coding-next");
  let codingIndex = 0;

  function showCodingSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextCodingSlide() {
    codingIndex = (codingIndex + 1) % slides.length;
    showCodingSlide(codingIndex);
  }

  function prevCodingSlide() {
    codingIndex = (codingIndex - 1 + slides.length) % slides.length;
    showCodingSlide(codingIndex);
  }

  nextBtn.addEventListener("click", nextCodingSlide);
  prevBtn.addEventListener("click", prevCodingSlide);

  setInterval(nextCodingSlide, 3500);
});


document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".motion-video");
  const toggle = document.querySelector(".motion-play-toggle");
  const progress = document.querySelector(".motion-video-card .progress-bar");
  const timeText = document.querySelector(".motion-video-card .video-time");

  if (!video || !toggle || !progress || !timeText) return;

  function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function updateProgress() {
    const percent = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    progress.style.width = `${percent}%`;
    timeText.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
  }

  toggle.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      toggle.innerHTML = '<span class="pause-icon">Ⅱ</span>'; toggle.setAttribute("aria-label", "Pause video");
    } else {
      video.pause();
      toggle.innerHTML = '<span class="play-icon">▶</span>'; toggle.setAttribute("aria-label", "Play video");
    }
  });

  video.addEventListener("timeupdate", updateProgress);
  video.addEventListener("loadedmetadata", updateProgress);
});


document.addEventListener("DOMContentLoaded", () => {
  const tbdCarousel = document.querySelector(".tbd-carousel");
  if (!tbdCarousel) return;

  const slides = tbdCarousel.querySelectorAll(".tbd-slide");
  const prevBtn = tbdCarousel.querySelector(".tbd-prev");
  const nextBtn = tbdCarousel.querySelector(".tbd-next");
  let tbdIndex = 0;

  function showTbdSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextTbdSlide() {
    tbdIndex = (tbdIndex + 1) % slides.length;
    showTbdSlide(tbdIndex);
  }

  function prevTbdSlide() {
    tbdIndex = (tbdIndex - 1 + slides.length) % slides.length;
    showTbdSlide(tbdIndex);
  }

  nextBtn.addEventListener("click", nextTbdSlide);
  prevBtn.addEventListener("click", prevTbdSlide);

  setInterval(nextTbdSlide, 3500);
});


document.addEventListener("DOMContentLoaded", () => {
  const artCarousel = document.querySelector(".art-carousel");
  if (artCarousel) {
    const slides = artCarousel.querySelectorAll(".art-slide");
    const prevBtn = artCarousel.querySelector(".art-prev");
    const nextBtn = artCarousel.querySelector(".art-next");
    let artIndex = 0;

    function showArtSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[index].classList.add("active");
    }

    function nextArtSlide() {
      artIndex = (artIndex + 1) % slides.length;
      showArtSlide(artIndex);
    }

    function prevArtSlide() {
      artIndex = (artIndex - 1 + slides.length) % slides.length;
      showArtSlide(artIndex);
    }

    nextBtn.addEventListener("click", nextArtSlide);
    prevBtn.addEventListener("click", prevArtSlide);
    setInterval(nextArtSlide, 3500);
  }

  const borderCarousel = document.querySelector(".borderlands-carousel");
  if (borderCarousel) {
    const slides = borderCarousel.querySelectorAll(".border-slide");
    const prevBtn = borderCarousel.querySelector(".border-prev");
    const nextBtn = borderCarousel.querySelector(".border-next");
    let borderIndex = 0;

    function showBorderSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[index].classList.add("active");
    }

    function nextBorderSlide() {
      borderIndex = (borderIndex + 1) % slides.length;
      showBorderSlide(borderIndex);
    }

    function prevBorderSlide() {
      borderIndex = (borderIndex - 1 + slides.length) % slides.length;
      showBorderSlide(borderIndex);
    }

    nextBtn.addEventListener("click", nextBorderSlide);
    prevBtn.addEventListener("click", prevBorderSlide);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".other-video");
  const toggle = document.querySelector(".other-play-toggle");
  const progress = document.querySelector(".other-progress-bar");
  const timeText = document.querySelector(".other-video-time");

  if (!video || !toggle || !progress || !timeText) return;

  function formatOtherTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function updateOtherProgress() {
    const percent = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    progress.style.width = `${percent}%`;
    timeText.textContent = `${formatOtherTime(video.currentTime)} / ${formatOtherTime(video.duration)}`;
  }

  toggle.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      toggle.innerHTML = '<span class="pause-icon">Ⅱ</span>'; toggle.setAttribute("aria-label", "Pause video");
    } else {
      video.pause();
      toggle.innerHTML = '<span class="play-icon">▶</span>'; toggle.setAttribute("aria-label", "Play video");
    }
  });

  video.addEventListener("timeupdate", updateOtherProgress);
  video.addEventListener("loadedmetadata", updateOtherProgress);
});


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".slide-carousel");
  if (!carousel) return;

  const slides = carousel.querySelectorAll(".slide-image");
  const dots = carousel.querySelectorAll(".presentation-dot");
  const prev = carousel.querySelector(".presentation-prev");
  const next = carousel.querySelector(".presentation-next");
  if (!slides.length || !dots.length || !prev || !next) return;

  let index = 0;

  function showPresentationSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  prev.addEventListener("click", () => showPresentationSlide(index - 1));
  next.addEventListener("click", () => showPresentationSlide(index + 1));

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => showPresentationSlide(dotIndex));
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".coding-carousel");
  if (!carousel) return;

  const slides = carousel.querySelectorAll(".coding-slide");
  const dots = carousel.querySelectorAll(".coding-dot");
  const prev = carousel.querySelector(".coding-prev-new");
  const next = carousel.querySelector(".coding-next-new");

  if (!slides.length || !dots.length || !prev || !next) return;

  let index = 0;

  function showCodingPresentationSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  prev.addEventListener("click", () => showCodingPresentationSlide(index - 1));
  next.addEventListener("click", () => showCodingPresentationSlide(index + 1));

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => showCodingPresentationSlide(dotIndex));
  });
});


// motionVideoIconSyncFinal
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".motion-video");
  const toggle = document.querySelector(".motion-play-toggle");
  if (!video || !toggle) return;

  function setMotionIcon() {
    if (video.paused) {
      toggle.innerHTML = '<span class="play-icon">▶</span>';
      toggle.setAttribute("aria-label", "Play video");
      toggle.classList.remove("is-playing");
    } else {
      toggle.innerHTML = '<span class="pause-icon">Ⅱ</span>';
      toggle.setAttribute("aria-label", "Pause video");
      toggle.classList.add("is-playing");
    }
  }

  toggle.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setMotionIcon();
  });

  video.addEventListener("play", setMotionIcon);
  video.addEventListener("pause", setMotionIcon);
  setMotionIcon();
});


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".tbd-carousel");
  if (!carousel) return;

  const slides = carousel.querySelectorAll(".tbd-slide");
  const dots = carousel.querySelectorAll(".tbd-dot");
  const prev = carousel.querySelector(".tbd-prev-new");
  const next = carousel.querySelector(".tbd-next-new");

  if (!slides.length || !dots.length || !prev || !next) return;

  let index = 0;

  function showTbdPresentationSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  prev.addEventListener("click", () => showTbdPresentationSlide(index - 1));
  next.addEventListener("click", () => showTbdPresentationSlide(index + 1));

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => showTbdPresentationSlide(dotIndex));
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".art-carousel");
  if (!carousel) return;

  const slides = carousel.querySelectorAll(".art-slide");
  const dots = carousel.querySelectorAll(".art-dot");
  const prev = carousel.querySelector(".art-prev-new");
  const next = carousel.querySelector(".art-next-new");

  if (!slides.length || !dots.length || !prev || !next) return;

  let index = 0;

  function showArtPresentationSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  prev.addEventListener("click", () => showArtPresentationSlide(index - 1));
  next.addEventListener("click", () => showArtPresentationSlide(index + 1));

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => showArtPresentationSlide(dotIndex));
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".borderlands-carousel");
  if (!carousel) return;

  const slides = carousel.querySelectorAll(".border-slide");
  const dots = carousel.querySelectorAll(".border-dot");
  const prev = carousel.querySelector(".border-prev-new");
  const next = carousel.querySelector(".border-next-new");

  if (!slides.length || !dots.length || !prev || !next) return;

  let index = 0;

  function showBorderPresentationSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  prev.addEventListener("click", () => showBorderPresentationSlide(index - 1));
  next.addEventListener("click", () => showBorderPresentationSlide(index + 1));

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => showBorderPresentationSlide(dotIndex));
  });
});


// otherVideoIconSyncFinal
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".other-video");
  const toggle = document.querySelector(".other-play-toggle");
  if (!video || !toggle) return;

  function setOtherIcon() {
    if (video.paused) {
      toggle.innerHTML = '<span class="play-icon">▶</span>';
      toggle.setAttribute("aria-label", "Play video");
      toggle.classList.remove("is-playing");
    } else {
      toggle.innerHTML = '<span class="pause-icon">Ⅱ</span>';
      toggle.setAttribute("aria-label", "Pause video");
      toggle.classList.add("is-playing");
    }
  }

  toggle.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setOtherIcon();
  });

  video.addEventListener("play", setOtherIcon);
  video.addEventListener("pause", setOtherIcon);
  setOtherIcon();
});
