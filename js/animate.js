$(document).ready(function () {
  AOS.init({
    once: false,
    disable: "phone",
  });
  if ($(window).width() >= 1192) {
    if ($(".home-works").length) {
      var images = gsap.utils.toArray(
        ".home-works .work-item:last-child .work-content"
      );

      images.forEach((image, i) => {
        gsap.fromTo(
          image,
          { scale: 0.78947 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              pin: ".works-list",
              trigger: ".work-item:last-child",
              start: "top top",
              end: "bottom top",
              scrub: 0.1,
              markers: true,
            },
          }
        );
      });
    }
    var image = document.getElementsByClassName("animated-img");
    new simpleParallax(image, {
      delay: 0.6,
      transition: "cubic-bezier(0,0,0,1)",
    });
  }
});
