/*$('document').ready(function () {

    $('.bouton').click(function () {
        $('.main-navigation ul ').show();
    });
    $('.bouton').mouseleave(function () {
        $('.bouton').hide();
    });
    $(document).ready(function () {
        $('.subMenu').hide();
        $('.bouton2').click(function () {
            $('.subMenu').fadeToggle('500');
        });
    });
    $(document).ready(function () {
        $('.subMenu2').hide();
        $('.bouton3').click(function () {
            $('.subMenu2').fadeToggle('500');

        });
    });
});*/

jQuery(document).ready(function ($) {
    
    $('.bouton').click(function () {
        $('.main-navigation ul').fadeToggle('500');

    });
});
