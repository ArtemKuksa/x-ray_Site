$('.atlas').mouseenter(function(){ 
    
    $('.submenu_bases').css({"display": "none"});  
    $('.submenu_atlas').css({"display": "block"});
});
$('.submenu_atlas').mouseleave(function(){   
    $('.submenu_atlas').css({"display": "none"});
});


$('.bases').mouseenter(function(){ 
    $('.submenu_atlas').css({"display": "none"});
    $('.submenu_education').css({"display": "none"});
    $('.submenu_bases').css({"display": "block"});
});
$('.submenu_bases').mouseleave(function(){   
    $('.submenu_bases').css({"display": "none"});
});
 $('.img_logo').mouseenter(function(){
    $('.submenu_bases').css({"display": "none"});
    $('.submenu_education').css({"display": "none"});
})

$('.education').mouseenter(function(){ 
    $('.submenu_atlas').css({"display": "none"});
    $('.submenu_bases').css({"display": "none"});
    $('.submenu_education').css({"display": "block"});
});
$('.submenu_education').mouseleave(function(){   
    $('.submenu_education').css({"display": "none"});
});
$('.burger_link').click(function(){
    alert(111);
})