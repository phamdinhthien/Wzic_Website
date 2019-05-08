// JavaScript Document

$(document).ready(function (e) {
    initPage();
    $('.listOfSongs li').click(function (e) {
        chooseSongFromLists($(this));
    });
});
/*--------------------------------------------*/
/*-Init the Page when starting entering the Page-*/
/*--------------------------------------------*/

function initPage() {
    song.pause();
    $('#play img').attr('src', "../images/Songs/Play.png");
    $('.dish img').css('animation-play-state', 'paused');
    $(".dish img").css('background', '#000');
}

var currentSong = 0; // the current song
/*--------------------------------------------*/
/*-------------List of Songs-----------------*/
/*------------------------------------------*/
var songs = ["../musics/Counting Stars - OneRepublic.mp3", "../musics/EmCuaNgayHomQua-SonTungMTP-2882720_hq.mp3", "../musics/Hoài Lâm – Như Những Phút Ban Đầu .mp3", "../musics/You Took My Heart Away.mp3", "../musics/Perfect.mp3"];
var titles = ["Counting Stars", "Em Cua Ngay Hom Qua", "Như Những Phút Ban Đầu", "You Took My Heart Away", "Perfect"];
var artists = ["OneRepublic", "MTP", "Hoài Lâm", "MLTR", "Ed Sheeran"];
var poster = ["../images/Songs/theonerepublic.png", "../images/Songs/MTP.jpg", "../images/Songs/hoaiLam.jpg", "../images/Songs/MLTR.jpg", "../images/Songs/Perfect.jpg"];
var progressBar = $('#progressBar');
var currentTime = $('#currentTime');
var duration = $('#duration');
var bar = $('.Bar');
var progressBar = $('#progressBar');
var barSize = 300;
var decreaseVol = $('#decreaseVolume');
var increaseVol = $('#increaseVolume');
var iconVol = $('#iconVolume');

var song = new Audio(); // Init audio

/*--------------------------------------------*/
/*-------------Function : to choose a song from the list-----------------*/
/*------------------------------------------*/
function chooseSongFromLists(n) {
    var number = n.attr('nth'); // the number of the song in the list
    currentSong = number;
    song.src = songs[parseFloat(number)]; // src of the song
    song.play(); // play the song
    $('#play img').attr('src', "../images/Songs/Pause.png"); // play || pause Button
    $('.dish img').css('animation-play-state', 'running'); //set rotate the dish
    $(".dish img").attr("src", poster[parseFloat(number)]); // set image of the song
    $(".title").html('Song : ' + titles[number] + '<br>' + 'Artist : ' + artists[number]);
}

/*--------------------------------------------*/
/*-------------Function : to play a song-----------------*/
/*------------------------------------------*/
function playSong() {
    song.src = songs[currentSong];  //set the source of 0th song 
    song.play();    // play the song
}

/*--------------------------------------------*/
/*-------------Function : to handle "Play || Pause" Button-----------------*/
/*------------------------------------------*/
function playOrPause() {
    if (song.paused) {
        song.play(); // play the song
        $('#play img').attr('src', "../images/Songs/Pause.png"); // Play Button
        $('.dish img').css('animation-play-state', 'running'); // set rotate the dish
    }
    else {
        song.pause(); // Pause the song
        $('#play img').attr('src', "../images/Songs/Play.png"); // Pause Button
        $('.dish img').css('animation-play-state', 'paused'); // set stop the dish
    }
}

/*--------------------------------------------*/
/*-------------Function : to handle "Next Song" Button -----------------*/
/*------------------------------------------*/
function nextSong() {
    currentSong++;
    if (currentSong > 2) {
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src", "../images/Songs/Pause.png"); // Set Play Button
    $(".dish img").attr("src", poster[currentSong]); // set image of the song
    $(".title").html('Song : ' + titles[currentSong] + '<br>' + 'Artist : ' + artists[currentSong]);
}

/*--------------------------------------------*/
/*-------------Function : to handle "Previous Song" Button -----------------*/
/*------------------------------------------*/
function preSong() {
    currentSong--;

    if (currentSong < 0) {
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src", "../images/Songs/Pause.png"); // Set Pause Button
    $(".dish img").attr("src", poster[currentSong]); // set image of the song
    $(".title").html('Song : ' + titles[currentSong] + '<br>' + 'Artist : ' + artists[currentSong]);
}

song.addEventListener('timeupdate', function () {

    var position = parseInt(((song.currentTime / song.duration) * 100));
    progressBar.css('width', position + '%');


    var minutesDuration = check(parseInt((song.duration) / 60));
    var secondsDuration = check(parseInt((song.duration) % 60));
    duration.html(minutesDuration + ':' + secondsDuration);

    var minutesCurrent = check(parseInt((song.currentTime) / 60));
    var secondsCurrent = check(parseInt((song.currentTime) % 60));
    currentTime.html(minutesCurrent + ':' + secondsCurrent);

    if (song.ended) {
        nextSong();
    };
});

function check(e) {
    if (e < 10) { return ('0' + e.toString()); }
    else { return e.toString() }
}
bar.click(function (e) {
    var mouseX = e.pageX - bar.offset().left;
    progressBar.css('width', mouseX + 'px');
    var newTime = (mouseX / barSize) * (song.duration);
    song.currentTime = newTime;
});
var n = 1;
function decreaseVolume() {
    song.volume -= 0.2;
    if (parseFloat(song.volume) > 0) {
        iconVol.html('<i class="fa fa-volume-up"></i>');
    }
    else if (parseFloat(song.volume) == 0) {
        iconVol.html('<i class="fa fa-volume-off"></i>');
        n = 0;
    }
    if (parseFloat(song.volume) > 0.2 && (song.volume) < 0.4) {
        song.volume = 0.2;
    }
}

function increaseVolume() {
    song.volume += 0.2;
    iconVol.html('<i class="fa fa-volume-up"></i>');
    n = 1;
}


function iconVolume() {
    if (n == 1) {
        song.volume = 0;
        iconVol.html('<i class="fa fa-volume-off"></i>');
        n = 0;
    }
    else {
        song.volume = 1;
        iconVol.html('<i class="fa fa-volume-up"></i>');
        n = 1;
    }
}