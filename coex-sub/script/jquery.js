$(function(){
    $('.discount').hide();

    $('#section1 > .discount').slideToggle(400);
    $('#section2 > .discount').slideToggle(600);
    $('#section3 > .discount').slideToggle(800);
    $('#section4 > .discount').slideToggle(1000);

    $('#section1, #section2, #section3, #section4').hide();

    $("#section1").animate({width:'toggle'},300);
    $("#section2").animate({width:'toggle'},500);
    $("#section3").animate({width:'toggle'},700);
    $("#section4").animate({width:'toggle'},900);

//    section1 move
    $('#section1 > .ticket-box > .btn').mouseover(function(){
        $('#section1 > .section1-c > .glacier1').css('animation-play-state', 'running');
        $('#section1 > .section1-c > .glacier2').css('animation-play-state', 'running');
        $('#section1 > .section1-c > .penguin1').css('animation-play-state', 'running');
        $('#section1 > .section1-c > .penguin2').css('animation-play-state', 'running');
    }).mouseleave(function(){
        $('#section1 > .section1-c > .glacier1').css('animation-play-state', 'paused');
        $('#section1 > .section1-c > .glacier2').css('animation-play-state', 'paused');
        $('#section1 > .section1-c > .penguin1').css('animation-play-state', 'paused');
        $('#section1 > .section1-c > .penguin2').css('animation-play-state', 'paused');
    });

//    section2 move
    $('#section2 > .ticket-box > .btn').mouseover(function(){
        $('#section2 > .section2-c > .coral0').css('animation-play-state', 'running');
        $('#section2 > .section2-c > .coral2').css('animation-play-state', 'running');
        $('#section2 > .section2-c > .coral3').css('animation-play-state', 'running');
        $('#section2 > .section2-c > .coral5').css('animation-play-state', 'running');
        $('#section2 > .bubble-3').css('animation-play-state', 'running');
        $('#section2 > .manatee1').css('animation-play-state', 'running');
        $('#section2 > .manatee2').css('animation-play-state', 'running');
        $('#section2 > .jellyfish1').css('animation-play-state', 'running');
        $('#section2 > .fish1').css('animation-play-state', 'running');
    }).mouseleave(function(){
        $('#section2 > .section2-c > .coral0').css('animation-play-state', 'paused');
        $('#section2 > .section2-c > .coral2').css('animation-play-state', 'paused');
        $('#section2 > .section2-c > .coral3').css('animation-play-state', 'paused');
        $('#section2 > .section2-c > .coral5').css('animation-play-state', 'paused');
        $('#section2 > .bubble-3').css('animation-play-state', 'paused');
        $('#section2 > .manatee1').css('animation-play-state', 'paused');
        $('#section2 > .manatee2').css('animation-play-state', 'paused');
        $('#section2 > .jellyfish1').css('animation-play-state', 'paused');
        $('#section2 > .fish1').css('animation-play-state', 'paused');
    });


//    section3 move
    $('#section3 > .ticket-box > .btn').mouseover(function(){
        $('#section3 > .starfish2').css('animation-play-state', 'running');
        $('#section3 > .starfish3').css('animation-play-state', 'running');
        $('#section3 > .starfish4').css('animation-play-state', 'running');
        $('#section3 > .starfish5').css('animation-play-state', 'running');
        $('#section3 > .section3-downS > .starfish6').css('animation-play-state', 'running');
        $('#section3 > .section3-downS > .starfish7').css('animation-play-state', 'running');
        $('#section3 > .section3-downS > .starfish8').css('animation-play-state', 'running');
        $('#section3 > .section3-downS > .starfish9').css('animation-play-state', 'running');
        $('#section3 > .section3-downS > .starfish10').css('animation-play-state', 'running');
    }).mouseleave(function(){
        $('#section3 > .starfish2').css('animation-play-state', 'paused');
        $('#section3 > .starfish3').css('animation-play-state', 'paused');
        $('#section3 > .starfish4').css('animation-play-state', 'paused');
        $('#section3 > .starfish5').css('animation-play-state', 'paused');
        $('#section3 > .section3-downS > .starfish6').css('animation-play-state', 'paused');
        $('#section3 > .section3-downS > .starfish7').css('animation-play-state', 'paused');
        $('#section3 > .section3-downS > .starfish8').css('animation-play-state', 'paused');
        $('#section3 > .section3-downS > .starfish9').css('animation-play-state', 'paused');
        $('#section3 > .section3-downS > .starfish10').css('animation-play-state', 'paused');
    });



//    section4 move
    $('#section4 > .ticket-box > .btn').mouseover(function(){
        $('#section4 > .diver').css('animation-play-state', 'running');
        $('#section4 > .diver2-1').css('animation-play-state', 'running');
        $('#section4 > .diver2-2').css('animation-play-state', 'running');
        $('#section4 > .whale').css('animation-play-state', 'running');
        $('#section4 > .bubble-4').css('animation-play-state', 'running');
        $('#section4 > .fish1-4').css('animation-play-state', 'running');
        $('#section4 > .section4-downF > .fish4-4').css('animation-play-state', 'running');
    }).mouseleave(function(){
        $('#section4 > .diver').css('animation-play-state', 'paused');
        $('#section4 > .diver2-1').css('animation-play-state', 'paused');
        $('#section4 > .diver2-2').css('animation-play-state', 'paused');
        $('#section4 > .whale').css('animation-play-state', 'paused');
        $('#section4 > .bubble-4').css('animation-play-state', 'paused');
        $('#section4 > .fish1-4').css('animation-play-state', 'paused');
        $('#section4 > .section4-downF > .fish4-4').css('animation-play-state', 'paused');
    });


//    모달페이지 제이쿼리
    $('.tab-menu dl dd').hide().first().show();

    $('.tab-menu dl dt').click(function(){
        $('.tab-menu dl dd').removeClass('on');
        $('.tab-menu dl dt').removeClass('on');
        $('.tab-menu dl dd').addClass('on');
        $(this).addClass('on');
        $('.tab-menu dl dd').hide();
        $(this).next().show();
});
//    할인정보 > 할인종류 버튼
    $('.tab-menu dl dd .event .event-d .event-sd').hide().first().show();

    $('.tab-menu dl dd .event .event-d a').click(function(){
        $('.tab-menu dl dd .event .event-d a').removeClass('on');
        $('.tab-menu dl dd .event .event-d .event-sd').removeClass('on');
        $(this).addClass('on');
        $('.tab-menu dl dd .event .event-d .event-sd').hide();
        $(this).next().show();
    });


//    slide
    var item_width = $('.frame li').outerWidth(true);
    $('.frame li:first').before($('.frame li:last'));
    $('.frame').css('left',-item_width+'px');
    var currIndex =   $('.frame li').eq(1).attr("class");
    console.log("first : ",currIndex);




//    이전버튼 클릭
    $('.prev').click(function(){
      currIndex =   $('.frame li').eq(1).attr("class");
      console.log("prev : ",currIndex);
        var left_indent = parseInt($('.frame').css('left')) + item_width;
        $('.frame').stop().animate({'left':left_indent+'px'},300, function(){
            $('.frame li:first').before($('.frame li:last'));
            $('.frame').css('left',-item_width+'px');
        });
    });

//    다음버튼 클릭
    $('.next').click(function(){
      console.log("next : ",currIndex);
        var left_indent = parseInt($('.frame').css('left')) - item_width;
        $('.frame').stop().animate({'left':left_indent+'px'},300, function(){
            $('.frame li:last').after($('.frame li:first'));
            $('.frame').css('left',-item_width+'px');
            });
    });


//    구매하기 클릭 시 애니메이션
    $('.slide > .frame > li > .buy-box > .jelly > a').click(function(){
        $(this).stop().addClass('on');
    }).mouseleave(function(){
        $(this).stop().removeClass('on');
    });

//    top button animation
    $('#t-modal .t-btn').mouseover(function(){
        $('#t-modal .t-btn').css('animation-play-state', 'running');
    }).mouseleave(function(){
        $('#t-modal .t-btn').css('animation-play-state', 'paused');
    });

//    top button scroll
     $('.t-container').scroll(function() {
        if ($('.t-container').scrollTop() > 50) {
            $('.t-btn').fadeIn();
        } else {
            $('.t-btn').fadeOut();
        }
    });

    $(".t-btn").click(function() {
        $('.t-container').animate({
            scrollTop : 0
        }, 400);
        return false;
    });



//    모달 팝업 클릭
    $('#t-modal').hide();

    var $btn = $('.modal'),
        $modalpopup = $('#t-modal');

    $btn.click(function(){
        var btnIndex =$(this).parent().parent().index()
        // console.log("button index : ",btnIndex);

        currIndex =   $('.frame li').eq(1).attr("class");
        nIndex = parseInt(currIndex[2]);
        console.log("click : ",btnIndex, nIndex);
        for(var i =0;i<Math.abs(btnIndex-nIndex);i++)
        {

          $('.frame li:last').after($('.frame li:first'));

        }

        $modalpopup.fadeIn();
    });
    $('.slide .x-button').click(function(){
        $modalpopup.fadeOut();
    });




























})
