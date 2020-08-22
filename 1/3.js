$("#make_me_big").click(makeMeBig);
$("#make_me_small").click(makeMeSmall);

$("#hide_me").click(function(){
    $('p').addClass('hidden');
});
$("#show_me").click(function(){
    $('p').removeClass('hidden');
});
$("#hover_me").hover(hoverIn);
$('#hover_me').mouseout(hoverOut);
function makeMeBig(){
    $('p, button').addClass('big');
}

function makeMeSmall(){
    $('p, button').removeClass('big');
}

function hoverIn(){
    $("p").addClass('hidden');
}

function hoverOut(){
    $('p').removeClass('hidden');
}