// sidebar function
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// header scroll function
window.addEventListener("scroll", function () {
  let = navheader = document.getElementById("nav_header");
  if (window.pageYOffset > 0) {
    navheader.classList.add("nav-bar");
  } else {
    navheader.classList.remove("nav-bar");
  }
});
// slick slider function
$(".variable-width").slick({
  dots: true,
  infinite: true,
  speed: 250,
  slidesToShow: 2,
  tabIndex: false,
  // centerMode: true,
  variableWidth: true,
  // autoplay: true,
  prevArrow:
    ' <span class="priv-arrow" style="font-size:29px;padding-left:10px;padding-top:2px"><i class="bi bi-arrow-right-short"></i></span>',
  nextArrow:
    ' <span class="next-arrow" style="font-size:29px;padding-left:10px;padding-top:2px"><i class="bi bi-arrow-left-short"></i></span>',
});
