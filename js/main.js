//Get the map from bing
function GetMap()
    {
        var map = new Microsoft.Maps.Map('.map', {
            credentials: 'AqN8dvg9IR_Zlxz1LsCDqLgsAsAoimMtwFdcWVBsshShLtGQg3iHFfaNi4os5N1m',
            center: new Microsoft.Maps.Location(34.034004, -5.002001),
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 17
        });
    }
    
// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$(document).ready(function(){
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
     1000
    );
  }
});
});



