

$( document ).ready(function() {
  $(function(){
    //Include header and footer
     $("#includedHeader").load("header.html"); 
     $("#includedFooter").load("footer.html"); 
  });
  //Sticy navbar
let nav_offset_top = $('#includedHeader').height() + 300;
function navbarFixed(){
if($('#includedHeader').length){
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if(scroll >= nav_offset_top){
      $('#includedHeader .header').addClass('fixed_nav');
       $('.logo').addClass('fixed');
       $('.logo_div').addClass('display');
      $('.notice').css('margin-top', '420' + "px");
    }else{
      $('#includedHeader .header').removeClass('fixed_nav');
       $('.logo').removeClass('fixed');
       $('.logo_div').removeClass('display');
      $('.notice').css('margin-top', '0' + "px");
    }
  })
}
} 
navbarFixed();
     
$('.gallery .carousel .owl-carousel .client .client-img .popup-link, .service .container .popup-link').magnificPopup({
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

});
 
const anthemCols = document.querySelectorAll('.anthem_section .container .row .col')

  window.addEventListener('scroll', showCol)

  showCol()

  function showCol() {
      const trigerPoint = window.innerHeight / 5 * 3
      anthemCols.forEach(anthemCol => {
          const colTop = anthemCol.getBoundingClientRect().top

          if(colTop < trigerPoint){
              anthemCol.classList.add('divein')
          }else{
              anthemCol.classList.remove('divein')
          }
      })
  }

  const boxs = document.querySelectorAll('.speech .container .row .col')

  window.addEventListener('scroll', showBox)

  showBox()

  function showBox() {
      const trigerPoint = window.innerHeight / 5 * 3
      boxs.forEach(box => {
          const boxTop = box.getBoundingClientRect().top

          if(boxTop < trigerPoint){
              box.classList.add('divein')
          }else{
              box.classList.remove('divein')
          }
      })
  }
    