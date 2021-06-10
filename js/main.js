$(function () {
    var barBtn = $('.menu_toggle > .fa-bars');
    var closeBtn = $('.menu_toggle > .fa-times');

    barBtn.click(function (e) {
        e.preventDefault();
        closeBtn.addClass('active');
        $('aside').addClass('active');
        $('body').addClass('active');
    });

    closeBtn.click(function (e) {
        e.preventDefault();
        $(this).removeClass('active');
        $('aside').removeClass('active');
        $('body').removeClass('active');
    });
    // header menu

    var searchBtn = $('.search-icon');
    searchBtn.click(function (e) {
        e.preventDefault();
        $('.search-form').toggleClass('active');
    });

    var asideCategory = $('.aside-category > li');
    var menuArrow = $('.aside-category > li > i');
    var asideSubCategory = $('.aside-category > li > ul');

    asideCategory.click(function () {
        $(this).find('ul').slideToggle();
        $(this).siblings('li').find('ul').slideUp();
    });
    //aside category menu

    $(document).ready(function () {
        $('.slider').bxSlider({
            controls: false,
            auto: true,
            autoHover: true,
            speed: 2000,
            pause: 5000
        });
    });
    //main slider

    $("#footer-accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: false
    });
    // footer accordion

    $("#selectable").selectable({});
    //size select

    var myPopup = document.querySelector('.popup'),
        checkbox = document.querySelector('#popup'),
        popupClose = document.querySelector('.close');

    //쿠키 생성

    function setCookie(name, value, day) {
        var date = new Date(); //현재 날짜 지정.
        date.setDate(date.getDate() + day);

        var mycookie = '';
        mycookie += name + '=' + value + ';';
        mycookie += 'Expires=' + date.toUTCString();

        document.cookie = mycookie; //쿠키 설정, 생성
    }

    //쿠키 삭제
    function delCookie(name) {
        var date = new Date();

        date.setDate(date.getDate() - 1);

        var setCookie = '';

        setCookie += name + '=Main;';
        setCookie += 'Expires=' + date.toUTCString();

        document.cookie = setCookie; //쿠키 설정, 생성           
    }

    //쿠키 확인
    function checkCookie(name) {
        var cookies = document.cookie.split(';');
        console.log(cookies);
        var visited = false; // 방문 거짓

        for (var i in cookies) {
            if (cookies[i].indexOf(name) > -1) {
                visited = true;
                console.log(visited);
            }
        }
        console.log(visited);

        if (visited) {
            //재방문
            myPopup.style.display = 'none';
        } else {
            //신규방문
            myPopup.style.display = 'block';
        }

    }
    checkCookie('damiani');

    popupClose.addEventListener('click', function () {
        //a.checked true false
        if (checkbox.checked) {
            //팝업을 다시 안보겠다. 팝업 닫고, 쿠키 생성.
            setCookie('damiani','main',1);
            myPopup.style.display = 'none';
        } else {
            //팝업을 계속 본다. 팝업 닫고, 쿠키 제거.
            myPopup.style.display = 'none';
            delCookie('damiani');
        }
    });

});