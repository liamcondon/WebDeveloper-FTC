console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');



var $containerWidth = $(window).width();

$('#menu-icon').click(function() {
  console.log('hamburger menu has been clicked');
  if($('#mylinks').css('display') == 'none'){
        $('#mylinks').slideDown();
      console.log('show menu');
  }
  else {
      $('#mylinks').slideUp();
      console.log('hide menu');
}

});
});
