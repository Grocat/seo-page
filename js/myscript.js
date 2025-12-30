document.addEventListener("DOMContentLoaded", function () {

  const questions = document.querySelectorAll(
    ".new_seo_faq_loop .new_fquestion"
  );

  questions.forEach((question) => {
    question.addEventListener("click", function () {

      const parent = this.closest(".new_seo_faq_loop");
      const isActive = parent.classList.contains("new_active");

      // Close all FAQs
      document.querySelectorAll(".new_seo_faq_loop").forEach((item) => {
        item.classList.remove("new_active");
        const answer = item.querySelector("[itemprop='acceptedAnswer']");
        if (answer) answer.style.display = "none";
      });

      // Toggle current FAQ
      if (!isActive) {
        parent.classList.add("new_active");
        const answer = parent.querySelector("[itemprop='acceptedAnswer']");
        if (answer) answer.style.display = "block";
      }
    });
  });

});

jQuery(document).ready(function ($) {

  $(".parents-video-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,

    responsive: {
      0: {
        items: 1 // Mobile
      },
      768: {
        items: 2 // Tablet
      },
      1024: {
        items: 3 // Desktop
      }
    }
  });

});


// Owl Carousel initializations
$(document).ready(function () {
  $('.brand-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: "linear",
    autoHeight: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    autoplaySpeed: 3000,
    navText: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 4
      }
    }
  });

});

  $(document).ready(function () {
    $(".parent_new_test").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: true,
      nav: false,
      responsive: {
        0:   { items: 1 },
        600: { items: 2 },
        1000:{ items: 3 }
      }
    });
  });

