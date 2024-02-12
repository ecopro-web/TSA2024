$(".title > span").each(function(index){
    $(this).css({
        'animation-delay' : 0.2+0.05*(1+index) + 's'
    });
});