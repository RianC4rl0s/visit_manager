// // app/assets/javascripts/webcam.js

// document.addEventListener("DOMContentLoaded", function () {
//     var videoElement = document.getElementById("webcam");
  
//     if (videoElement) {
//       // Acesso à webcam
//       navigator.mediaDevices
//         .getUserMedia({ video: true })
//         .then(function (stream) {
//           // Associar o stream da webcam ao elemento <video>
//           videoElement.srcObject = stream;
//         })
//         .catch(function (error) {
//           console.error("Erro ao acessar a webcam: ", error);
//         });
//     }
//   });
  