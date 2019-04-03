// var bark = document.getElementById('barkButton');

// bark.addEventListener("click", barkFunction);
var dogSound = document.getElementById('speakDog');
var thatsAllEvent = new CustomEvent('thatsAll');
var proxy = document.querySelector('#proxy');
var curb = document.querySelector('#fin');



function barkFunction(){
	dogSound.play();
	proxy.dispatchEvent(thatsAllEvent);
}

var goodBoy = document.getElementById("praise");

// dogSound.onended = function() {
// 	goodBoy.play();
// }

dogSound.addEventListener("ended", function(){
	goodBoy.play();
});

proxy.addEventListener('thatsAll', thatsAllFolks);

function thatsAllFolks(){
	setTimeout(function(){
		curb.play();
	}, 14000);
}

