const musicContainer = document.querySelector('.music__container');
const playBtn = document.querySelector('#prev');
const prevBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress__container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

//song title
const songs = ['GRg-18', 'summer', 'ukulele'];

//keep track of songs
let songIndex = 0;

//load song
loadSong(songs[songIndex])

//update song details
function loadSong(song){
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}