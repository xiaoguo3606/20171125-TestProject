
window.onload=function(){
	$('#index_bg').css('margin-left',-0.5*$('#index_bg').width());
}

$(window).ready(function(){
	setTimeout(function(){
		$('#content').fadeIn(1000,function(){
			setTimeout(function(){
				$('.content>p:nth-child(1)').animate({opacity:'1'},300,function(){
					$('.content>p:nth-child(2)').animate({opacity:'1'},300,function(){
						$('.content>p:nth-child(3)').animate({opacity:'1'},300,function(){
							$('.content>p:nth-child(4)').animate({opacity:'1'},300,function(){
								$('.content>p:nth-child(5)').animate({opacity:'1'},50,function(){
									$('.content>p:nth-child(6)').animate({opacity:'1'},500,function(){
										$('#btn').fadeIn(300);
									});
								});
							})
						})
					})
				});
			},200);
		});
	},2000);
})
