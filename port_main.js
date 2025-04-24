const toggleBtn = document.getElementById('toggleDarkMode');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Change icon based on mode
    if (body.classList.contains('dark-mode')) {
        toggleBtn.innerHTML = '<i class="uil uil-sun"></i>'; // Light mode icon
    } else {
        toggleBtn.innerHTML = '<i class="uil uil-moon"></i>'; // Dark mode icon
    }
});


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Youtuber","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

// scsroll up and scroll down buttons 
 document.getElementById("scroll-toggle").addEventListener("click", function(event) {
    event.preventDefault();

    let scrollText = document.getElementById("scroll-text");
    let scrollIcon = document.getElementById("scroll-icon");

    if (scrollText.innerText === "Scroll Down") {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        scrollText.innerText = "Scroll Up";
        scrollIcon.classList.remove("uil-mouse-alt");
        scrollIcon.classList.add("uil-arrow-up");
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        scrollText.innerText = "Scroll Down";
        scrollIcon.classList.remove("uil-arrow-up");
        scrollIcon.classList.add("uil-mouse-alt");
    }
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const scrollRevealInstance= ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

/* -- HOME -- */
scrollRevealInstance.reveal('.featured-text-card',{})
scrollRevealInstance.reveal('.featured-name',{delay: 100})
scrollRevealInstance.reveal('.featured-text-info',{delay: 200})
scrollRevealInstance.reveal('.featured-text-btn',{delay: 200})
scrollRevealInstance.reveal('.social_icons',{delay: 200})
scrollRevealInstance.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
scrollRevealInstance.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
scrollRevealInstance.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})









