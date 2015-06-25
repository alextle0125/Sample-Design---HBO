$(document).ready(function (){
	$('.grid').mouseover(function (event){
		
		if (event.target.nodeName === 'DIV') {
			var container = $('.container'),
				targetBox = $(event.target),
				targetContent = $(event.target.firstElementChild),
				content;

			if ($(targetContent[0])[0]) {
				content = $(targetContent[0])[0].textContent;
			}

			targetBox.css('opacity', '0.5');

			if ($('.container span').length <= 1) {
				$('span').remove()
				container.prepend('<span>' + content + '</span>');
				$('.container span').css('height', ($(targetBox[0]).height() - 25));
				$('.container span').css('width', ($(targetBox[0]).width() - 25));
				$('.container span').css('left', targetBox[0].offsetLeft);
				$('.container span').css('top', targetBox[0].offsetTop);
			}

			targetBox.mouseout(function (event) {
				targetBox.css('opacity', '1');
				targetContent.css('float', '');
				targetContent.css('display','none');
			});		
		}
	});

	$('.container .purchase-btn').click(function (event){
		var title = event.target.parentNode.title;
		alert("You have made a purchase for " + title + ". Thank you, we hope you enjoy!");
	});
});