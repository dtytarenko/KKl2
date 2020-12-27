import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

(() => {
    const Slider = () => {
        document.addEventListener("DOMContentLoaded", function () {
            /* eslint-disable no-unused-vars */
            const mySwiper = new Swiper(".swiper-container", {
                speed: 1000,
                grabCursor: true,
                mousewheelControl: true,
                keyboardControl: true,
                centeredSlides: true,
                spaceBetween: 20,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                },
            });
            /* eslint-enable no-unused-vars */
        });
    };

    const initializeSmoothlyScroll = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const introButtonScroll = document.getElementById("intro__button-scroll");
            const aboutUs = document.getElementById("aboutUs");

            // html section of site
            function toAboutUs() {
                aboutUs.scrollIntoView({ block: "start", behavior: "smooth" });
            }
            // scroll functions

            introButtonScroll.addEventListener("click", () => {    
                toAboutUs();
            });
        });
    };

    /*global AOS*/
    AOS.init();

    Slider();
    initializeSmoothlyScroll();
})();

