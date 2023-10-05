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

document.addEventListener("DOMContentLoaded", function () {
    var videoElement = document.getElementById("webcam");
    var canvasElement = document.getElementById("canvas");
    var captureButton = document.getElementById("captureButton");
    var webcamPhotoField = document.getElementById("webcam_photo_field");
    if (videoElement && canvasElement && captureButton) {
        // Acesso à webcam
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(function (stream) {
                // Associar o stream da webcam ao elemento <video>
                videoElement.srcObject = stream;
            })
            .catch(function (error) {
                console.error("Erro ao acessar a webcam: ", error);
            });

        // Capturar a imagem quando o botão for clicado
        captureButton.addEventListener("click", function () {
            var context = canvasElement.getContext("2d");
            context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

            canvasElement.toBlob(function (blob) {
                var file = new File([blob], "webcam_photo" + Date.now() + ".jpg", { type: "image/jpeg" });

                // Preencher o campo de arquivo oculto com a imagem
                // webcamPhotoField.files = [file];
                var fileList = new DataTransfer();
                fileList.items.add(file);

                // Atribuir a lista de arquivos falsos ao campo de arquivo
                webcamPhotoField.files = fileList.files;
            }, "image/jpeg");
            // Agora, você pode usar o contexto do canvas para manipular a imagem capturada
        });
    }
});
// var refreshButton = document.getElementById('refreshButton');
// refreshButton.addEventListener('click', refreshPage);
// function refreshPage() {
//     location.reload();
// }
// document.addEventListener('DOMContentLoaded', function () {
//     var refreshButton = document.getElementById('refreshButton');
//     refreshButton.addEventListener('click', refreshPage);
// });
// Adicione um ouvinte de evento ao botão