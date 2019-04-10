// JavaScript Document
$(document).ready(function(e) {
    video.click(function(e) {
        chooseVideo($(this));
    });
	showLyric.click(function(e) {
		if(bntLyric.html() == 'Lyric')
		{
			bntLyric.html('Hide');
			lyricVideo.css('display','block');
		}
		else
		{
			bntLyric.html('Lyric');
			lyricVideo.css('display','none');
		}
    });
	
	video.hover(function(e) {
        hoverVideo($(this));
    });
});

var video = $('.one-video');
var iframeVideo = $('.show-video iframe');
var containerShowVideo = $('.container-show-video');
var showVideo = $('.show-video');
var srcVideo = ['t7tZFq29lis', 'CX11yw6YL1w', 'W6hxiDmMGSE'];
var headingVideo = $('.info-video h2');
var lyricVideo = $('.info-video .lyric');
var headings = [
'HongKong1 | OFFICIAL MV | Nguyễn Trọng Tài x San Ji x Double X',
'Céline Dion - Ashes (from "Deadpool 2" Motion Picture Soundtrack)',
"Đường Một Chiều - Huỳnh Tú ft. Magazine || Music Video"
];
var lyrics = [
' <p>♫ Lyrics: <br/> <br/> Gió âm thầm lướt qua muôn đời <br/> Vì ai vì anh <br/> Vì giờ anh biết chuyện tình mình chẳng còn gì,khi đó xuân sang người đừng ngọt lời thầm thì <br/> Em bước sang ngang đợi chờ điều gì diệu kì <br/> Như lúc ban đầu <br/> Và giờ anh khóc thì cũng chẳng để làm gì <br/> Đâu phải cho anh,chuyện tình mình mà là vì <br/> Em đã trao ai dòng lệ tràn đầy cầu kì những năm tháng phai màu <br/> Nếu đóa hoa trồng trước kia chưa về,nhánh hương tình thắm thêm câu thề <br/> Anh ước rằng,rằng một mai anh đến anh đón em vào sớm mai trong lành <br/> Nhưng đó mãi là giấc mơ không thành <br/> Vì ai vì ai <br/> ---- <br/> Music producer: San Ji <br/> Composer: Nguyễn Trọng Tài, San Ji <br/> Recording: Nguyễn Đông Kiệt <br/> Starring: Trần Huyền My, Nguyễn Minh Thời <br/> <br/> Project Supervisors: Nguyễn Lê Hoàng Thu, Phạm Nguyễn Thủy Tiên <br/> PR Executive: Nhật Duy <br/> Designer: Min D.O, Nguyễn Thuý Bắc, Nguyễn Trọng Trường An <br/> Stylist: Zoe Phan, Duy Dương <br/> Make up: Andrew Nguyễn <br> Costume : Retros.Boutique <br/> Product by Bpro team <br/> <br/> Chaidao Production <br/> Director Khương Vũ <br/> Line Producer Trinh Lê <br/> Production Manager Ly Bùi <br/> D.O.P Thái Anh Dương <br/> Camera- OP Trần Thái Tâm <br/> Editor Khương Vũ <br/> Color Grading Thái Anh Dương <br/> Data Management Lê Duy Minh <br/> Camera And Lighting Equipment Lensprovn <br/> Special Thanks Timehouse Coffee </p>',
"<p>♫ Lyrics: <br/> <br/> What's left to say?<br> These prayers ain't working anymore<br> Every word shot down in flames<br> What's left to do with these broken pieces on the floor?<br> I'm losing my voice calling on you<br> 'Cause I've been shaking<br> I've been bending backwards till I'm broke<br> Watching all these dreams go up in smoke<br> Let beauty come out of ashes<br> Let beauty come out of ashes<br> And when I pray to God all I ask is<br> Can beauty come out of ashes?<br> Can you use these tears to put out the fires in my soul?<br> 'Cause I need you here, woah<br> 'Cause I've been shaking<br> I've been bending backwards till I'm broke<br> Watching all these dreams go up in smoke<br> Let beauty come out of ashes<br> Let beauty come out of ashes<br> And when I pray to God all I ask is<br> Can beauty come out of ashes?<br> Can beauty come out of ashes?<br> Nh&#7841;c s&#297;: Jordan Smith / Patrick Martin / Tedd Tjornhom<br> L&#7901;i b&agrave;i h&aacute;t Ashes &copy; Warner/Chappell Music, Inc, Universal Music Publishing Group, Sony/ATV Music Publishing LLC, Fox Music, Inc</p>",
'<p>♫ Lyrics: <br/> <br/> Anh ơi, có biết điều gì thật đau <br> Trong cuộc sống muôn màu để em nói cho anh nghe nhé <br> Rằng nơi em đã từ lâu có cảm xúc lạ <br> Mỗi khi anh kề bên được nghe anh nói cười </p> <p>Mình đã biết nhau từ lâu <br> Nên em chẳng nói ra hết những lời này <br> Sợ anh đi mất <br> Lặng im thấy anh cùng ai </p> <p>Dần khoảng cách với em bao ngày <br> Anh đâu nào hay <br> Lòng em đau nhói trong góc tối <br> Khi nhìn anh với cô ta trao nụ hôn đầu </p> <p>Em ước gì anh thấy em khóc <br> Vì em cố chấp nên cố gắng theo tình yêu ấy <br> Nên hôm nay em đành chấp nhận rời xa kỉ niệm <br> Em mong anh sẽ luôn vui </p> <p>[Rap:] <br> Em xin đừng nhắc nữa trời đang lất phất mưa <br> Đường xưa và đôi ta từng qua em rời xa bao kỉ niệm giờ vất chưa <br> 2 năm là xa lắm tay em giờ cho người ta nắm <br> Anh đang nhìn em ở ngay đây từng ngày mà cứ như đang ở xa lắm <br> Anh lau bờ mi nhắm anh chỉ muốn được hôn bờ môi em <br> Nhận ra rằng để em xa dần anh mơ 1 chút mà thôi em <br> Anh tin anh ta là tốt nhất em cũng hạnh phúc anh chúc phúc còn kịp <br> Anh gói ghém nước mắt anh gượng ở nơi em còn lại mọi thứ nơi anh tối đen <br> Cố quên nhưng tiếc chờ anh không quên tim còn tha thiết anh biết anh viết <br> Còn tiếc nên đêm về em khói thuốc ra diết <br> Anh gửi tiếng yêu vào bài ca ghi hết tha thiết anh viết vào ngày hạ <br> Em ơi đời anh rơi là chơi vơi không tới nơi <br> Anh chỉ biết mình em thôi anh viết mùi hương còn vương đây <br> Anh viết ra vấn vương và nhớ thương còn đong đầy <br> Anh biết hôm qua ở đâu đây nhưng hôm nay môi em anh đâu thấy <br> Khi trang giấy ấy và nét mực anh từng thực hiện lời hứa đã thổi bay <br> Anh không muốn thấy em ở nơi này vì anh đã từng hẹn em ở nơi đây </p> <p>[Chorus:] <br> Lòng em đau nhói trong góc tối <br> Khi nhìn anh với cô ta trao nụ hôn đầu <br> Em ước gì anh thấy em khóc <br> Vì em cố chấp nên cố gắng theo tình yêu ấy <br> Nên hôm nay em đành chấp nhận rời xa kỉ niệm <br> Em mong anh sẽ luôn vui </p> <p>Anh ơi, có biết điều gì thật đau <br> Trong cuộc sống muôn màu để em nói cho anh nghhe nhé <br> Rằng nơi em đã từ lâu có cảm xúc lạ <br> Mỗi khi anh kề bên được nghe anh nói cười </p> <p>Mình đã biết nhau từ lâu <br> Nên em chẳng nói ra hết những lời này <br> Sợ anh đi mất <br> Lặng im thấy anh cùng ai <br> Dần khoảng cách với em bao ngày <br> Anh đâu nào hay </p> <p>Lòng em đau nhói trong góc tối <br> Khi nhìn anh với cô ta trao nụ hôn đầu <br> Em ước gì anh thấy em khóc <br> Vì em cố chấp nên cố gắng theo tình yêu ấy <br> Nên hôm nay em đành chấp nhận rời xa kỉ niệm <br> Em mong anh sẽ luôn vui </p> <p>Em xin đừng nhắc nữa trời đang lất phất mưa <br> Đường xưa và đôi ta từng qua em rời xa bao kỉ niệm giờ vất chưa <br> 2 năm con xa lắm tay em giờ cho người ta nắm <br> Anh đang nhìn em ở ngay đây từng ngày mà cứ như đang ở xa lắm <br> Anh lau bờ mi nhắm anh chỉ muốn được hôn bờ môi em <br> Nhận ra rằng để em xa dần anh mơ 1 chút mà thôi em <br> Anh tin anh ta là tốt nhất em cũng hạnh phúc anh chúc phúc còn kịp <br> Anh gói gém nước mắt anh gượng ở nơi em còn lại mọi thứ nơi anh tối đen <br> Cố quên nhưng tiếc chờ anh không quên tim còn tha thiết anh biết anh viết <br> Còn tiếc nên đêm về em khói thuốc ra diết <br> Anh gửi tiếng yêu vào bài ca ghi hết tha thiết anh viết vào ngày hạ .. <br> Em ơi đời anh rơi là chơi vơi không tới nơi <br> Anh chỉ biết mình em thôi anh viết mùi hương còn vương đây <br> Anh viết ra vấn vương và nhớ thương còn đông đầy <br> Anh biết hôm qua ở đâu đây nhưng hôm nay môi em anh đâu thấy <br> Khi trang giấy ấy và nét mực anh từng thực hiện lời hứa đã thổi bay <br> Anh không muốn thấy em ở nơi này vì anh đã từng hẹn em ở nơi đây </p> <p>Lòng em đau nhói trong góc tối <br> Khi nhìn anh với cô ta trao nụ hôn đầu <br> Em ước gì anh thấy em khóc <br> Vì em cố chấp nên cố gắng theo tình yêu ấy <br> Nên hôm nay em đành chấp nhận rời xa kỉ niệm <br> Em mong anh sẽ luôn vui </p> <p>Đường một chiều còn nhiều lắm. <br> Đường một chiều còn mình anh.. <br> Đường một chiều của đôi ta.. <br> Anh vẫn chưa hề từng biết em như tối mình từng nói.. <br> Anh vẫn hỏi rằng em có ngừng rồi mình từng nói có một ngày em sẽ buồn và đau lắm.. <br> Chuyện của mình còn dài lắm một chiều còn gặp nhiều người lắm. <br> Dù còn yêu nhiều bao nhiêu năm quên anh đi em sẽ kéo ta xa xăm. </p> <p>Lòng em đau nhói trong góc tối <br> Khi nhìn anh với cô ta trao nụ hôn đầu <br> Em ước gì anh thấy em khóc <br> Vì em cố chấp nên cố gắng theo tình yêu ấy <br> Nên hôm nay em đành chấp nhận rời xa kỉ niệm <br> Em mong anh sẽ luôn vui</p>',
''
];
var showLyric = $('button.show-lyric');
var bntLyric = $('button.show-lyric h3');
var brand = $('.container-show-video .brand');
var info = $('.one-video p');
function chooseVideo(n)
{
	showVideo.css('display','block');
	var number = n.attr('nth');
	iframeVideo.attr('src','https://www.youtube.com/embed/' + srcVideo[number]+'?autoplay=1');
	$('a.ytp-youtube-button.ytp-button.yt-uix-sessionlink').css('display','none');
	headingVideo.html(headings[number]);
	lyricVideo.html(lyrics[number]);
	containerShowVideo.css('background','white');
	brand.css('display','none');
	
}

function hoverVideo(n)
{
	var number = n.attr('nth');
	var nChild = parseInt(number) + 1;
	$('.one-video:nth-child('+ nChild +')' + ' p').html(headings[number]);
}