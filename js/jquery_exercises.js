
var h1 = $('h1');

h1.click(function(){
    $(this).css('background-color','purple');
});


$('p').dblclick(function(){
    $(this).css('font-size','18px')
});

$('li').hover(
    function(){
        $(this).css('background-color','red')},
    function(){
        $(this).css('background-color','#FFF')
});