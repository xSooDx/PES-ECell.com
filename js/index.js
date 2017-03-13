$(function() {

    var navOverlay = $('#nav-overlay');

    function toggleNav() {
        if (navOverlay.hasClass('open')) {
            navOverlay.removeClass('open');
            navOverlay.css('height', '0');
        }
        else {
            navOverlay.addClass('open');
            navOverlay.css('height', '100%');
        }
    }

    $('#menu').on('click', toggleNav);

    $(document).keyup(function(e) {
        if (e.keyCode == 27 && navOverlay.hasClass('open')) { 
            navOverlay.removeClass('open');
            navOverlay.css('height', '0');
        }
    });

    $('.nav-to-stage').on('click', toggleNav);

    var topoffset = 50; //variable for menu height
    var slideqty = $('#featured .item').length;
    var wheight = $(window).height(); //get the height of the window
    var randSlide = Math.floor(Math.random()*slideqty);

    $('#featured .item').eq(randSlide).addClass('active');


    $('.fullheight').css('height', wheight); //set to window tallness


    //replace IMG inside carousels with a background image
    $('#featured .item img').each(function() {
        var imgSrc = $(this).attr('src');
        $(this).parent().css({'background-image': 'url('+imgSrc+')'});
        $(this).remove();
    });

    //adjust height of .fullheight elements on window resize
    $(window).resize(function() {
        wheight = $(window).height(); //get the height of the window
        $('.fullheight').css('height', wheight); //set to window tallness
    });



    //Automatically generate carousel indicators
    for (var i=0; i < slideqty; i++) {
        var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
        if (i === randSlide) {
            insertText += ' class="active" ';
        }
        insertText += '></li>';
        $('#featured').find('ol').append(insertText);
    }

    // $('.carousel').carousel({
    //     pause: false
    // });

    $('#multiscroll').multiscroll({
        easing: 'easeInOutQuint',
        anchors: ['ecell','inspire', 'educate', 'endeavour','contact']
    });

    

});