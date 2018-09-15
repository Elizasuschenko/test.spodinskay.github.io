function check() {
	var name = $('#name').val();
    var email = $('#email').val();
    var pasword = $('#pasword').val();
    var at = email.indexOf("@");
    
        if (name.length==0){
            $('#name').attr('placeholder', 'Введите ваше имя').addClass('red');
            return false
        }
        else{
            $('#name').removeClass('red')
        }
        if (email.length==0 || at<1){
            $('#email').attr('placeholder', 'Неверный формат email').val('').addClass('red');
            return false
        }
        else{
            $('#email').removeClass('red')
        }
        if (pasword.length==0){
            $('#pasword').attr('placeholder', 'Придумайте новый пароль').addClass('red');
            return false
        }
        else{
            $('#pasword').removeClass('red')
        }

}

$('.pink button').click(function() {
	$('.pink').css('display','none').next().slideToggle(300).css('display','flex')
})
$('.orange label').click(function() {
	$('.orange button').fadeIn();
	$('.orange-answer').fadeOut().slideToggle(300).css('display','flex')
})
$('.orange button').click(function() {
	$('.orange').fadeOut().css('display','none').next().slideToggle(300).css('display','flex')
	$('.orange-answer').fadeOut();
})
$('.yellow .first-label').click(function() {
	$('.yellow button').fadeIn();
	$('.yellow-answer').fadeOut(300);
	$('.yellow-answer-one').slideToggle(400).css('display','flex')
})
$('.yellow .two-label').click(function() {
	$('.yellow-answer').fadeOut(300);
	$('.yellow button').fadeIn();
	$('.yellow-answer-two').slideToggle(400).css('display','flex')
})
$('.yellow button').click(function() {
	$('.yellow-answer').fadeOut();
	$('.yellow').css('display','none').next().slideToggle(300).css('display','flex');
})


    $('#submit').prop('disabled', false);
    $('#checkbox1').change(function() {
        $('#submit').prop('disabled', function(i, val) {
            return !val;
        }) });

