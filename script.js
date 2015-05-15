$(document).ready(function(){
	$.getJSON('info.json', function(data){
		// $.each(data, function(i, item){
		// 	$('.objects').append(
		// 		'<div class="item">'+
		// 			'<a href="'+item.link+'" target="_blank">'+
		// 				'<div class="main-image">'+
		// 					'<img src="'+item.img+'"></img>'+
		// 				'</div>'+
		// 				'<div class="label">'+
		// 					'<img src="'+item.icon+'"></img>'+
		// 					'<h3 class="name">'+item.name+'</h3>'+
		// 				'</div>'+
		// 			'</a>'+
		// 		'</div>'	
		// 	);
		// });

		$.each(data, function(i,item){
			$('.wrap').append(
				'<div class="box">'+
					'<a href="'+item.link+'" target="_blank">'+
						'<div class="boxInner">'+
							'<img class="main-image" src="'+item.img+'"></img>'+
							'<div class="titleBox">'+
								'<img src="'+item.icon+'"/>'+
								'<p>'+item.name+'</p>'+
							'</div>'+
						'</div>'+
					'</a>'+
				'</div>'
			);
		});
	});
});