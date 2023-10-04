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

document.addEventListener("visibilitychange", function () {
    console.log("Visibility state: " + document.visibilityState);
    if (document.visibilityState === "hidden") {
        // Página ficou invisível (usuário saiu da tela)
        stopCameraStream();
    } else if (document.visibilityState === "visible") {
        // Página ficou visível novamente (usuário voltou à tela)
        startCameraStream();
    }
});

function startCameraStream() {
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
            // Associar o stream da webcam ao elemento <video>
            videoElement.srcObject = stream;
        })
        .catch(function (error) {
            console.error("Erro ao acessar a webcam: ", error);
        });
}

function stopCameraStream() {
    if (videoElement.srcObject) {
        var tracks = videoElement.srcObject.getTracks();
        tracks.forEach(function (track) {
            track.stop();
        });
        videoElement.srcObject = null;
    }
}