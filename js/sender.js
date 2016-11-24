$(function() {
	
//-----------------------------------VALIDATION-------------------------------------
//==================================================================================
	var expEmail = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	expLettersOnly = /^[а-яА-ЯёЁa-zA-Z\s]+$/,
	expPhone = /^([+]?[0-9\s-\(\)]{9,25})*$/;


	$('#mail-form').on( 'keyup', 'input', function() {
		validateField( $(this) );
	});

	function validateAllFields(field){

	}

	function validateField(field) {
		var value = field.val();

		if( value.length > 0 ) {
			switch( field.attr('id') ) {
				case 'name':
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
	}

	function validateFiledValue(exp, value, field) {
		if( !exp.test(value) ) {
			field.removeClass('valid');
			field.addClass('invalid');
		} else {
			field.removeClass('invalid');
			field.addClass('valid');
		}
	}

	function validateLength(value, minLength) {
		return( $.trim(value).length > minLength );
	}

//-------------------------------------POSTING--------------------------------------
//==================================================================================
	document.getElementsByClassName('submit')[0].onclick = function() {
		if($('.email').hasClass('valid') && 
			$('.phone').hasClass('valid') && 
			$('.name').hasClass('valid')) {
			sendEmail($('#email').val(), $('#phone').val(),$('#name').val(),$('#comment').val());
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

	function sendEmail(email,phone,name,comment) {
		$.ajax({
			url: "http://pastela.com.ua/bart/js/sender.php",
			type : "POST",
			cache : false,
			data : { email: email , phone: phone, name: name, comment: comment},
			success: function(response){
				if(response.indexOf("TRUE") !== -1){
					success();
				}
			}
		});
	}
});