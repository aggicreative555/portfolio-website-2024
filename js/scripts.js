const navRight = document.querySelector(".nav-right");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = navRight.getAttribute('data-visible');

    console.log(visibility);

    if (visibility === "false") {
        navRight.setAttribute("data-visible", true);
    } else if (visibility === "true") {
        navRight.setAttribute("data-visible", false);
        navToggle.setAttribute("display");
    }
});


// Progress-bar 

document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    
    const cardWrapper= document.querySelector(".card-wrapper");
    
    const cardCaption = document.querySelector(".body-update");
    
    const cardTitle = document.querySelector(".title-update");
    
    const cardBody = document.querySelector(".body-big-update");

    const cardImage = document.querySelector(".img-wrapper");
    


    const cardData = [
        {
            caption: "2000 - 2016",
            title: "The beginning",
            body: "I've always been the 'art kid' at school, sketching in my sketchbooks. Later in my life this turned into my passion for illustration.",
            image: "#"   
        },
        {
            caption: "2019 - 2020",
            title: "Crossroads",
            body: "In 2019, I moved cities, started studying linguistics and got a new job. I felt like I was at a crossroad in my life, not aware of what path to take.", 
            image: "#1"   
        },

        {
            caption: "2021 -2022",
            title: "The breakthrough",
            body: "This is where I discovered UI / UX design. I went to Noroff and fell in love with this art. I got a job in a medical startup called STO after my studies!",
            image: "#1"   
        },

        {
            caption: "2023 - Now",
            title: "Coding adventure",
            body: "I decided to start front-end programming in August 2023. I got an internship in Studvest where I work in a team of other talented IT students! I also got to do an art exhibition, featuring my illustrations this year",
            image: "#1"   
        }
    ];

    circles.forEach((circle, index) => {
        circle.addEventListener("click", () => {

            circles.forEach(c => c.classList.remove("circle-active"));


            circle.classList.add("circle-active");

            cardWrapper.classList.remove("fade-in");
            void cardWrapper.offsetWidth;

            cardWrapper.classList.add("fade-in");

            cardCaption.textContent = cardData[index].caption;
            cardTitle.textContent = cardData[index].title;
            cardBody.textContent = cardData[index].body;
            cardImage.src = cardData[index].image;

        });
    });
});