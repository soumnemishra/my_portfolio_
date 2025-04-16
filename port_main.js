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
