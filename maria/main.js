/*
               .__                                 .__         
 __ __   ____  |__|  ____    ____  _______   ____  |__|_____   
|  |  \ /    \ |  |_/ ___\  /  _ \ \_  __ \ /    \ |  |\__  \  
|  |  /|   |  \|  |\  \___ (  <_> ) |  | \/|   |  \|  | / __ \_
|____/ |___|  /|__| \___  > \____/  |__|   |___|  /|__|(____  /
            \/          \/                      \/          \/ 
Was made with sparkles of magic by the School of Magic Engineering, Unicornia Institute, Kingdom of Unicornia
God save the queen.
*/
//paste this code under the head tag or in a separate js file.
// Wait for window load
$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});
(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
