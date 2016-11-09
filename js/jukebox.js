$(document).ready(function(){
  menu();
  play();
  pause();
  show();
});

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
var artists = Object.keys(jukeboxSongs);
var theArtist = artists[Math.floor(Math.random()) * artists.length];
var songToPlay = jukeboxSongs[theArtist];

/////////////////////
// Named Functions //
/////////////////////

function menuHandler(e) {
  $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
}

function playHandler(e) {
  $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
  return "now playing " + songToPlay + " by " + theArtist;
}

function pauseHandler(e) {
  $('#songPaused').html(songToPlay + " is paused");
}

function showHandler(e) {
  var songs = "";
  for (var key in jukeboxSongs) {
    songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
  }
  $('#showSongs').html(songs);
}

//////////////////////////////
// Where functions are used //
//////////////////////////////

function randomNumber() {
  return Math.floor(Math.random());
}

function menu() {
  $('#menu').on('click', menuHandler);
}

function play() {
  $('#play').on('click', playHandler);
}

function pause() {
  $('#pause').on('click', pauseHandler);
}

function show() {
  $('#show').on('click', showHandler);
}
