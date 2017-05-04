$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    slideshowSpeed:7000,
    animationSpeed:1000,
    directionNav:false
  });
  setTimeout(function(){
  
	   $(".landing").fadeOut(1000)
  }, 1000);
  
  
  $(".lang").on('click', function () {
	if($("#main-wrapper").hasClass("en-lang")) {
  		$("#main-wrapper").removeClass("en-lang")
  		$("#main-wrapper").addClass("sc-lang")
  		$("body").attr("lang","sc")
  	

	}else{
  		$("#main-wrapper").addClass("en-lang")
  		$("#main-wrapper").removeClass("sc-lang")		
  		$("body").attr("lang","en")

	}
  })
  
  $(".email").on('click', function () {
	  $(".email-wrapper").addClass("active")
  })
  $(".event-btn").on('click', function () {
	  $(".event-wrapper").addClass("active")
	  $(".event-inner").addClass("active")

  })
  $(".contact-btn").on('click', function () {
	  $(".contact-wrapper").addClass("active")
	  $(".contact-inner").addClass("active")

  }) 
  
  $(".close-area").on('click', function () {
	  $(".contact-wrapper").removeClass("active")
	  $(".contact-inner").removeClass("active")
	  $(".event-wrapper").removeClass("active")
	  $(".event-inner").removeClass("active")
  }) 
  
  $(".email-wrapper").find("i").on('click', function () {
	  $(".email-wrapper").removeClass("active")
  })
  
  $("#store-btn").click( function () {
	  $(".shop-wrapper").addClass("active")
	  $(".home-page").addClass("active")
	  $(".shop-wrapper").stop(true,true).animate({
            scrollTop: 0
       });
       setTimeout(function(){
      	 $(".store-back-btn").addClass("active")
	  	 $(".store-back-btn-hight").addClass("active")
       }, 800);
       $(".download-mobile-pdf").addClass("active")
  }) 
  $(".store-back-btn").on('click', function () {
      	 $(".store-back-btn").removeClass("active")

       $(".download-mobile-pdf").removeClass("active")
       setTimeout(function(){
      	 $(".store-back-btn-hight").removeClass("active")

	   	$(".shop-wrapper").removeClass("active")
	   		$(".home-page").removeClass("active")
       }, 800);


  })   

  $(window).resize(function(){
	resizeSlider()
  })
  	resizeSlider()
  function resizeSlider(){
 	 windowHeight = $(window).height()
 	 windowWidth = $(window).width()
 	 eventHeight = windowHeight-180;
 	 
 	 $(".store-list").css("min-height",windowHeight+"px")
 	 
 	 if(windowWidth>767){
	shopHead = $(".shop-head").height()	
	windowHeight = $(window).height()
    tableTop = $(".head-title-wrapper").height()
    
	
	$(".shop-t").find("li").on('click', function () {

	  $(".shop-wrapper").stop(true,true).animate({
            scrollTop:tableTop-shopHead+145
       }, 800);	

	})
      $(".id_search").keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {  

 	  $(".shop-wrapper").stop(true,true).animate({
            scrollTop:tableTop-shopHead+145
       }, 800);	

    return false;  
  }
	});  





 	 $(".slide-image").height(windowHeight-260)	  
 	 $(".event-wrapper .event-inner").height(windowHeight)	
 	 $(".contact-wrapper .contact-inner").height(windowHeight)	
 	 $(".email-wrapper").height(windowHeight)	
 	 
 	 }else{

	$(".shop-t").find("li").on('click', function () {
	  $(".shop-wrapper").stop(true,true).animate({
            scrollTop:0
       }, 800);	

	})

 	 $(".slide-image").height(windowHeight-180)	
 	 $(".mobile-menu").height(windowHeight-180)	 
 	 $(".mobile-menu-item").height((windowHeight-180)/2)
 	 /*$(".event-wrapper .event-inner").height(eventHeight)	
 	 $(".contact-wrapper .contact-inner").height(eventHeight)	*/
 	 $(".email-wrapper").height(eventHeight)	
 	 $(".mobile-menu-item .event-btn").css("top",((eventHeight/4)-13))
 	 $(".mobile-menu-item .contact-btn").css("top",((eventHeight/4)-13))

 	 }

  }
  

  $(".shop-wrapper").scroll(function(){
    var top = $('.shop-wrapper').scrollTop()
    var tableTop = $("#table_example").offset().top

	if(tableTop<140){
		$(".shop-head").addClass("active")
	}else{
		$(".shop-head").removeClass("active")
	}
  })
  
  /* mobile */
  $(".atozselector").find("h4").on( "click", function(){
	if($(this).parent().hasClass("active")){
	  $(".download-mobile-pdf").addClass("active")

	  $(this).parent().removeClass("active")		
	}else{
	  $(this).parent().addClass("active")		
	  $(".download-mobile-pdf").removeClass("active")

	}

  })
  $(".atozselector").find(".atozlist li").each(function(){
	  $(this).on('click', function () {
		 dataSrc = $(this).attr("data-src")
		 $(".atozselector").removeClass("active")	
		 $(".atozselector").find("h4.aazz").html(dataSrc)
	  })
  })
  
  
  $(".menu-btn").on( "click", function(){
	if($(this).hasClass("active")){
	  $(this).removeClass("active")
	  $(".mobile-menu").removeClass("active")
	  $(".menu-btn").find("i").addClass("ion-navicon")
	  $(".menu-btn").find("i").removeClass("ion-android-close")

	}else{
	  $(this).addClass("active")
	  $(".mobile-menu").addClass("active")
	  $(".menu-btn").find("i").removeClass("ion-navicon")
	  $(".menu-btn").find("i").addClass("ion-android-close")
	}

  })  
  
  $(".email-click").on( "click", function(){
	  eVlaue = $(".email-form").find("input").val()
	  if(  !isValidEmailAddress( eVlaue ) ) { /* do stuff here */ 
	  	$(".email-warning").addClass("active")
  
	  }else{
	  	$(".email-warning").removeClass("active")
       setTimeout(function(){
		  $(".email-preload").fadeIn()
		  $(".success-message").addClass("active")
	  },400)
       setTimeout(function(){
		  $(".email-success").fadeIn()
	  },1000)		  
	  }	  

  }) 		  




  function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
	};
  	  

  
});