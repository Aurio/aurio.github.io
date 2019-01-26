/* display timer */
function displayTimer() {
  var countDownDate = new Date("Jan 31, 2019 23:00:00").getTime();

  var update = setInterval(function() {
    
    var now = new Date().getTime();
    var distance = countDownDate - now;

    /* Time calculations for days, hours, minutes, and seconds */
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    var seconds = Math.floor ((distance % (1000 * 60)) / 1000);

    /* display result */
    document.getElementById("countdown").innerHTML = days + "d " + hours + ":" + minutes + ":"+ seconds;

    /* when count down is finished */
    if (distance < 0) {
      clearInterval(update);
      document.getElementById("countdown").innerHTML = "PROJECT PHASE 1 POSTED";
    }
  }, 1000);
}


function scrollToSiteBody() {
  document.querySelector('.site-body-container').scrollIntoView({
    behavior: 'smooth'
  });
}


/* main */
function run() {

  displayTimer();

}





// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
  if (document.readyState=='complete') run();
});
