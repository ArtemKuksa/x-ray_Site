$('.atlas').mouseenter(function(){ 
    
    $('.submenu_bases').css({"display": "none"});  
    $('.submenu_atlas').css({"display": "block"});
    $('.rectangle_atlas').css({"transform": "rotate(90deg)"});
});
$('.submenu_atlas').mouseleave(function(){   
    $('.submenu_atlas').css({"display": "none"});
    $('.rectangle_atlas').css({"transform": "rotate(360deg)"});
});


$('.bases').mouseenter(function(){ 
    $('.submenu_atlas').css({"display": "none"});
    $('.submenu_education').css({"display": "none"});
    $('.rectangle_dataBase').css({"transform": "rotate(90deg)"});
    $('.submenu_bases').css({"display": "block"});
});
$('.submenu_bases').mouseleave(function(){   
    $('.submenu_bases').css({"display": "none"});
    $('.rectangle_dataBase').css({"transform": "rotate(360deg)"});
});


$('.education').mouseenter(function(){ 
    $('.submenu_atlas').css({"display": "none"});
    $('.submenu_bases').css({"display": "none"});
    $('.rectangle_education').css({"transform": "rotate(90deg)"});
    $('.submenu_education').css({"display": "block"});
});
$('.submenu_education').mouseleave(function(){   
    $('.submenu_education').css({"display": "none"});
    $('.rectangle_education').css({"transform": "rotate(360deg)"});
});
$('.burger_link').click(function(){
    alert(111);
})