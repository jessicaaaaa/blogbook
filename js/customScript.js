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


// UIkit.modal('.modal-full', {bg-close: false});
});