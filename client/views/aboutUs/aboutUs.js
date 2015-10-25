Template.aboutUs.onRendered(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('ul.tabs').tabs();
    $('select').material_select();
    $("body").css({});
    $('.modal-trigger').leanModal();
    
    $(document)
    .ready(function() {

        // fix menu when passed
        $('#slide-out')
        .visibility({
            once: false,
            removeCover: function() {
                $('body').css({});
            }
        });
    });
    
})
