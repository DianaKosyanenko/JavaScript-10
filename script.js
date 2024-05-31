const containerEl = document.querySelector('div.container');
const VideoEl = document.createElement('video');
VideoEl.setAttribute('src', 'media/istockphoto-127737092-640_adpp_is.mp4');
VideoEl.classList.add('video');
containerEl.appendChild(VideoEl);
const mainEl = document.createElement('div');
mainEl.classList.add('mainElem');
containerEl.appendChild(mainEl);
const divPlay = document.createElement('div');
const pauseEl = document.createElement('div');
divPlay.classList.add('play');
pauseEl.classList.add('pause');
const stopEl = document.createElement('div');
stopEl.classList.add('btnStop');
const stopVolume = document.createElement('div');
stopVolume.classList.add('btnStopVolume');

divPlay.addEventListener('click', function () {
    VideoEl.play();
    console.log(VideoEl.duration, VideoEl.currentTime);
    
})

pauseEl.addEventListener('click', function () {
    VideoEl.pause();
    console.log(VideoEl.duration, VideoEl.currentTime);
    
})
const rangeEl = document.createElement('input');
rangeEl.setAttribute('type', 'range');
rangeEl.setAttribute('min', '0');
rangeEl.setAttribute('max','100');
rangeEl.setAttribute('value', '0');
rangeEl.addEventListener('change', function (e) {
    VideoEl.currentTime = (e.target.value / 100) * VideoEl.duration;
    
})

VideoEl.addEventListener('timeupdate', function (e) {
    rangeEl.setAttribute('value', Math.round((VideoEl.currentTime/VideoEl.duration) * 100)
);
    
})
const volumeEl = document.createElement('input');
 volumeEl.setAttribute('type', 'range');
 volumeEl.setAttribute('min', '0');
 volumeEl.setAttribute('max','100');
 volumeEl.setAttribute('value', '0');

VideoEl.addEventListener('loadeddata', function () {
    volumeEl.setAttribute('value', VideoEl.volume*100)
    
})
volumeEl.addEventListener('change', function (e) {
    VideoEl.volume = e.target.value / 100;
    
})
stopEl.addEventListener('click', function (e) {
    VideoEl.pause();
    VideoEl.currentTime = 0;

    
})
stopVolume.addEventListener('click', function () {
    volumeEl.value = 0;
    VideoEl.volume = 0;
    
})
mainEl.appendChild(stopEl);
mainEl.appendChild(divPlay);
mainEl.appendChild(pauseEl);
mainEl.appendChild(stopVolume);
mainEl.appendChild(volumeEl);
mainEl.appendChild(rangeEl);