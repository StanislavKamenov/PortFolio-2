let icon = document.querySelector('.fa-bars');
let allLinks = document.querySelectorAll('.text');
let menuVisible = false;

icon.addEventListener('click', function() {
    if (menuVisible) {
        allLinks.forEach(link => {
            link.style.opacity = 0;
            link.style.transform = 'translateX(-100px)';
            icon.classList.remove('active');
        });
        menuVisible = false;
    } else {
        allLinks.forEach(link => {
            link.style.opacity = 1;
            link.style.transform = 'translateX(0)';
            icon.classList.add('active');
        });
        menuVisible = true;
    }
});

document.querySelector('.fa-bars').addEventListener('click', function() {
    let menuDropdown = document.getElementById('menuDropdown');
    menuDropdown.classList.toggle('active');
});

let WelcomePage = new Typed('.multiple-text', {
    strings: ['Young and ambitious Frontend developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: false
}) 

let technologys = new Typed('.technologys', {
    strings: ['Html,css,lua,ReactJS,JS,Sass'],
    typeSpeed: 400,
    backSpeed: 100,
    backDelay: 100,
    loop: false
}) 

const aboutText = "Hello, i`m Stanisalv, 19, from Varna. I graduated from the mechanical engineering school in Varna. I work in Frontend programming, also grow social media and accounts and drive traffic.. I am also a graduate of the Advance Academy course in Varna for Frontend Developer, and I  have a diploma from there. I am young and ambitious, with a great desire to develop in the field of programming and  grow social networks and accounts.";


let currentIndex = 0;

const introTextElement = document.getElementById('textForAbout');

function addTextWithDelay() {
    introTextElement.textContent += aboutText[currentIndex];
    currentIndex++;

    if (currentIndex < aboutText.length) {
        setTimeout(addTextWithDelay, 110); 
    }
}

setTimeout(addTextWithDelay, 1000); 



