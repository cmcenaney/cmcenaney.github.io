$(document).ready(function(){
	$.getJSON('info.json', function(data){
		$.each(data, function(i,item){
			$('.items').append(
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

	$.getJSON('resume.json', function(data){
		$.each(data, function(i,item){
			$('.resume-items').append(
				'<div class="resume-box">'+
					'<h2>'+item.place+'</h2>'+
					'<p>'+item.position+'</p>'+
					'<p>'+item.date+'</p>'+
					'<ul>'+
						'<li>'+item.desc1+'</li>'+
						'<li>'+item.desc2+'</li>'+
					'</ul>'+
				'</div>'
			);
		});
	});
});