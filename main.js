window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}