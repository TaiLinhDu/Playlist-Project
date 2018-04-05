var playlist = new Playlist();
var hereCometheSun = new Song("You're Beautiful", "The beatles","2:54");
var walkingOnSunshine = new Song("See You Again","Katrina and the Waves","3:43");

var arp = new Movie("ARP", 2013, "2:23:00")
playlist.add(arp);
playlist.add(hereCometheSun);

playlist.add(walkingOnSunshine);


////////////////////////////////////////////////////////
var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function(){
    playlist.play();
}

var nextButton = document.getElementById("next");

nextButton.onclick = function(){
    playlist.next();
    playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");

stopButton.onclick = function(){
    playlist.stop();
    playlist.renderInElement(playlistElement);
}