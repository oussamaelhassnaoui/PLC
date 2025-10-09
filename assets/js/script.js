"use strict";

/* Preloader */
const loader = document.querySelector(".cs-loader");

// setTimeout(function () {
//   loader.style.display = "none";
// }, 4000);

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".cs-loader").style.visibility = "visible";
  } else {
    document.querySelector(".cs-loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

/* Element Toggle Function */
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/* Sidebar Variables */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

/* Sidebar Toggle Functionality For Mobile */
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

/* Toggle Arrow */
const dropdownMenuButton = document.querySelector(".info_more-btn");
const dropdownMenuArrow = document.querySelector(".info-icon");

dropdownMenuButton.addEventListener("click", () => {
  if (dropdownMenuArrow.classList.contains("bx-chevron-down")) {
    dropdownMenuArrow.classList.remove("bx-chevron-down");
    dropdownMenuArrow.classList.add("bx-chevron-up");
  } else {
    dropdownMenuArrow.classList.add("bx-chevron-down");
    dropdownMenuArrow.classList.remove("bx-chevron-up");
  }
});

/* Testimonials Variables */
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

/* Modal Variables */
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

/* Modal Toggle Function */
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

/* Add Click Event To All Modal Items */
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

/* Add Click Event To Modal Close Button */
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

/* Custom Select Variables */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

/* Add Event In All Select Items */
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

/* Filter Variables */
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

/* Add Event In All Filter Button Items For Large Screen */
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

/* Contact Form Variables */
const scriptURL = 'https://script.google.com/macros/s/AKfycbwN_6zKMLoCbNmN608hHrL43ARDg8Iu4C-9dURsRRuIwAzA6_ar2Mfg7wc6NyMi2eRN/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  
  form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent succesfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000) 
            form.reset()       })
        .catch(error => console.error('Error!', error.message))
    })


/* Page Navigation Variables */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

/* Add Event To All Nav Link */
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

 const languageSwitch = document.querySelector('.language-switch');

// Function to toggle between English and French URLs
 languageSwitch.addEventListener('click', () => {
if (languageSwitch.getAttribute('href') === 'index.html') {
      languageSwitch.setAttribute('href', 'indexfr.html');
      languageSwitch.textContent = 'Français';
      } 
else {
       languageSwitch.setAttribute('href', 'index.html');
       languageSwitch.textContent = 'English';
  }
});
  

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 290,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    color: {
      value: "#2488fe",
    },
    shape: {
      type: "triangle",
      stroke: {
        width: 0,
        color: "#2488fe",
      },
      polygon: {
        nb_sides: 10,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#2488fe",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 100,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  
  // Check for saved theme preference - now defaults to light mode
  const savedTheme = localStorage.getItem('theme');
  
  // Set initial theme - light mode is now default
  if (savedTheme === 'dark') {
    setDarkTheme();
  } else {
    setLightTheme();
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
    if (root.classList.contains('dark-theme')) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  });
  
  function setLightTheme() {
    root.classList.remove('dark-theme');
    root.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }
  
  function setDarkTheme() {
    root.classList.remove('light-theme');
    root.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
});

// Certificate Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all certificate links
  const certificateLinks = document.querySelectorAll('.certificate-link');
  
  // Create modal elements
  const certificateModal = document.createElement('div');
  certificateModal.className = 'certificate-modal';
  certificateModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  `;
  
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    position: relative;
    max-width: 90%;
    max-height: 90%;
  `;
  
  const modalImage = document.createElement('img');
  modalImage.style.cssText = `
    max-width: 100%;
    max-height: 80vh;
    border-radius: 10px;
  `;
  
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = `
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 40px;
    cursor: pointer;
    padding: 0;
    margin: 0;
  `;
  
  // Assemble modal
  modalContent.appendChild(modalImage);
  modalContent.appendChild(closeBtn);
  certificateModal.appendChild(modalContent);
  document.body.appendChild(certificateModal);
  
  // Add click event to all certificate links
  certificateLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const imgSrc = this.getAttribute('data-certificate');
      modalImage.src = imgSrc;
      certificateModal.style.opacity = '1';
      certificateModal.style.visibility = 'visible';
    });
  });
  
  // Close modal when close button is clicked
  closeBtn.addEventListener('click', function() {
    certificateModal.style.opacity = '0';
    certificateModal.style.visibility = 'hidden';
  });
  
  // Close modal when clicking outside the image
  certificateModal.addEventListener('click', function(e) {
    if (e.target === certificateModal) {
      certificateModal.style.opacity = '0';
      certificateModal.style.visibility = 'hidden';
    }
  });
});

// Icon initialization
document.addEventListener('DOMContentLoaded', function() {
  // Force reflow to ensure icons are rendered
  const icons = document.querySelectorAll('ion-icon, .fa-solid');
  icons.forEach(icon => {
    // Trigger a reflow to ensure icons render properly
    icon.style.display = 'none';
    icon.offsetHeight; // Trigger reflow
    icon.style.display = '';
  });
});
