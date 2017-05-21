$(document).ready(function(){ 

$('.follow-btn').click(function(e){
		e.preventDefault();
		$('.unfollow-btn').css({'display': 'block'});
		$('.follow-btn').css({'display': 'none'});
	});

$('.unfollow-btn').click(function(e){
		e.preventDefault();
		$('.follow-btn').css({'display': 'block'});
		$('.unfollow-btn').css({'display': 'none'});
	});

$('.reply-btn1').click(function(e){
		e.preventDefault();
		$('.replycomment-container1').css({'display': 'block'});
	});
$('.reply-btn2').click(function(e){
		e.preventDefault();
		$('.replycomment-container2').css({'display': 'block'});
	});


// UIkit.modal('.modal-full', {bg-close: false});
});