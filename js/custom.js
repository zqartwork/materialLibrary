/*
-----------------
Function Library
-----------------
*/
/*
-----------------
Anchor, ScrollSpy
-----------------
*/let scrollSpy = function(){

    var link = $('.anchor');
    
    // 點選想去的目標並且前往
    link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        e.preventDefault();
      });
    
    // 滾動時判定 Active 狀態，呼叫 Function
    $(window).on('scroll', function(){
      scrNav();
    });
    
    // 選單按鈕顯示 Active 狀態，並且自動判定
    function scrNav() {
      var sTop = $(window).scrollTop();
      $('section').each(function() {
        var id = $(this).attr('id'),
            offset = $(this).offset().top-1,
            height = $(this).height();
        if(sTop >= offset && sTop < offset + height) {
          link.removeClass('active');
          $('.side-menu').find('[data-scroll="' + id + '"]').addClass('active');
        }
      });
    }

    //呼叫 Function
    scrNav();

}
/*
------
Custom Select
------
*/
let selectCustom = function() {
    let cs = $('.custom_select');
    let csMenu = $('.select_menu');
    let csMenuOpt = $('.select_menu li')

    cs.click(function() {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).children('.select_menu').slideToggle(300);
    })
    cs.focusout(function() {
        $(this).removeClass('active');
        $(this).children('.select_menu').slideUp(300);
    })
    csMenuOpt.click(function() {
        $(this).parents('.custom_select').find('.selected').text($(this).text());
        $(this).parents('.custom_select').find('#data_input').attr('value', $(this).attr('id'));
        $('#' + $(this).attr('page')).show()
        $('#' + $(this).attr('page')).siblings().hide()
    })
};

/*
--------------------
Custom upload files
--------------------
*/
let customUpload = function(){

    //找到自訂上傳區，新增js名稱
    document.querySelector(".custom_upload").classList.add('js');

    //定義input, 按鈕, 檔名顯示區
    var fileInput  = document.querySelector( ".input-file" ),  
        button     = document.querySelector( ".input-file-trigger" ),
        the_return = document.querySelector(".file-return");
    
    //上傳按鈕
    button.addEventListener( "keydown", function( event ) {  
        if ( event.keyCode == 13 || event.keyCode == 32 ) {  
            fileInput.focus();  
        }  
    });

    //上傳按鈕
    button.addEventListener( "click", function( event ) {
        fileInput.focus();
        return false;
    });  

    //檔名顯示區
    fileInput.addEventListener( "change", function( event ) {  
        the_return.innerHTML = this.value;  
    });

}

/*
------------
Modal Opener
------------
*/
let modalFunction = function(){

    $('.modal-opener').click(function(){
        let tt = $(this).attr('tt-to');
        console.log(tt)
        $('.' + tt).show();
        $('body').css({
            'max-height': '100vh',
            'max-width': '100vw',
            'overflow': 'hidden',
        })
    })

    $('.modal-closer').click(function(){
        $(this).parents('.modal').hide();
        $('body').css({
            'max-height': 'auto',
            'max-width': 'auto',
            'overflow': 'auto',
        })
    })

}

/*
--------
Switcher
--------
*/
let switcher = function(){
    $('.switcher').click(function(){
        console.log($(this).attr('tab'))
        $($(this).attr('tab')).addClass('active');
        $($(this).attr('tab')).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
}

/*
----------
Scroll Top
----------
*/
let scrollTop = function(){

    var scrollTop = $(".scrollTop");

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
        $(scrollTop).css("opacity", "1");

        } else {
        $(scrollTop).css("opacity", "0");
        }
    }); 

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
        return false;

    }); 

}