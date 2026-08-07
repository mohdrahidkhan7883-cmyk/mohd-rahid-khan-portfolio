/*=========================
TYPEWRITER
=========================*/

const words = [

    "Data Scientist",

    "Machine Learning Engineer",

    "Business Data Analyst ",

    "Python Developer",
    "Business Problem Solver",

    "AI Enthusiast",
    

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1800);

            return;

        }

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex===words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?45:90);

}

typeEffect();


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================
PDF VIEWER
=========================*/

const pdfModal=document.getElementById("pdfModal");

const pdfFrame=document.getElementById("pdfFrame");

const pdfTitle=document.getElementById("pdfTitle");

const closePdf=document.getElementById("closePdf");


document.querySelectorAll(".pdf-btn").forEach(button=>{

button.addEventListener("click",(e)=>{

e.preventDefault();

pdfFrame.src=button.dataset.pdf;

pdfTitle.innerText=button.dataset.title;

pdfModal.classList.add("active");

document.body.style.overflow="hidden";

});

});


closePdf.onclick=()=>{

pdfModal.classList.remove("active");

pdfFrame.src="";

document.body.style.overflow="auto";

}


pdfModal.onclick=(e)=>{

if(e.target===pdfModal){

closePdf.click();

}

}


document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closePdf.click();

}

});