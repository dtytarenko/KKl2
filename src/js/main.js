import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

(() => {
    const Slider = () => {
        document.addEventListener("DOMContentLoaded", function () {
            /* eslint-disable no-unused-vars */
            const mySwiper = new Swiper(".swiper-container", {
                loop: false,
                speed: 1000,
                grabCursor: true,
                mousewheelControl: true,
                slidesPerView: "auto",
                keyboardControl: true,
                spaceBetween: 20,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                },
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    }
                }
            });
            /* eslint-enable no-unused-vars */
        });
    };

    Slider();
})();

