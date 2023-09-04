$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 10000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now) + "+");
          },
        }
      );
  });
});

var btn = document.getElementById("btn");

window.addEventListener("scroll", function () {
  "use strict";

  if (scrollY > 1200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.onclick = function () {
  "use strict";
  var count = 0;

  var x = setInterval(function () {
    "use strict";

    window.scrollTo(0, scrollY - count);

    count++;

    if (scrollY == 0) {
      clearInterval(x);
    }
  }, 20);
};

$(document).ready(function () {
  // Fakes the loading setting a timeout
  setTimeout(function () {
    $("body").addClass("loaded");
  }, 3500);
});

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".trigger",
//     start: "top top",
//     end: "+=1000",
//     scrub: 1,
//     pin: true,
//     markers: true,
//   },
// });
// tl.to(".box", { yPercent: 350, duration: 1 });
// tl.to(".box", { rotation: 360, duration: 3 });
// tl.to(".box", { xPercent: 350, duration: 1 });
