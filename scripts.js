const HOME_DIV = document.getElementById('home');
const INTRODUCTION_DIV = document.getElementById('introduction');
const ADMISSION_DIV = document.getElementById('admission');
const COURSE_DIV = document.getElementById('course');
const TESTIMONIAL_DIV = document.getElementById('testimonial');
const MAIN_BLUE = "#2E4273";

const accordionFunction = () => {
    const FAQ_Accordions = document.getElementsByClassName("faq__content__item");
    const arrayFAQ = Array.from(FAQ_Accordions)
    arrayFAQ.forEach(eachAccordion  => {
        eachAccordion.addEventListener("click", () => {
            let divToggleHideShow_FAQ =  eachAccordion.childNodes[1];

            console.log("div content", divToggleHideShow_FAQ)
            // TODO: chỉnh lại vị trí của nút mũi tên
            const arrowDown = divToggleHideShow_FAQ.childNodes[3]
            if(arrowDown.nodeName  === "IMG") {
                arrowDown.classList.toggle("rotate_up")
            }
            divToggleHideShow_FAQ.nextElementSibling.classList.toggle("visible");
            eachAccordion.classList.toggle("active-accordion")
        })
    })
}
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
    //index page
    if(HOME_DIV !== null) {
        const SECOND_ROW_LEFT_COLUMN = document.getElementById("content__second-row__left-column");
        const SECOND_ROW_RIGHT_COLUMN = document.getElementById("content__second-row__right-column");
        const arrayContentHover  = document.getElementsByClassName("content__hover")
        const THIRD_ROW_LEFT_COLUMN = document.getElementById("content__third-row__left-column");
        const THIRD_ROW_RIGHT_COLUMN = document.getElementById("content__third-row__right-column");

        //second Row
        SECOND_ROW_LEFT_COLUMN.addEventListener("mouseenter", (event) => {
            arrayContentHover[0].classList.remove("hidden");
            arrayContentHover[0].classList.add("visible");
            arrayContentHover[0].style.transition="all .3s ease";
        })
        SECOND_ROW_LEFT_COLUMN.addEventListener("mouseleave", (event) => {
            arrayContentHover[0].classList.remove("visible")
            arrayContentHover[0].classList.add("hidden")
            arrayContentHover[0].classList.add("visible")
            SECOND_ROW_LEFT_COLUMN.style.transition="all .3s ease;"
        })
        SECOND_ROW_RIGHT_COLUMN.addEventListener("mouseenter", (event) => {
            arrayContentHover[1].classList.remove("hidden");
            arrayContentHover[1].classList.add("visible");
            arrayContentHover[1].style.transition="all .3s ease";
        })
        SECOND_ROW_RIGHT_COLUMN.addEventListener("mouseleave", (event) => {
            arrayContentHover[1].classList.remove("visible")
            arrayContentHover[1].classList.add("hidden")
            arrayContentHover[1].classList.add("visible")
            SECOND_ROW_LEFT_COLUMN.style.transition="all .3s ease;"
        })
        //third ROW
        THIRD_ROW_LEFT_COLUMN.addEventListener("mouseenter", (event) => {
            arrayContentHover[2].classList.remove("hidden");
            arrayContentHover[2].classList.add("visible");
            arrayContentHover[2].style.transition="all .3s ease";
        })
        THIRD_ROW_LEFT_COLUMN.addEventListener("mouseleave", (event) => {
            arrayContentHover[2].classList.remove("visible")
            arrayContentHover[2].classList.add("hidden")
            arrayContentHover[2].classList.add("visible")
            THIRD_ROW_LEFT_COLUMN.style.transition="all .3s ease;"
        })
        THIRD_ROW_RIGHT_COLUMN.addEventListener("mouseenter", (event) => {
            arrayContentHover[3].classList.remove("hidden");
            arrayContentHover[3].classList.add("visible");
            arrayContentHover[3].style.transition="all .3s ease";
        })
        THIRD_ROW_RIGHT_COLUMN.addEventListener("mouseleave", (event) => {
            arrayContentHover[3].classList.remove("visible")
            arrayContentHover[3].classList.add("hidden")
            arrayContentHover[3].classList.add("visible")
            THIRD_ROW_RIGHT_COLUMN.style.transition="all .3s ease;"
        })
    }

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
        const titleShow = document.querySelector("#show__title");
        const contentDiv = document.querySelectorAll(".course__right-column__content");
        document.querySelector(".course__right-column").classList.add("hidden")
        const courseButtons = document.querySelectorAll('.course__buttons');
        courseButtons.forEach((eachButton, index) => {
            eachButton.addEventListener("click", (event) => {
                eachButton.style.fontWeight= "bold";
                eachButton.style.color= MAIN_BLUE;
                document.querySelector(".course__right-column").classList.remove("hidden")
                let currentDivContent = contentDiv[index];

                currentDivContent.classList.remove("hidden");
                currentDivContent.classList.add("visible");
                titleShow.innerHTML = eachButton.innerHTML;
                for(let i = 0; i < contentDiv.length; i++) {
                    if(i !== index) {
                        contentDiv[i].classList.add("hidden");
                        courseButtons[i].style.fontWeight="normal"
                    }
                }
            } )
        })
        accordionFunction();
    }
    //introduction page

    if(INTRODUCTION_DIV !== null) {
        const titleShow = document.querySelector("#show__title");
         const contentDiv = document.querySelectorAll(".information__right-column__content");
        document.querySelector(".information__right-column").classList.add("hidden")
        const informationButtons = document.querySelectorAll('.information__buttons');
        informationButtons.forEach((eachButton, index) => {
            eachButton.addEventListener("click", (event) => {
                eachButton.style.fontWeight= "bold";
                eachButton.style.color= MAIN_BLUE;
                document.querySelector(".information__right-column").classList.remove("hidden")
                let currentDivContent = contentDiv[index];

                currentDivContent.classList.remove("hidden");
                currentDivContent.classList.add("visible");
                titleShow.innerHTML = eachButton.innerHTML;
                for(let i = 0; i < contentDiv.length; i++) {
                    if(i !== index) {
                        contentDiv[i].classList.add("hidden");
                        informationButtons[i].style.fontWeight="normal"
                    }
                }
            } )
        })
    }
    //admission page
    if(ADMISSION_DIV !== null) {
        const titleShow = document.querySelector("#show__title");
        const contentDiv = document.querySelectorAll(".admission__right-column__content");
        document.querySelector(".admission__right-column").classList.add("hidden")
        const admissionButtons = document.querySelectorAll('.admission__buttons');
        admissionButtons.forEach((eachButton, index) => {
            eachButton.addEventListener("click", (event) => {
                eachButton.style.fontWeight= "bold";
                eachButton.style.color= MAIN_BLUE;
                document.querySelector(".admission__right-column").classList.remove("hidden")
                let currentDivContent = contentDiv[index];

                currentDivContent.classList.remove("hidden");
                currentDivContent.classList.add("visible");
                titleShow.innerHTML = eachButton.innerHTML;
                for(let i = 0; i < contentDiv.length; i++) {
                    if(i !== index) {
                        contentDiv[i].classList.add("hidden");
                        admissionButtons[i].style.fontWeight="normal"
                    }
                }
            } )
        })
        //accordion code
        accordionFunction();
    }
    if(TESTIMONIAL_DIV !== null) {
        accordionFunction()
    }
})
