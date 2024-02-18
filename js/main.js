// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");

};
// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// json settings

if ("serviceWorker" in navigator && "PushManager" in window) {
  let deferredPrompt; // Variable untuk menyimpan prompt instalasi

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault(); // Prevent automatic browser prompt
    const installButton = document.getElementById("installButton");
    installButton.style.display = "block";
    installButton.addEventListener("click", () => {
      deferredPrompt = event; // Simpan event prompt
      event.prompt(); // Show the install prompt
    });
  });

  window.addEventListener("appinstalled", (event) => {
    // Aplikasi sudah diinstal, Anda dapat menyembunyikan tombol Install
    const installButton = document.getElementById("installButton");
    installButton.style.display = "none";
  });
}

function showPopupOne() {
  document.getElementById("popup").style.display = "block";
  document.addEventListener("click", closePopupOutsideOne);
  document.addEventListener("scroll", hidePopupOnScrollOne); // Menyembunyikan popup saat scroll
}

function hidePopupOne() {
  document.getElementById("popup").style.display = "none";
  document.removeEventListener("click", closePopupOutsideOne);
  document.removeEventListener("scroll", hidePopupOnScrollOne);
}

function closePopupOutsideOne(event) {
  var popup = document.getElementById("popup");
  var targetElement = event.target;
  if (!popup.contains(targetElement) && targetElement.id !== "gambarPopup") {
    hidePopupOne();
  }
}

function hidePopupOnScrollOne() {
  hidePopupOne();
}

function popupKetkel() {
  document.getElementById("popupKetkel").style.display = "block";
  document.addEventListener("click", closePopupOutsideTwo);
  document.addEventListener("scroll", hidePopupOnScrollTwo); // Menyembunyikan popup saat scroll
}

function hidePopupKetkel() {
  document.getElementById("popupKetkel").style.display = "none";
  document.removeEventListener("click", closePopupOutsideTwo);
  document.removeEventListener("scroll", hidePopupOnScrollTwo);
}

function closePopupOutsideTwo(event) {
  var popup = document.getElementById("popupKetkel");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupKetkel"
  ) {
    hidePopupKetkel();
  }
}

function hidePopupOnScrollTwo() {
  hidePopupKetkel();
}

function popupWaketkel() {
  document.getElementById("popupWaketkel").style.display = "block";
  document.addEventListener("click", closePopupOutsideTri);
  document.addEventListener("scroll", hidePopupOnScrollTri); // Menyembunyikan popup saat scroll
}

function hidePopupWaketkel() {
  document.getElementById("popupWaketkel").style.display = "none";
  document.removeEventListener("click", closePopupOutsideTri);
  document.removeEventListener("scroll", hidePopupOnScrollTri);
}

function closePopupOutsideTri(event) {
  var popup = document.getElementById("popupWaketkel");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupWaketkel"
  ) {
    hidePopupWaketkel();
  }
}

function hidePopupOnScrollTri() {
  hidePopupWaketkel();
}

function popupSekter() {
  document.getElementById("popupSekter").style.display = "block";
  document.addEventListener("click", closePopupOutsideFor);
  document.addEventListener("scroll", hidePopupOnScrollFor); // Menyembunyikan popup saat scroll
}

function hidePopupSekter() {
  document.getElementById("popupSekter").style.display = "none";
  document.removeEventListener("click", closePopupOutsideFor);
  document.removeEventListener("scroll", hidePopupOnScrollFor);
}

function closePopupOutsideFor(event) {
  var popup = document.getElementById("popupSekter");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupSekter"
  ) {
    hidePopupSekter();
  }
}

function hidePopupOnScrollFor() {
  hidePopupSekter();
}

function popupSekterDua() {
  document.getElementById("popupSekterDua").style.display = "block";
  document.addEventListener("click", closePopupOutsideFive);
  document.addEventListener("scroll", hidePopupOnScrollFive); // Menyembunyikan popup saat scroll
}

function hidePopupSekterDua() {
  document.getElementById("popupSekterDua").style.display = "none";
  document.removeEventListener("click", closePopupOutsideFive);
  document.removeEventListener("scroll", hidePopupOnScrollFive);
}

function closePopupOutsideFive(event) {
  var popup = document.getElementById("popupSekterDua");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupSekterDua"
  ) {
    hidePopupSekterDua();
  }
}

function hidePopupOnScrollFive() {
  hidePopupSekterDua();
}

function popupBendara() {
  document.getElementById("popupBendara").style.display = "block";
  document.addEventListener("click", closePopupOutsideSix);
  document.addEventListener("scroll", hidePopupOnScrollSix); // Menyembunyikan popup saat scroll
}

function hidePopupBendara() {
  document.getElementById("popupBendara").style.display = "none";
  document.removeEventListener("click", closePopupOutsideSix);
  document.removeEventListener("scroll", hidePopupOnScrollSix);
}

function closePopupOutsideSix(event) {
  var popup = document.getElementById("popupBendara");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupBendara"
  ) {
    hidePopupBendara();
  }
}

function hidePopupOnScrollSix() {
  hidePopupBendara();
}

function popupBendaraDua() {
  document.getElementById("popupBendaraDua").style.display = "block";
  document.addEventListener("click", closePopupOutsideSeven);
  document.addEventListener("scroll", hidePopupOnScrollSeven); // Menyembunyikan popup saat scroll
}

function hidePopupBendaraDua() {
  document.getElementById("popupBendaraDua").style.display = "none";
  document.removeEventListener("click", closePopupOutsideSeven);
  document.removeEventListener("scroll", hidePopupOnScrollSeven);
}

function closePopupOutsideSeven(event) {
  var popup = document.getElementById("popupBendaraDua");
  var targetElement = event.target;
  if (
    !popup.contains(targetElement) &&
    targetElement.id !== "gambarPopupBendaraDua"
  ) {
    hidePopupBendaraDua();
  }
}

function hidePopupOnScrollSeven() {
  hidePopupBendaraDua();
}

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery-content");
  const leftBtn = document.querySelector(".left");
  const rightBtn = document.querySelector(".right");
  const counter = document.querySelector(".counter");

  // Menghitung jumlah total gambar
  const totalImages = document.querySelectorAll(
    ".gallery-content .item"
  ).length;
  let currentIndex = 1;

  // Menampilkan nomor urutan foto saat ini
  function updateCounter() {
    // counter.textContent = currentIndex + '/' + totalImages;
  }
  updateCounter();

  leftBtn.addEventListener("click", function () {
    gallery.scrollBy({
      left: -200,
      behavior: "smooth",
    });
    currentIndex = Math.max(currentIndex - 1, 1); // Menjaga currentIndex tetap positif
    updateCounter();
  });

  rightBtn.addEventListener("click", function () {
    gallery.scrollBy({
      left: 200,
      behavior: "smooth",
    });
    currentIndex = Math.min(currentIndex + 1, totalImages); // Menjaga currentIndex tidak melebihi totalImages
    updateCounter();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const galleryy = document.querySelector(".gallery-content-2");
  const leftBtn = document.querySelector(".left-2");
  const rightBtn = document.querySelector(".right-2");
  const counter = document.querySelector(".counter-2");

  // Menghitung jumlah total gambar
  const totalImages = document.querySelectorAll(
    ".gallery-content-2 .item-2"
  ).length;
  let currentIndex = 1;

  // Menampilkan nomor urutan foto saat ini
  function updateCounter() {
    // counter.textContent = currentIndex + '/' + totalImages;
  }
  updateCounter();

  leftBtn.addEventListener("click", function () {
    galleryy.scrollBy({
      left: -200,
      behavior: "smooth",
    });
    currentIndex = Math.max(currentIndex - 1, 1); // Menjaga currentIndex tetap positif
    updateCounter();
  });

  rightBtn.addEventListener("click", function () {
    galleryy.scrollBy({
      left: 200,
      behavior: "smooth",
    });
    currentIndex = Math.min(currentIndex + 1, totalImages); // Menjaga currentIndex tidak melebihi totalImages
    updateCounter();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const galleryyy = document.querySelector(".gallery-content-3");
  const leftBtnTri = document.querySelector(".left-3");
  const rightBtnTri = document.querySelector(".right-3");
  const counter = document.querySelector(".counter-3");

  // Menghitung jumlah total gambar
  const totalImages = document.querySelectorAll(
    ".gallery-content-3 .item-3"
  ).length;
  let currentIndex = 1;

  // Menampilkan nomor urutan foto saat ini
  function updateCounter() {
    // counter.textContent = currentIndex + '/' + totalImages;
  }
  updateCounter();

  leftBtnTri.addEventListener("click", function () {
    galleryyy.scrollBy({
      left: -200,
      behavior: "smooth",
    });
    currentIndex = Math.max(currentIndex - 1, 1); // Menjaga currentIndex tetap positif
    updateCounter();
  });

  rightBtnTri.addEventListener("click", function () {
    galleryyy.scrollBy({
      left: 200,
      behavior: "smooth",
    });
    currentIndex = Math.min(currentIndex + 1, totalImages); // Menjaga currentIndex tidak melebihi totalImages
    updateCounter();
  });
});

const carousel = document.querySelector('.carousel');
const carouselWidth = carousel.offsetWidth;
let currentSlide = 0;
const totalSlides = carousel.children.length;
const slideWidth = carousel.children[0].offsetWidth;
let direction = -1;

function moveCarousel() {
    currentSlide += direction;
    if (currentSlide === totalSlides - 1 || currentSlide === 0) {
        direction *= -1;
    }
    const offset = -currentSlide * slideWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Automatically move the carousel every 3 seconds
setInterval(moveCarousel, 3000);






// Function to display overlay when screenshot is taken
function displayOverlay() {
  document.getElementById("overlay").style.display = "flex";
}

// Event listener for screenshot detection
document.addEventListener("keyup", function(event) {
  // Check if 'Print Screen' key is pressed
  if (event.key === "PrintScreen" || event.key === "PrtScn") {
      displayOverlay();
  }
});

// Event listener for 'contextmenu' event (right-click)
document.addEventListener("contextmenu", function(event) {
  event.preventDefault(); // Prevent right-click menu
  displayOverlay();
});

document.addEventListener("keydown", function(event) {
  if (event.key === "PrintScreen") {
      alert("Screenshot is not allowed on this website.");
      event.preventDefault();
  }
});


// Contoh script.js untuk menampilkan gambar lebih besar ketika diklik
const items = document.querySelectorAll('.items');
items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});


// drag and drop
 // Mendengarkan peristiwa drag dan drop pada body
 document.body.addEventListener('dragover', function(event) {
  // Mencegah perilaku default dragover
  event.preventDefault();
});

document.body.addEventListener('drop', function(event) {
  // Mencegah perilaku default drop
  event.preventDefault();
});

// Mendeteksi ketika pengguna menekan tombol Print Screen
document.addEventListener('keyup', function(e) {
  if (e.key === 'PrintScreen' || e.key === 'F12') {
      alert('Tidak diizinkan untuk mengambil tangkapan layar.');
      // Anda juga dapat menambahkan tindakan lain di sini, seperti memuat ulang halaman atau mengarahkan pengguna ke halaman lain.
      // window.location.href = 'halaman-lain.html';
  }
});

// Mendeteksi saat pengguna menggunakan alat tangkapan layar bawaan (hanya mendukung beberapa browser)
window.addEventListener('keydown', function(e) {
  if (e.key === 'F12' && e.ctrlKey && e.shiftKey) {
      alert('Tidak diizinkan untuk menggunakan alat pengembang.');
      e.preventDefault();
  }
});