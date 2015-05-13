$(document).ready(function(){
	$.getJSON('info.json', function(data){
		$.each(data, function(i, item){
			$('.container').append(
				'<div class="item">'+
					'<img src="'+item.img+'"></img>'+
					'<h3 class="name"><a href="'+item.link+'" target="_blank">'+item.name+'</a></h3>'+
					
				'</div>'
			);
			console.log(item);
		});
	});
});