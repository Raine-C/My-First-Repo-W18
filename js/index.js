$(".TheatreArtcard").on("click", function () {
    var h = $('.TheatreArtcard').css('height');
    var image = document.querySelector("#IMGR");
    console.log("test001");

    if (h == '465px') {
        $(".TheatreArtcard").animate({height: "560px"});
        image.style.transform = "rotate(180deg)"; 
        // $(".text").css("display", "none");
        $(".text1").css("background-color", "rgba(27, 35, 33, 0)");
        $(".text1 h3").css("color", "#fafaef00");

        console.log("test002");

    }

    else {
        $(".TheatreArtcard").animate({height: "465px"});
        image.style.transform = "rotate(0deg)"; 
        $(".text1").css("background-color", "rgba(27, 35, 33, 0.527)");
        $(".text1 h3").css("color", "#fafaef");
        
    }
    
    
});

$(".SalesEngineercard").on("click", function () {
   var h = $(".SalesEngineercard").css("height");
    
   if (h == "465px") {
    $(".SalesEngineercard").animate({height: "560px"});
    $(".text2").css("background-color", "rgba(27, 35, 33, 0)");
    $(".text2 h3").css("color", "#fafaef00");
   }
   else {
    $(".SalesEngineercard").animate({height: "465px"});
    $(".text2").css("background-color", "rgba(27, 35, 33, 0.527)");
    $(".text2 h3").css("color", "#fafaef");
   }

});

$(".ProjectManagercard").on("click", function () {
    var h = $(".ProjectManagercard").css("height");
    if (h == "465px"){
        $(".ProjectManagercard").animate({height: "560px"});
        $(".text3").css("background-color", "rgba(27, 35, 33, 0)");
        $(".text3 h3").css("color", "#fafaef00");
    }
    else{
        $(".ProjectManagercard").animate({height: "465px"});
        $(".text3").css("background-color", "rgba(27, 35, 33, 0.527)");
        $(".text3 h3").css("color", "#fafaef");
    }
   

});