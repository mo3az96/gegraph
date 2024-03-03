$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /************************************ Fixed Header ************************************/
  $(this).scrollTop() >= 150
    ? $("header").addClass("fixed")
    : $("header").removeClass("fixed ");
  $(window).scroll(function () {
    $(this).scrollTop() >= 150
      ? $("header").addClass("fixed")
      : $("header").removeClass("fixed ");
  });
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
      nextEl: ".blog-section .swiper-btn-next, .blog-related .swiper-btn-next",
      prevEl: ".blog-section .swiper-btn-prev, .blog-related .swiper-btn-prev",
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
  /************************************ Testimonials Sliders ************************************/
  var testimonialsSwiper = new Swiper(".testimonials-slider .swiper", {
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
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-section .swiper-btn-next",
      prevEl: ".testimonials-section .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Statistics ************************************/
  if ($(".about-statistics").length) {
    var a = 0;
    $(window).scroll(function () {
      if (
        a == 0 &&
        $(this).scrollTop() >= $(".about-statistics").offset().top - 300
      ) {
        $(".statistic-number span").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 500,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        a++;
      }
    });
  }
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

  var input = $("input[type=tel]");
  for (let i = 0; i < input.length; i++) {
    intlTelInput(input[i], {
      utilsScript: "js/utils.js",
      autoPlaceholder: "aggressive",
      separateDialCode: true,
      initialCountry: "sa",
      preferredCountries: ["sa", "kw", "ae", "bh", "om", "qa"],
    });
  }

  if ($(window).width() >= 992) {
    $("select").select2({
      minimumResultsForSearch: Infinity,
    });
  }

  $(".file-content input[type=file]").change(function () {
    let file_val;
    if ($(this).val() == "") {
      file_val = $(this).attr("placeholder");
    } else {
      file_val = $(this).prop("files")[0].name;
    }
    $(this).next().html(file_val);
  });
});

var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: window.innerWidth / 2,
  endY: window.innerHeight / 2,
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector(".cursor-dot"),
  $outline: document.querySelector(".cursor-dot-outline"),

  init: function () {
    // Set up element sizes
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;

    this.setupEventListeners();
    this.animateDotOutline();
  },

  //     updateCursor: function(e) {
  //         var self = this;

  //         console.log(e)

  //         // Show the cursor
  //         self.cursorVisible = true;
  //         self.toggleCursorVisibility();

  //         // Position the dot
  //         self.endX = e.pageX;
  //         self.endY = e.pageY;
  //         self.$dot.style.top = self.endY + 'px';
  //         self.$dot.style.left = self.endX + 'px';
  //     },

  setupEventListeners: function () {
    var self = this;

    // Anchor hovering
    document.querySelectorAll("a,button").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      el.addEventListener("mouseout", function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
    });

    // Click events
    document.addEventListener("mousedown", function () {
      self.cursorEnlarged = true;
      self.toggleCursorSize();
    });
    document.addEventListener("mouseup", function () {
      self.cursorEnlarged = false;
      self.toggleCursorSize();
    });

    document.addEventListener("mousemove", function (e) {
      // Show the cursor
      self.cursorVisible = true;
      self.toggleCursorVisibility();

      // Position the dot
      self.endX = e.pageX;
      self.endY = e.pageY;
      self.$dot.style.top = self.endY + "px";
      self.$dot.style.left = self.endX + "px";
    });

    // Hide/show cursor
    document.addEventListener("mouseenter", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    });

    document.addEventListener("mouseleave", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    });
  },

  animateDotOutline: function () {
    var self = this;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$outline.style.top = self._y + "px";
    self.$outline.style.left = self._x + "px";

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorSize: function () {
    var self = this;

    if (self.cursorEnlarged) {
      self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
      self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
      self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
    }
  },

  toggleCursorVisibility: function () {
    var self = this;

    if (self.cursorVisible) {
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    } else {
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    }
  },
};

cursor.init();
