/*
    Created on : 12/02/2015, 7:06:03 PM
    Author     : Robin Spark
*/

var showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}

$(function () {

    showText("#msg", "full stack developer...?", 0, 100);

});

var showText2 = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}

$(function () {

    showText2("#msg2", "many people ask, is it a myth? is it reasonable to expect mere mortals to have mastery on every facet of the development stack? Well, maybe I'm not a mere mortal. The definition of a full stack developer is a try-hard developer with specialized knowledge in each layer, if not mastery in many and a genuine interest in all software technology.", 0, 30);

});


jQuery(function () {
    //Box 1: reveal immediately - on page load
    //NOTE: id does refer to an element id, It is used to
    //      uniquely refer to the element to be revealed.
    var options1 = {
        id: 'box1'
    };
    $('.box1').initReveal(options1);

    //------------------------
    //Box 2: reveal after specified delay
    var options2 = {
        id: 'box2'
        , delay: 11000
        , background: '#fff'
    };
    $('.box2').initReveal(options2);

    //------------------------
    //Box 3: reveal on event - eg. onclick
    var options3 = {
        id: 'box3'
        , auto: false
    };
    var box3 = $('.box3');
    box3.initReveal(options3);

    $('.btn-reveal').on('click', function () {
        box3.performReveal(options3);
    });

    //------------------------
    //Box 4: Reveal when element scrolls into the viewport
    var options4 = {
        id: 'box4'
        , auto: false
        , trigger: 'on-visible'
    };
    $('.box4').initReveal(options4);
});
