$('.video-js').each(function() {
          
    var player = videojs(this.id);
    var parent = $(this).parents('.video-player');
    var rewindBtn = parent.find('.video-rewind');
    var forwardBtn = parent.find('.video-forward')



    
 //rewind
 $(rewindBtn).click(function (){
    var time = player.currentTime();
    player.currentTime(time - 10); 
});

 //forward
$(forwardBtn).click(function (){
    var time = player.currentTime();
    player.currentTime(time + 10); 
})});







// accordion 

document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion--active');
       


        if (button.classList.contains('accordion--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            
        } else {
            
            accordionContent.style.maxHeight = 0;
        }
    });
    
});


// modal openen wanneer video klaar is

$('.video-js').each(function() {
var player = videojs(this.id);

player.ready(function() {

    var duration = player.duration();

    player.on('ended', function() {
        var time = player.currentTime();
        $('.modal').addClass("active");
    });
});

$('.close-modal').click(function () {
    $('.modal').css("display", "none");
    $(checkBtn).hide();
    $('.button-visibility').trigger("reset");
    
})});


// darkmode

$(".dark-modeSwitch").click(function (){
    var element = document.body;
    element.classList.toggle("dark-mode");
});

 
 
// hover function voor forward en rewind buttons 

 if  ($(window).width() > 300 ) { 
    $('.video-js').add('.video-button').hover(function () {
      $('.button-visibility').addClass("hover");
  }, function () {
      $(".button-visibility").removeClass("hover");  
}); 
} 