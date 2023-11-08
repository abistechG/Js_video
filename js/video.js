var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.addEventListener("DOMContentLoaded", function () {
	const video = document.getElementById("player1");
	const playButton = document.getElementById("play");
	const pauseButton = document.getElementById("pause");
	const slowerButton = document.getElementById("slower");
	const fasterButton = document.getElementById("faster");
	const skipButton = document.getElementById("skip");
	const muteButton = document.getElementById("mute");
	const volumeSlider = document.getElementById("slider");
	const volumeDisplay = document.getElementById("volume");
	const vintageButton = document.getElementById("vintage");
	const originalButton = document.getElementById("orig");
  
	// Initialize the video
	video.autoplay = false;
	video.loop = false;
  
	playButton.addEventListener("click", function () {
	  if (video.paused) {
		video.play();
		volumeDisplay.textContent = `Volume: ${video.volume * 100}%`;
	  }
	});
  
	pauseButton.addEventListener("click", function () {
	  video.pause();
	});
  
	slowerButton.addEventListener("click", function () {
	  video.playbackRate -= 0.1;
	  console.log(`New speed: ${video.playbackRate}`);
	});
  
	fasterButton.addEventListener("click", function () {
	  video.playbackRate += 0.1;
	  console.log(`New speed: ${video.playbackRate}`);
	});
  
	skipButton.addEventListener("click", function () {
	  video.currentTime += 10;
	  if (video.currentTime > video.duration) {
		video.currentTime = 0;
	  }
	  console.log(`Current location: ${video.currentTime}`);
	});
  
	muteButton.addEventListener("click", function () {
	  video.muted = !video.muted;
	  muteButton.innerText = video.muted ? "Unmute" : "Mute";
	});
  
	volumeSlider.addEventListener("input", function () {
	  video.volume = volumeSlider.value / 100;
	  volumeDisplay.textContent = `Volume: ${volumeSlider.value}%`;
	});
  
	vintageButton.addEventListener("click", function () {
	  video.classList.add("oldSchool");
	});
  
	originalButton.addEventListener("click", function () {
	  video.classList.remove("oldSchool");
	});
  });
  
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

