$(document).ready(function (e) {
    video.click(function (e) {
        header.css('display', 'none');
        menuBar.css('display', 'none');
    })
});

var header = $('.header');
var menuBar = $('.menuBar');
var video = $('i.fa-viadeo a')