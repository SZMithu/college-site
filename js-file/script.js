

$( document ).ready(function() {
  
 $('.project_area .item-menu .li-group #li1').trigger("click");  


 $('.gallery .carousel .owl-carousel .client .client-img .popup-link').magnificPopup({
  type: 'image',
  gallery:{enabled:true}
});

//Owl-carousal
$('.gallery .owl-carousel').owlCarousel({
loop:true,
autoplay:true,
dots:true,
responsive:{
  0:{
    items :1
  },
  767:{
    items:2 
  },
  992:{
    items:3
  }
} 
})
//Sticy navbar
let nav_offset_top = $('.header').height() + 50;
function navbarFixed(){
if($('.header').length){
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if(scroll >= nav_offset_top){
      $('.header .navbar').addClass('fixed_nav');
    }else{
      $('.header .navbar').removeClass('fixed_nav');
    }
  })
}
} 
navbarFixed();

});







  

