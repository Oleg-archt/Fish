$(function () {
  $(".header-slider").slick({
    dots: true,
    // fade: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 360,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],

    prevArrow:
      "<button type='button' class='slick-prev'><img src='./images/prev.svg'></button>",
    nextArrow:
      "<button type='button' class='slick-next'><img src='./images/next.svg'></button>",
  });

  ////////////////////////////////////////////////
  $(".product__name").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".product__content",
    vertical: true,
    responsive: [
      {
        breakpoint: 891,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3,
          vertical: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          vertical: false,
        },
      },
    ],

    prevArrow:
      "<button type='button' class='product-prev'><img src='./images/product-prev.svg'></button>",
    nextArrow:
      "<button type='button' class='product-next'><img src='./images/product-next.svg'></button>",
  });

  /////////////////////////////////////////////////////

  $(".product__content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product__name",
    focusOnSelect: true,
    fade: true,
    arrows: false,
  });

  $(".menu__btn").on("click", () => {
    $(".menu__list").toggleClass("menu__list--active");
  });
});
