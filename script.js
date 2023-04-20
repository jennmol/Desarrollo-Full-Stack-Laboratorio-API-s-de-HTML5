// Elementos del DOM
const videoPlayer = document.getElementById('videoPlayer');
const videoFileInput = document.getElementById('videoFile');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const volumeUpButton = document.getElementById('volumeUpButton');
const volumeDownButton = document.getElementById('volumeDownButton');
const loadingMessage = document.getElementById('loadingMessage');

// Ocultar el mensaje de carga
loadingMessage.style.display = 'none';

videoFileInput.addEventListener('change', function() {
  
  // Obtener el archivo seleccionado
  const file = this.files[0];

  // Verificar que el archivo sea un video
  if (file.type.startsWith('video/')) {
    loadingMessage.style.display = 'block'; // Mostrar el mensaje de carga

    const fileURL = URL.createObjectURL(file); // Crear una URL para el objeto File

    videoPlayer.src = fileURL; // Asignar la URL al video player

    videoPlayer.addEventListener('loadedmetadata', function() { 

      loadingMessage.style.display = 'none'; // Ocultar el mensaje de carga

      // Mostrar los controles de reproducción
      playButton.style.display = 'inline-block';
      pauseButton.style.display = 'inline-block';
      volumeUpButton.style.display = 'inline-block';
      volumeDownButton.style.display = 'inline-block';
    });
  } else {
    alert('Por favor, seleccione un archivo de video válido');
  }
});

playButton.addEventListener('click', function() {
  videoPlayer.play();
});

pauseButton.addEventListener('click', function() {
  videoPlayer.pause();
});

volumeUpButton.addEventListener('click', function() {
  videoPlayer.volume += 0.1;
});

volumeDownButton.addEventListener('click', function() {
  videoPlayer.volume -= 0.1;
});


