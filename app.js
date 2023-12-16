
const apiKey = 'AIzaSyAsZWsFoEHookJl4jtOdDgi5tzm2vk8kKY';
const videoId = 'xj421ikSRCo';

// Function to load the YouTube API
function onYouTubeIframeAPIReady() {
  const player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// Function when the player is ready
function onPlayerReady(event) {
  event.target.playVideo();
}

// Function when the player state changes
function onPlayerStateChange(event) {
  // You can add custom logic based on video state changes here
}
