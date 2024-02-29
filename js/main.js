$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /************************************ Navbar ************************************/
  if ($(window).width() < 767) {
    $(".menu-btn").click(function () {
      if ($(".header-nav").is(":visible")) {
        $(".menu-btn").removeClass("active");
        $(".header-nav").removeClass("active");
        $("body").removeClass("overflow");
        setTimeout(function () {
          $(".header-nav").hide();
        }, 500);
      } else {
        $(".header-nav").show();
        setTimeout(function () {
          $(".menu-btn").addClass("active");
          $(".header-nav").addClass("active");
          $("body").addClass("overflow");
        }, 1);
      }
    });
  }

  /************************************ Blog Sliders ************************************/
  var blogSwiper = new Swiper(".blog-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40,
      },
      1199: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 100,
      },
    },
    pagination: {
      el: ".blog-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".blog-section .swiper-btn-next",
      prevEl: ".blog-section .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Works Sliders ************************************/
  var worksSwiper = new Swiper(".works-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40,
      },
      1199: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 104,
      },
    },
    pagination: {
      el: ".works-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".works-related .swiper-btn-next",
      prevEl: ".works-related .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Scroll Arrows ************************************/
  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(500)
      : $(".arrow-top").fadeOut(500);
  });
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  $(".scroll-btn").on("click", function (e) {
    $(document).off("scroll");

    var target = $(this).parents("main").next();
    menu = target;
    $target = $(target);
    $("html, body").stop().animate(
      {
        scrollTop: $target.offset().top,
      },
      500,
      "swing"
    );
  });

  /************************************ Filters ************************************/
  $(".filter-btn").click(function (e) {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
    let filter = $(this).attr("id");
    $("[data-filter]").each(function () {
      let $this = $(this);
      let str = $(this).data("filter");
      let resetTag = $("<div>")
        .addClass($this.attr("class"))
        .attr("data-filter", str)
        .html($this.html());
      $this.replaceWith(resetTag);
      resetTag.hide();
    });
    if (filter == "all") {
      $("[data-filter]").show();
    } else {
      $("[data-filter]").each(function () {
        let $this = $(this);
        let str = $(this).data("filter");
        if (str.includes(filter)) {
          let newTag = $("<article>")
            .addClass($this.attr("class"))
            .attr("data-filter", str)
            .html($this.html());
          $this.replaceWith(newTag);
          newTag.show();
        }
      });
    }
    lazyLoad();
  });
});