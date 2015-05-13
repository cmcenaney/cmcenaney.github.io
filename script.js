$(document).ready(function(){
	$.getJSON('info.json', function(data){
		$.each(data, function(i, item){
			$('.container').append(
				'<div class="item">'+
					'<a href="'+item.link+'" target="_blank">'+
						'<img src="'+item.img+'"></img>'+
						'<img class="icon" src="'+item.icon+'"></img>'+
						'<h3 class="name">'+item.name+'</h3>'+
					'</a>'+
				'</div>'
			);
			console.log(item);
		});
	});
});