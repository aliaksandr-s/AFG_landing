$(document).ready(function() {

	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	})

	$(".arrow-bottom").click(function(){
		$("html, body").animate({ scrollTop: $(".section_1").offset().top + 10 }, "slow");
		return false;
	})

	$("#to-top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
 		return false;
	})

	$(".section_4").waypoint(function() {

		$(".section_4 .tile").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("tile-off").addClass("tile-on");
			}, 200*index);
		});

	}, {
		offset : "10%"
	});


	$(".section_6").waypoint(function() {

		$(".section_6 .person").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("person-off").addClass("person-on");
			}, 200*index);
		});

	}, {
		offset : "35%"
	});

	$(".section_2").waypoint(function() {

		$(".col-md-2").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});

	}, {
		offset : "35%"
	});

	$(".section_8").waypoint(function() {

		$(".col-sm-3").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});

	}, {
		offset : "35%"
	});


	$(".section_5").waypoint(function() {

		$(".section_5 .slice").each(function(index) {
			var ths = $(this);
			setTimeout(function() {
				var myAnimation = new DrawFillSVG({
					elementId: "slice-svg-" + index
				})
			}, 300*index);
		});

	this.destroy();
	},
	{
		offset : "50%"
	});

	$(".slider").owlCarousel({
		items: 1,
		nav :true,
		loop: true,
		navText: "",
		smartSpeed: 700,
		autoplay: true
	});

	$(".section-head h2, .section-head p").animated("fadeIn");
	$(".col-sm-4").animated("fadeInUp");
	$(".section_7 .slider .slide").animated("fadeIn");

	//popup
	$('.section-bottom .buttons').click(function(){
		$('#callback h4').html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
	    type: 'inline'
	});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {

				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
