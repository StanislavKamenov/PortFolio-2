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

// let textForAbout = new Typed('.textForAbout', {
//     strings: ['Hello, I`m Stanisalv from Varna, 19 years old, I graduated from Varna Advanced Academy of Programming and have a Junior Frontend Developer diploma issued there i graduated from a mechanical technical school, now I want to become a Frontend Developer. I am motivated and like to work in a team, I learn quickly. My skills are Html,css,JS,Reactjs,lua,Sass'],
//     typeSpeed: 1000,
//     backSpeed: 200,
//     backDelay: 100,
//     loop: false
// }) 


// Вашият текст
const aboutText = "Hello, i`m Stanisalv, 19, from Varna. I graduated from the mechanical engineering school in Varna. I work in Frontend programming, also grow social media and accounts and drive traffic.. I am also a graduate of the Advance Academy course in Varna for Frontend Developer, and I  have a diploma from there. I am young and ambitious, with a great desire to develop in the field of programming and  grow social networks and accounts.";


let currentIndex = 0;

// Елементът, в който ще се постави текстът
const introTextElement = document.getElementById('textForAbout');

// Функция за добавяне на текст с delay
function addTextWithDelay() {
    introTextElement.textContent += aboutText[currentIndex];
    currentIndex++;

    // Проверка дали не сме достигнали края на текста
    if (currentIndex < aboutText.length) {
        setTimeout(addTextWithDelay, 110); // Променете времето за забавяне, ако е необходимо
    }
}

// Стартиране на функцията с delay
setTimeout(addTextWithDelay, 1000); // Променете времето преди да започне да се изписва текста




