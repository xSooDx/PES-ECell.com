$(function() {

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

    $('.carousel').carousel({
        pause: false
    });

    var pinScene01Tl = new TimelineMax();

    var title = $('#title');
    var text = $('#text');

    var controller = new ScrollMagic.Controller();

    pinScene01Tl
        // .to(title, 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 0.5)
        // .to(text, 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 0.5)
        // .set(title, {text: "Educate"})
        // .set(text, {text: "Remember that time spent on a rock climb isnt subtracted from your life span."})
        // .fromTo(title, 0.7, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '+=0.4')
        // .fromTo(text, 0.7, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '-=0.6')
        // .set(title, {autoAlpha: 1, y:0}, '+=2')
        // .to(title, 0.2, {autoAlpha: 0, ease:Power1.easeNone}, '+=0.5')
        // .to(text, 0.2, {autoAlpha: 0, ease:Power1.easeNone}, '+=0.5')
        // .set(title, {text: "Endeavour"})
        // .set(text, {text: "Remember that time spent on a rock climb isnt subtracted from your life span."})
        // .fromTo(title, 0.7, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '+=0.4')
        // .fromTo(text, 0.6, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '-=0.6')
        // .set(title, {autoAlpha: 1}, '+=2');
        .to(title, 0.5, {autoAlpha: 0, ease:Power1.easeNone}, 0.5)
        .to(text, 0.5, {autoAlpha: 0, ease: Power1.easeNone}, 0.5)
        .set(title, {text: "Educate"})
        .set(text, {text: "Remember that time spent on a rock climb isnt subtracted from your life span."})
        .to(title, 0.7, {y: 0, autoAlpha: 1, ease: Power1.easeOut}, '+=0.5')
        .to(text, 0.7, {y: 0, autoAlpha: 1, ease: Power1.easeOut}, '-=0.7')
        .set(title, {autoAlpha: 1, y: 0}, '+=1')
        .to(title, 0.2, {autoAlpha: 0, ease: Power1.easeNone}, '+=0.5')
        .to(text, 0.2, {autoAlpha: 0, ease: Power1.easeNone}, '-=0.5')
        .set(title, {text: "Endeavour"})
        .set(text, {text: "Remember that time spent on a rock climb isnt subtracted from your life span."})
        .to(title, 0.7, {y: 0, autoAlpha: 1, ease: Power1.easeOut}, '+=0.5')
        .to(text, 0.7, {y: 0, autoAlpha: 1, ease: Power1.easeOut}, '-=0.7')
        .set(title, {autoAlpha: 1}, '+=2');

    var pinScene01 = new ScrollMagic.Scene({
        triggerElement: '#stage',
        triggerHook: 0,
        duration: "400%"
    })
        .setPin("#stage")
        .setTween(pinScene01Tl)
        .addIndicators({name: "something"})
        .addTo(controller);

});