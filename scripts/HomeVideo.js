const videoSources = [
    "./static/02f62dd338b041b9960d79ea514773ee.mp4",
    "./static/3c919ae7359149ca970e45206bfd4911.mp4",
    
];

let videoIndex = 0; 
const videoElement = document.getElementById('myvideo');


function playNextVideo() {
    if (videoIndex >= videoSources.length) {
        videoIndex = 0;  
    }

    videoElement.src = videoSources[videoIndex];
    videoElement.play();  
    videoIndex++;  
}


videoElement.addEventListener('ended', playNextVideo);

playNextVideo();
