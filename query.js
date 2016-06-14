// JavaScript Document

function dofirst() 
{
        var button = document.getElementById("register");
        button.addEventListener("click",saveSession,false);
 }
function saveSession()
{
        var username=document.getElementById("username").value;
		var pwd=document.getElementById("pwd").value;
        var email=document.getElementById("email").value;
		
		
		var question01=$('#securityqs01 option:selected').text();
		
		var answer01=document.getElementById("securityans01").value;
		
		var question02=$('#securityqs02 option:selected').text();
		
		var answer02=document.getElementById("securityans02").value;
		
		var mobile=document.getElementById("mobile").value;
		var location=document.getElementById("location").value;
		var area=document.getElementById("area").value;
		
        sessionStorage.setItem("username",username);     
		sessionStorage.setItem("password",pwd);  
		sessionStorage.setItem("email",email);   
		sessionStorage.setItem("question01",question01); 
		sessionStorage.setItem("answer01",answer01); 
		sessionStorage.setItem("question02",question02); 
		sessionStorage.setItem("answer02",answer02); 
		sessionStorage.setItem("mobile",mobile); 
		sessionStorage.setItem("location",location); 
		sessionStorage.setItem("area",area); 

}
   		window.addEventListener("load",dofirst,false);

 function checkValidateForm() {
    var name = document.forms["myForm"]["username"].value;
	var password = document.forms["myForm"]["pwd"].value;
	
    if (name == password) {
        alert("Username and Password cannot be the same!");
		resetPassword();
        return false;
    }
	
	<!--hasWhiteSpace();-->
}

function resetPassword() {
	$('#pwd').val("");
}

jQuery(function($) {
$("#pwd").on("keydown", function () {
        var score = 0;
        var a = $(this).val();
		var username = $("#username").val();
        var desc = new Array();
 
        // strength desc
        desc[0] = "Too short";
        desc[1] = "Weak";
        desc[2] = "Good";
        desc[3] = "Strong";
        desc[4] = "Very Strong";
 
        $("#pwd_strength_wrap").fadeIn(400);
		$("#verifypwd").prop("disabled", false);
         
        // password 7-20 characters in length
		var disabled = false;
        if (a.length >= 7 && a.length <= 20) {
            $("#length").removeClass("invalid").addClass("valid");
            score++;
			$("#first_checkbox_btn").prop('checked', true);
			$("#verifypwd").prop("disabled", false);
        } else {
			$("#verifypwd").prop("disabled", true);
			disabled = true;
            $("#length").removeClass("valid").addClass("invalid");		
        }

        // at least 1 numeric character in password
        if (a.match(/\d/)) {
            $("#pnum").removeClass("invalid").addClass("valid");
            score++;
			$("#second_checkbox_btn").prop('checked', true);
        } else {
            $("#pnum").removeClass("valid").addClass("invalid");
        }
		 
 		// at least 4 alpha characters in password
        if ((a.match(/[A-Z]/)) && a.length >= 4) {
            $("#alpha").removeClass("invalid").addClass("valid");
            score++;
			$("#third_checkbox_btn").prop('checked', true);
        } else {
            $("#alpha").removeClass("valid").addClass("invalid");
        }

 
        // at least 1 special character in password
		if ( a.match(/.[!,#,$,%,(,)]/) ) {
            $("#spchar").removeClass("invalid").addClass("valid");
            score++;
			$("#fourth_checkbox_btn").prop('checked', true);
        } else {
            $("#spchar").removeClass("valid").addClass("invalid");
        }
		
        if(a.length > 0) {
            //show strength text
            $("#passwordDescription").text(desc[score]);
            // show indicator
            $("#passwordStrength").removeClass().addClass("strength"+score);
        } else {
            $("#passwordDescription").text("Password not entered");
            $("#passwordStrength").removeClass().addClass("strength"+score);
        }
		
		var hasSpace = $('#pwd').val().indexOf(' ')>=0;
		if(hasSpace)
		{
			$("#spacePwd").fadeIn(800);
			disabled = true;
			$("#verifypwd").prop("disabled", true);
		}
		else{
			$("#spacePwd").fadeOut(800);
		}
		if (disabled == false)
		{
			
			$("#verifypwd").prop("disabled", false);
		}
		
  }
);

});
 
jQuery(function($) {
$("#pwd").blur(function () {
        $("#pwd_strength_wrap").fadeOut(400);
});
});

jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

function hasWhiteSpace() {
// if the entered password has space
		var hasSpace = $('#pwd').val().indexOf(' ')>=0;
		if(hasSpace)
		{
			<!--alert("Password should not contain spaces");-->
			$("#spacePwd").fadeIn(400);
			<!--resetPassword();-->
		}
}

function checkPasswordMatch() {
    var password = $("#pwd").val();
    var confirmPassword = $("#verifypwd").val();
	
	$("#divCheckPasswordMatch").fadeIn(400);

    if (password != confirmPassword) 
	{
		$("#divCheckPasswordMatch").html("Passwords do not match!");
		$("#divCheckPasswordMatch").fadeOut(800);
	}
    else
	{ 
		$("#divCheckPasswordMatch").html("Passwords match.");
		$("#divCheckPasswordMatch").fadeOut(800);
	}
}

function checkEmailMatch() {
    var email = $("#email").val();
    var confirmEmail = $("#verifyemail").val();
	
	$("#divCheckEmailMatch").fadeIn(400);

    if (email != confirmEmail) 
	{
		$("#divCheckEmailMatch").html("Emails do not match!");
		$("#divCheckEmailMatch").fadeOut(800);
	}
    else
	{ 
		$("#divCheckEmailMatch").html("Emails match.");
		$("#divCheckEmailMatch").fadeOut(800);
	}
}
