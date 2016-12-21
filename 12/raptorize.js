function raptorize() {

	var _this = $(this);
	var audioSupported = false;

	// Stupid Browser Checking which should be in jQuery Support
	if ($.browser.mozilla && $.browser.version.substr(0, 5) >= "1.9.2" || $.browser.webkit) {
		audioSupported = true;
	}

	//Raptor Vars
	var raptorImageMarkup = '<img id="elRaptor" style="display: none" src="raptor.png" />'
	var raptorAudioMarkup = '<audio id="elRaptorShriek" preload="auto"><source src="raptor-sound.mp3" /><source src="raptor-sound.ogg" /></audio>';
	var locked = false;

	//Append Raptor and Style
	$('body').append(raptorImageMarkup);
		if(audioSupported) { $('body').append(raptorAudioMarkup); }
	var raptor = $('#elRaptor').css({
		"position":"fixed",
		"bottom": "-700px",
		"right" : "0",
		"display" : "block"
	})

	locked = true;

	//Sound Hilarity
	if(audioSupported) {
		function playSound() {
			document.getElementById('elRaptorShriek').play();
		}
		playSound();
	}

	// Movement Hilarity
	raptor.animate({
		"bottom" : "0"
	}, function() {
		$(this).animate({
			"bottom" : "-130px"
		}, 100, function() {
			var offset = (($(this).position().left)+400);
			$(this).delay(300).animate({
				"right" : offset
			}, 2200, function() {
				raptor = $('#elRaptor').css({
					"bottom": "-700px",
					"right" : "0"
				})
				locked = false;
			})
		});
	});

}
