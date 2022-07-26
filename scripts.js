const HOME_DIV = document.getElementById('home');
const INTRODUCTION_DIV = document.getElementById('introduction');
const COURSE_DIV = document.getElementById('course');
const MAIN_BLUE = "#2E4273";
window.addEventListener("load", function () {
    let myNav = document.getElementById('menu');
    window.onscroll = function () {
        "use strict";
        if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
            myNav.style.backgroundColor = "#2E4273";
        } else {
            myNav.style.backgroundColor = "";
        }
    };

    const normalizeNavButtons = (firstButton, secondButton) => {
        firstButton.style.width= "10px";
        firstButton.style.height= "10px";
        firstButton.style.backgroundColor =  "#bbb";

        secondButton.style.width= "10px";
        secondButton.style.height= "10px";
        secondButton.style.backgroundColor =  "#bbb";
    }

    const changeToMainNavButton = thisNavButton => {
        thisNavButton.style.width= "15px";
        thisNavButton.style.height= "15px";
        thisNavButton.style.backgroundColor= "#2E4273";
    }

    let sliderContent = document.getElementsByClassName("slider__content")[0];
    if(sliderContent !== undefined) {
        let sliderItems = document.getElementsByClassName("slider__content__item");
        let colOffsetValue = parseFloat(window.getComputedStyle(sliderItems[0]).marginLeft.split("p")[0]);
        let sliderItemWidth = sliderItems[0].offsetWidth;
        let positionX = 0;
        let firstNavDot = document.getElementById('first-nav-dot');
        let secondNavDot = document.getElementById('second-nav-dot');
        let thirdNavDot = document.getElementById('third-nav-dot');
        //Start first nav as default
        changeToMainNavButton(firstNavDot)
        firstNavDot.addEventListener("click", (event) => {
            normalizeNavButtons(secondNavDot, thirdNavDot)
            positionX = 0;
            sliderContent.style.transform = `translateX(${positionX}px)`;
            changeToMainNavButton(firstNavDot)
        });

        secondNavDot.addEventListener("click", (event ) => {
            normalizeNavButtons(firstNavDot, thirdNavDot)
            positionX = sliderItemWidth + colOffsetValue;
            sliderContent.style.transform = `translateX(${-positionX}px)`;
            positionX = 0;
            changeToMainNavButton(secondNavDot)
        });

        thirdNavDot.addEventListener("click", (event) => {
            normalizeNavButtons(firstNavDot, secondNavDot)
            positionX = (sliderItemWidth + colOffsetValue) * 2;
            sliderContent.style.transform = `translateX(${-positionX}px)`;
            positionX = 0;
            changeToMainNavButton(thirdNavDot)
        });
    }
    //course page
    if(COURSE_DIV !== null) {
        const contentDiv = document.querySelectorAll(".course__right-column__content");
        document.querySelector(".course__right-column").classList.add("hidden")
        let courseButtons = document.querySelectorAll('.course__buttons');
        courseButtons.forEach((eachButton, index) => {
            eachButton.addEventListener("click", () => {
                document.querySelector(".information__right-column").classList.remove("hidden")
                let currentDivContent = contentDiv[index];
                currentDivContent.classList.remove("hidden");
                currentDivContent.classList.add("visible");
                for(let i = 0; i < contentDiv.length; i++) {
                    if(i !== index) {
                        contentDiv[i].classList.add("hidden");
                    }
                }
            } )
        })
    }
    //introduction page

    if(INTRODUCTION_DIV !== null) {
         const contentDiv = document.querySelectorAll(".information__right-column__content");
        document.querySelector(".information__right-column").classList.add("hidden")
        const informationButtons = document.querySelectorAll('.information__buttons');
        informationButtons.forEach((eachButton, index) => {
            eachButton.addEventListener("click", () => {
                eachButton.style.fontWeight= "bold";
                eachButton.style.color= MAIN_BLUE;
                document.querySelector(".information__right-column").classList.remove("hidden")
                let currentDivContent = contentDiv[index];
                currentDivContent.classList.remove("hidden");
                currentDivContent.classList.add("visible");
                for(let i = 0; i < contentDiv.length; i++) {
                    if(i !== index) {
                        contentDiv[i].classList.add("hidden");
                        informationButtons[i].style.fontWeight="normal"

                    }
                }
            } )
        })
    }
    const testRedirect = document.getElementById('testRedirect');
    testRedirect.addEventListener('click', (event) =>{
        event.preventDefault();
        location.href = "signin.html";
    })
})
