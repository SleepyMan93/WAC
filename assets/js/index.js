function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  function sticky() {
    var sticks = document.querySelectorAll(".sticky");
  
    for (var i = 0; i < sticks.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = sticks[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        sticks[i].classList.add("active");
      } else {
        sticks[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);