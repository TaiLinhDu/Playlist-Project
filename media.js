function Media(title,duration){
    this.title = title;
    this.duration = duration;
    this.isPlaying = false;

}
Media.prototype.play = function(){
    this.isPlaying = true;
    document.getElementById(this.title).play();

};

Media.prototype.stop = function(){
    this.isPlaying = false;
    document.getElementById(this.title).pause();
    //sound.pause();
    //sound.currentTime = 0;
};