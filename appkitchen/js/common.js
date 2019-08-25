$('.toggle-menu').click(function(){
    $(this).toggleClass("on");
    $('nav').slideToggle();
})