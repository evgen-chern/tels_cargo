window.onload = function(){

    /* BURGER */
    $('.mobile-menu').click(function() {
        $(this).toggleClass('active');
        $('.menu_list-mobile').toggleClass('active');
        //$('.wrapper').toggleClass('lock');
    });

    /*CHANGE LANG*/
     $('.change_lang').click(function() {
         $(this).toggleClass('active');
         $('.lang_list').slideToggle().css("display", "flex");
     });

    /*MENU DROP*/
    let menuDrop = '.menu_item.dropdown';
    let menuDropMobile = '.menu_item-mobile.dropdown .mobile_arr';
    let menuDropMobileClose = '.menu_item-mobile.dropdown .mobile_arr.active:not(.work)';

    if ($(window).width() > 979){
        $(menuDrop).hover(function () {
            $(this).addClass('active');
            $(this).children('.drop_container').slideDown();
            $(this).children('.item_link').addClass('active');
        },function () {
            $(this).removeClass('active');
            $(this).children('.drop_container').slideUp();
            $(this).children('.item_link').removeClass('active');
        });
    } else {
        $(menuDropMobile).click(function () {
            $(this).addClass('work');
            $(menuDropMobileClose).siblings('.drop_list-mobile').slideUp();
            $(menuDropMobileClose).removeClass('active');

            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).siblings('.drop_list-mobile').slideUp();
            }else{
                $(this).addClass('active');
                $(this).siblings('.drop_list-mobile').slideDown();
            }
            $(this).removeClass('work');
        });
    }



    /*POPUP SEARCH*/
    $('.modal_search').click(function() { // Вызываем функцию по нажатию на кнопку
        let popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
        $(popup_id).show(); // Открываем окно
        $('.overlay_popup').show(); // Открываем блок заднего фона
    })
    $('.close_link').click(function() { // Обрабатываем клик по кнопке
        $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    });
    $('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
        $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    });


    /*COST*/
    let costField = '.cost_field';
    let costFieldExt = '.cost_field_ext';
    $(costField).focusin(function(){
     $(this).parents(".form_field").addClass('active');
    });
    $(costField).focusout(function(){
        $(this).parents(".form_field").removeClass('active');
    });

    $(costFieldExt).focusin(function(){
        $(this).parents(".form_field-extended").addClass('active');
    });
    $(costFieldExt).focusout(function(){
        $(this).parents(".form_field-extended").removeClass('active');
    });


    /*FOOTER FORM*/
    let footerField = '.footer_field';
    $(footerField).focusin(function(){
        $(this).parents(".field").addClass('active');
    });
    $(footerField).focusout(function(){
        $(this).parents(".field").removeClass('active');
    });

    /*CONTACTS MAP*/
    let seeForm = '.view_on_map';
    let map_vision = '.map_vision';
    $(seeForm).click(function (){
        if($(this).hasClass("active")){
            $(this).removeClass('active');
            $(this).parent('.map_control').siblings(map_vision).removeClass('active');
        }else{
            $(this).parent('.map_control').siblings(map_vision).addClass('active');
            $(this).addClass('active');
        }
    });

    /*CATALOG LIST*/
    let item = '.technics_catalog_list .item';
    $(item).mouseover(function () {
        $(this).addClass('active');
    });

    $(item).mouseleave(function () {
        $(this).removeClass('active');
    });


    /*FORM_GROUP VACANCY*/
    let formGroup = '.form_group';
    $(formGroup).focusin(function(){
        $(this).addClass('active');
    });
    $(formGroup).focusout(function(){
        $(this).removeClass('active');
    });


    /*TABS BUSINESS INNOVATION*/
    let strategyTabsCaption = '.tabs_caption';
    let strategyTabsLink = '.strategy_tabs .tabs_caption .link_wrap';
    let strategyTabsContent = '.strategy_tabs .tabs_content';
    $(strategyTabsLink).click(function (){
        $(this).addClass('active')
            .siblings().removeClass("active")
            .parent(strategyTabsCaption).siblings(strategyTabsContent).removeClass("active")
            .eq($(this).index()).addClass("active");
    });


    /*FAQ ACCORDEON*/
    let accLink = '.FAQ_accordion .accordion_link';
    let contentBlock = '.FAQ_accordion .content';
    let accLinkNwork = '.FAQ_accordion .accordion_link.active:not(.work)';
    $(accLink).click(function () {
        $(this).addClass('work');
        $(contentBlock).slideUp();
        $(accLinkNwork).removeClass('active');

        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings(contentBlock).slideUp();
        }else{
            $(this).addClass('active');
            $(this).siblings(contentBlock).slideDown();
        }

        $(this).removeClass('work');

    });

}

/*EXTENDED COS OPEN/CLOSE*/
function costExt(link) {
    let costFormEx = '.cost-form_extended';
    if($(costFormEx).hasClass("active")){
        $(costFormEx).removeClass('active');
        $(link).text('Раскрыть расширенный запрос');
        $(link).removeClass('up_arrow');
    }else{
        $(costFormEx).addClass('active');
        $(link).text('Скрыть расширенный запрос');
        $(link).addClass('up_arrow');
    }
}

/*LIGHTSLIDERs*/
$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop:true,
    slideMargin: 0,
    thumbItem: 5,
    galleryMargin: 0,
    thumbMargin: 0,
});

$('.certificates_cards').lightSlider({
    gallery: false,
    item: 5,
    loop:true,
    slideMargin: 50,
    controls: false,
    pager: false,
    responsive : [
        {
            breakpoint:1279,
            settings: {
                item:4,
            }
        },
        {
            breakpoint:979,
            settings: {
                item:3,
            }
        },
        {
            breakpoint:767,
            settings: {
                item:1,
            }
        }
    ],

});

$('.clients_cards').lightSlider({
    gallery: false,
    item: 6,
    loop:true,
    slideMargin: 50,
    controls: false,
    pager: false,
    responsive : [
        {
            breakpoint:1279,
            settings: {
                item:4,
            }
        },
        {
            breakpoint:979,
            settings: {
                item:3,
            }
        },
        {
            breakpoint:767,
            settings: {
                item:1,
            }
        }
    ],

});


$('.head_slider').lightSlider({
    gallery: false,
    item: 1,
    loop:true,
    slideMargin: 0,
    controls: true,
    pager: true,
    responsive : [
        {
            breakpoint:767,
            settings: {
                controls: false,
            }
        }
    ],

});

$('.history_slider').lightSlider({
    gallery: false,
    item: 1,
    loop:true,
    slideMargin: 0,
    controls: false,
    pager: true,
});

$('.index_slider-wrapper').lightSlider({
    gallery: false,
    item: 1,
    loop:true,
    slideMargin: 0,
    controls: false,
    pager: false,
    speed: 1000,
    pause: 5000,
    auto: true,
});

$('.index-slider_right_wrapper').lightSlider({
    gallery: false,
    item: 1,
    loop:true,
    slideMargin: 0,
    controls: false,
    pager: true,
    vertical:true,
    verticalHeight:417,
    responsive : [
        {
            breakpoint:979,
            settings: {
                verticalHeight: 250,
            }
        }
    ],
});
