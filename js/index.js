$(".TheatreArtcard").on("click", function () {
    var h = $('.TheatreArtcard').css('height');
    var image = document.querySelector("#IMGR1");
    console.log("test001");

    if (h == '465px') {
        $(".TheatreArtcard").animate({height: "560px"});
        image.style.transform = "rotate(180deg)"; 
        // $(".text").css("display", "none");
        $(".text1").css("background-color", "rgba(33, 37, 36, 0)");
        $(".text1 h3").css("color", "#fafaef00");
        document.querySelector(".text1").style.backdropFilter = "blur(0px)";



        console.log("test002");

    }

    else {
        $(".TheatreArtcard").animate({height: "465px"});
        image.style.transform = "rotate(0deg)"; 
        $(".text1").css("background-color", "rgba(33, 37, 36, 0.527)");
        $(".text1 h3").css("color", "#fafaef");
        document.querySelector(".text1").style.backdropFilter = "blur(10px)";
        
    }
    
    
});

$(".SalesEngineercard").on("click", function () {
   var h = $(".SalesEngineercard").css("height");
   var image = document.querySelector("#IMGR2");
    
   if (h == "465px") {
    $(".SalesEngineercard").animate({height: "560px"});
    image.style.transform = "rotate(180deg)"; 
    $(".text2").css("background-color", "rgba(33, 37, 36, 0)");
    $(".text2 h3").css("color", "#fafaef00");
    document.querySelector(".text2").style.backdropFilter = "blur(0px)";
   }
   else {
    $(".SalesEngineercard").animate({height: "465px"});
    image.style.transform = "rotate(0deg)"; 
    $(".text2").css("background-color", "rgba(33, 37, 36, 0.527)");
    $(".text2 h3").css("color", "#fafaef");
    document.querySelector(".text2").style.backdropFilter = "blur(10px)";
   }

});

$(".ProjectManagercard").on("click", function () {
    var h = $(".ProjectManagercard").css("height");
    var image = document.querySelector("#IMGR3");
    if (h == "465px"){
        $(".ProjectManagercard").animate({height: "560px"});
        image.style.transform = "rotate(180deg)"; 
        $(".text3").css("background-color", "rgba(33, 37, 36, 0)");
        $(".text3 h3").css("color", "#fafaef00");
        document.querySelector(".text3").style.backdropFilter = "blur(0px)";
    }
    else{
        $(".ProjectManagercard").animate({height: "465px"});
        image.style.transform = "rotate(0deg)"; 
        $(".text3").css("background-color", "rgba(33, 37, 36, 0.527)");
        $(".text3 h3").css("color", "#fafaef");
        document.querySelector(".text3").style.backdropFilter = "blur(10px)";
    }
   

});