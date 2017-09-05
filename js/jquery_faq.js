"use strict";
(function(){
    $("#showAnswers").click(function(event){
        $("dd").toggleClass("invisible");
    });

    $("dt").click(function(){
        $(this).css("background-color", "yellow");
    });

    $("#highlight").on("click", highlightAllLastListItems);
    function highlightAllLastListItems () {
        $('ul').each(highlightLastListItem);
    }

    function highlightLastListItem () {
        $(this).children().last().css("background-color", "yellow")
        ;
    }

    $("h3").on("click", makeAllListItemsBold);
    function makeAllListItemsBold() {
        $(this).next().children().css("font-weight", "bold")
        ;
    }

    $("li").on("click", makeFirstSiblingBlue);
    function makeFirstSiblingBlue() {
        $(this).parent().children().first().css("color", "blue")
        ;
    }
    $(".close").click(function(){
        $(this).parent().hide();
    });

    var facts = $('.facts');

    facts.hide();
    facts.prev().click(function(){
        $(this).next().slideToggle();
    });

    setTimeout(function() {
        $('#fade').fadein();
    }, 8000);

})();