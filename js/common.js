$(document).ready(function () {
    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function(e) { //Change

        var req = $(this).find('.req');
        /* проверка на пустые поля */
        if(req.val() == 0){
            req.addClass('error');
            return false;
        } else{
            
            /* тогда отправляем на почту */
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "post.php", //Change
                data: th.serialize()
            }).success(function() {

                var che = $('input:radio[name=payment]:checked').val();
                if (che == 'Наличные'){
                    $.magnificPopup.open({
                        items: {
                            src: '.modal'
                        }
                    });
                }else{
                    $.magnificPopup.open({
                        items: {
                            src: '.modal-link'
                        }
                    });
                    setTimeout(function() {
                        window.location.href = "http://afisha.bycard.by/performance/trening_ekaterina_kononova_intensiv_po_lichnomu_brendingu?utm_source=frame&utm_medium=timanovich&utm_campaign=kononova"
                        $.magnificPopup.close();
                    }, 3000);
                }

                th.trigger("reset");
            }).error(function(){
                alert("Error!");
            });
            return false;
            
        }
    });
});


$(document).ready(function() {
    /* Slick slider */
    $('.slick-autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000
    });

    /* clients slider */
    $('.clients-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /* Magnific-popup YOUTUBE*/
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /* Magnific-popup FORM */
    $(document).ready(function() {
        $('.popup-with-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',

            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function() {
                    if($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
    });
    
    /* Tabs */
    $('.tab-list-name.arrow').click(function(){
        $('.tab-list-name.arrow').removeClass('arrow-open');
        $(this).addClass('arrow-open');
        $('.tab-list-descr').hide(500);
        $(this).next('.tab-list-descr').show(500);
    });
    
    /* Tabs Form */
    $('[href="#form-orgs"]').click(function(){
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().parent().find('.form-face').hide();
        $(this).parent().parent().parent().find('.organization').show();
    });

    $('[href="#form-face"]').click(function(){
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().parent().find('.form-face').hide();
        $(this).parent().parent().parent().find('.private-person').show();
        $(this).parent().parent().parent().find('.part-form-2').hide();
        $(this).parent().parent().parent().find('.part-form-1').show();
    });

    /* кнопка реквизит | проверка на обязательные поля */
    $('.rekvizit').click(function(){
        var rekvizit = $(this).parent().parent();
        if(rekvizit.find('input[name="name"]').val() == 0){
            rekvizit.find('input[name="name"]').addClass('error');
        } else if(rekvizit.find('input[name="phone"]').val() == 0){
            rekvizit.find('input[name="phone"]').addClass('error');
        } else if(rekvizit.find('input[name="people"]').val() == 0){
            rekvizit.find('input[name="people"]').addClass('error');
        } else{
            $('.part-form-1').hide();
            $('.part-form-2').show();
        }
    });

    /* закрывает блок реквизиты , переходит на первое поле */
    $('.back').click(function(){
        $('.part-form-1').show();
        $('.part-form-2').hide();
    });

    /* Класс ошибки при пустом импуте */
    $('input').focus(function(){
       $(this).removeClass('error');
    });

    //помечаем не пустые инпуты
    $('.reply-field').on('change','input, textarea',function(){
        var $this = $(this);
        var attr = $(this).attr('placeholder');

        if($this.val !== '') {
            $this.addClass('filled');
        } else {
            $this.removeClass('filled');
        }
    });
    //помечаем инпуты с аттрибутом плейсхолдер
    $('input, textarea').each(function(){
        var $this = $(this);
        var attr = $(this).attr('placeholder');
        if (typeof attr !== typeof undefined && attr !== false) {
            $this.addClass('filled');
        }
    });

});

/* Маска для телефона */
$(document).ready(function(){
    $('input[type="tel"]').inputmask({
        showMaskOnHover: false
    });
    $('input[name="fio"]').inputmask({
        showMaskOnHover: false
    })
});

/* Плавный скролл по ссылке без плагина FullPage.js на мобилке */
$(document).ready(function(){
    if ($(window).width() < 400) {
        // $("#menu-list").on("click","a", function (event)
        $("a[href='#section_2']").attr('href','#sec2');
        $("a[href='#section_3']").attr('href','#sec3');
        $("a[href='#section_4']").attr('href','#sec4');
        $("a[href='#section_5']").attr('href','#sec5');
        $("a[href='#section_6']").attr('href','#sec6');
        $("a[href='#section_7']").attr('href','#sec7');
        $("a[href='#section_8']").attr('href','#sec8');
        $("a[href='#section_9']").attr('href','#sec9');
        $("a[href='#section_10']").attr('href','#sec10');
        $("a[href='#section_11']").attr('href','#sec11');

        $("#menu-list").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    }
});

/* Tabs FAQ */
$(document).ready(function() { // Ждём загрузки страницы
    $(".faq-list-block").click(function() { // Событие нажатия на элемент меню вкладок
        if (!$(this).hasClass("active")) { // Проверка, не нажали ли мы на уже активный пункт
            var i = $(this).index(); // Получаем порядковый номер нажатого пункта, отстче идет от 0 (0,1,2)
            $(".faq-list-block.active").removeClass("active"); // Удаляем активный класс у прошлого пункта меню
            $(".faq-description-block.active").hide().removeClass("active"); // Скрываем и удаляем активный класс у прошлого контейнера с содержимым
            $(this).addClass("active"); // Добавляем нажатому пункту меню активный класс
            $($(".faq-description-block")[i]).fadeIn(1000).addClass("active"); // Показываем и добавляем активный класс соответствующему контейнеру
        }
    });
});

/* open/close NAV */
$(document).ready(function () {
   $('.nav-open').click(function () {
       $('.hidden-menu').fadeIn(400);
       $('.nav-open').fadeToggle(0);
       $('.nav-close').fadeToggle(0);
   });
    $('.nav-close, .menu-list a').click(function () {
        $('.hidden-menu').fadeOut(400);
        $('.nav-open').fadeToggle(0);
        $('.nav-close').fadeToggle(0);
    })
});



/* Настройка плагина FullPage.js */
$(document).ready(function(){
    if ($(window).width() > 400) {
        /* FullPage.js */
        $('#fullpage').fullpage({
            scrollingSpeed: 1500,
            easing: 'easeInOutCubic',
            lazyLoading: true,
            scrollOverflow: true,
            controlArrows: true,
            //verticalCentered: false,
            navigation: true,
            //navigationTooltips: ['Главная', 'Кто я', 'Программа', 'Стоимость', 'Контакты'],
            navigationPosition: 'right',
            anchors:['section_1', 'section_2', 'section_3','section_4', 'section_5', 'section_6', 'section_7', 'section_8', 'section_9', 'section_11']
        });
    }
});




