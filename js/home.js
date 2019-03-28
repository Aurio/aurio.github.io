/* display timer */
function displayTimer() {
  var countDownDate = new Date("Mar 14, 2019 23:00:00").getTime();

  var update = setInterval(function() {
    
    var now = new Date().getTime();
    var distance = countDownDate - now;

    /* Time calculations for days, hours, minutes, and seconds */
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    var seconds = Math.floor ((distance % (1000 * 60)) / 1000);
 
    padded_days = ("0"+days).slice(-2);
    padded_hours = ("0"+hours).slice(-2);
    padded_minutes = ("0"+minutes).slice(-2);
    padded_seconds = ("0"+seconds).slice(-2);

    /* display result */
    document.getElementById("countdown").innerHTML = padded_days + "d " + padded_hours + ":" + padded_minutes + ":"+ padded_seconds;

    /* when count down is finished */
    if (distance < 0) {
      clearInterval(update);
      document.getElementById("countdown").innerHTML = "Phase II posted";
    }
  }, 1000);
}


function scrollToSiteBody() {
  document.querySelector('.site-body-container').scrollIntoView({
    behavior: 'smooth'
  });
}


function hidePage(pagename) {
  var page = document.getElementById(pagename);
  page.style.display='none';
  
  /* note: this does not work for IE prior to v10 */
  document.getElementById("link-"+pagename).classList.remove('active');
  
}

function showPage(pagename) {
  var page = document.getElementById(pagename);
  if(pagename=='team'){
    page.style.display='flex';
  } else {
    page.style.display='block';
  }
    
}

function hideAllPages() {
  hidePage('home');
  hidePage('phase-one');
  hidePage('phase-two');
  hidePage('phase-three');
  hidePage('phase-four');
  hidePage('team');
  hidePage('contact-us');
}

function showOnePage(pagename) {
  hideAllPages();
  showPage(pagename);
  
  /* note: this does not work for IE prior to v10 */
  document.getElementById("link-"+pagename).classList.add('active');
}


/* main */
function run() {

  displayTimer();
  
  /* set home in nav bar as active */
  document.getElementById('link-home').classList.add('active');

}





// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
  if (document.readyState=='complete') run();
});
