  $(".lang").on('click', function () {
	if($("#main-wrapper").hasClass("en-lang")) {
  		$("#main-wrapper").removeClass("en-lang")
  		$("#main-wrapper").addClass("sc-lang")
  		$("body").attr("lang","sc")
  		$("#res_msg_lang").attr("value","zh")
  	

	}else{
  		$("#main-wrapper").addClass("en-lang")
  		$("#main-wrapper").removeClass("sc-lang")		
  		$("body").attr("lang","en")
  		$("#res_msg_lang").attr("value","en")

	}
  })

$("#myform").submit(function(e) {

var formData = new FormData(document.getElementsByName('myForm')[0]);// yourForm: form selector        



var emailID = document.forms["myform"]["email"].value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    if (atpos < 1 || ( dotpos - atpos < 2 ))
    {
        alert("Please enter correct email ID")
        return false;
    }else{

            $.ajax({
	            
                type: "POST",
                url: "email-data.json",// where you wanna post
                data: formData,
                processData: false,
                contentType: false,
                error: function(jqXHR, textStatus, errorMessage) {
                   console.log(errorMessage); // Optional
                },
                success: function(data) {
				$.each( data, function( key, val ) {
					$(".val-a").find("h5").html(data.res_msg)
				});
	                
                } 
            });
	}
    e.preventDefault(); // avoid to execute the actual submit of the form.
});