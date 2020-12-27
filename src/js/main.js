import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

(() => {
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("modal");

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

    const showModal = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const showVideoButtons = Array.from(document.getElementsByClassName("reviews__item_video"));
           
            function showVideo(event){
                event.preventDefault();
                overlay.classList.add("active");
                modal.classList.add("active");
            }

            showVideoButtons.forEach(element => element.addEventListener("click", showVideo, false));
        });
    };

    const hideModal = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const modalClose = document.getElementById("modal__close");

            function hideVideo(){
                overlay.classList.remove("active");
                modal.classList.remove("active");
            }

            modalClose.addEventListener("click", hideVideo, false);
            modalClose.addEventListener("touchstart", hideVideo, false);
            modal.addEventListener("click", hideVideo, false);
            modal.addEventListener("touchstart", hideVideo, false);
        });
    };

    /*global AOS*/
    AOS.init();

    hideModal();
    showModal();
    Slider();
    initializeSmoothlyScroll();
})();

