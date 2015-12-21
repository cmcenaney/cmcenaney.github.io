$(document).ready(function(){
	$.getJSON('info.json', function(data){
		$.each(data, function(i,item){
			$('.items').append(
				'<div class="col-md-4 box">'+
					'<a href="'+item.link+'" target="_blank">'+
						'<div class="boxInner">'+
							'<div class="titleBox">'+
								'<img src="'+item.icon+'"/>'+
								'<p>'+item.name+'</p>'+
							'</div>'+
							'<img class="main-image" src="'+item.img+'"></img>'+
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