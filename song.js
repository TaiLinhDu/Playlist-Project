/*
var Song = {
    titel: "",
    artist: "",
    duration: "",
    isPlaying: false
    play : function () {

    }
}
*/
function Song(title,artist,duration){
    Media.call(this,title,duration);
    this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);
/*
Song.prototype.play = function(){
    this.isPlaying = true;
    if(this.isPlaying){
        document.getElementById(this.title).play();
    }

};

Song.prototype.stop = function(){
    this.isPlaying = false;
   document.getElementById(this.title).pause();
    //sound.pause();
    //sound.currentTime = 0;
};
*/
Song.prototype.toHTML = function(){
    var htmlString = '<li';
    if(this.isPlaying){
        htmlString += ' class="current"';
    }
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' - ';
    htmlString += this.artist;
    htmlString += '<span class="duration"';
    htmlString += this.duration;
    htmlString += '</span></li>';
    return htmlString;
};
