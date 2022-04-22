$(".tap-me").click(function(){
    $(".tap-title").fadeOut(1000);
    $('.circle-hidden').addClass('circle-reveal');
    $('.reveal-text').fadeIn(2000);
});

$(".tap-me-2").click(function(){
    $(".tap-title-2").fadeOut("slow", function(){
        $(".rot-reveal").toggleClass("rot");
        $('.reveal-text-2').fadeIn(2000);
    });
});


var observer = new IntersectionObserver(function(entries) { console.log(entries);
	if(entries[0]['isIntersecting'] === true) {
        if(entries[0]['intersectionRatio'] > 0.2)
            document.querySelector(".see-work").classList.remove('shrink');
			document.querySelector(".image-show").classList.remove('image-shrink');   
    }
}, { threshold: [0.2] });

observer.observe(document.querySelector("#moriarty"));