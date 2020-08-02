// MDB Lightbox Init
// $(function() {
//   $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
// });

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (isChrome) {
  $('#iframeAudio').remove()
  console.log('iframe removed');
}
else {
    $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
    console.log('playAudio removed');
}