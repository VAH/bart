$(function() {
	
//-----------------------------------VALIDATION-------------------------------------
//==================================================================================
	var expEmail = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	expLettersOnly = /^[а-яА-ЯёЁa-zA-Z\s]+$/,
	expPhone = /^([+]?[0-9\s-\(\)]{9,25})*$/;


	$('#mail-form').on( 'keyup', 'input', function() {
		validateField( $(this) );
	});

	function validateAllFields(){
		validateField($('#firstname'));
		validateField($('#lastname'));
		validateField($('#email'));
		validateField($('#phone'));
	};

	function validateField(field) {
		var value = field.val();

		switch( field.attr('id') ) {
			case 'firstname':
				validateFiledValue(expLettersOnly, value, field);	
			case 'lastname':
				validateFiledValue(expLettersOnly, value, field);				
				break;
			case 'email':
				validateFiledValue(expEmail, value, field);
				break;
			case 'phone':
				validateFiledValue(expPhone, value, field);
				break;
		}
	}

	function validateFiledValue(exp, value, field) {
		if( !validateLength(value) || !exp.test(value) ) {
			field.removeClass('valid');
			field.addClass('invalid');
		} else {
			field.removeClass('invalid');
			field.addClass('valid');
		}
	}

	function validateLength(value) {

		if(value.length < 1) {
			$('.error p').fadeIn();
			return false;
		} else return true;
}

//-------------------------------------POSTING--------------------------------------
//==================================================================================
	document.getElementsByClassName('submit')[0].onclick = function() {
		validateAllFields();
		if($('.email').hasClass('valid') && 
			$('.phone').hasClass('valid') && 
			$('.firstname').hasClass('valid') &&
			$('.lastname').hasClass('valid')) {
			sendEmail($('#email').val(), $('#phone').val(),$('#firstname').val(),$('#lastname').val(),$('#comment').val());
		}
	};

	function success() {

		function complete(){
			$(".loader").fadeOut();
			$(".success").fadeIn();
		};
		$(".loader").fadeIn();
		setTimeout(function(){ complete();}, 1500);
	}

	function sendEmail(email,phone,firstname,lastname) {
		$.ajax({
			url: "/js/sender.php",
			type : "POST",
			cache : false,
			data : { email: email , phone: phone, firstname: firstname,lastname:lastname},
			success: function(response){
				success();
			}
		});
	}
});