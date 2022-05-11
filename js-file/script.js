

$( document ).ready(function() {
  $(function(){
    //Include header and footer
     $("#includedHeader").load("header.html"); 
     $("#includedFooter").load("footer.html"); 
  });
     
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

// Wrap every letter in a span
var textWrappers = document.querySelectorAll('.ml2');
textWrappers.forEach(textWrapper => {
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
})

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 450,
    delay: (el, i) => 80*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


const anthemCols = document.querySelectorAll('.anthem_section .container .row .col-12')

  window.addEventListener('scroll', showCol,)

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

  const boxs = document.querySelectorAll('.speech .container .row .col-12')
  window.addEventListener('scroll', showBox,)
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
    