$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
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
