
  // Pause the audio when the page is unloaded or hidden
  window.addEventListener('beforeunload', function() {
    var audio = document.getElementById('myAudio');
    audio.pause();
  });

  








