/*+ function($) {
    'use strict';

    // UPLOAD CLASS DEFINITION
    // ======================

    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');

    var startUpload = function(files) {
        console.log(files)
    }

    uploadForm.addEventListener('submit', function(e) {
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault()

        startUpload(uploadFiles)
    })

    dropZone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';

        startUpload(e.dataTransfer.files)
    }

    dropZone.ondragover = function() {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function() {
        this.className = 'upload-drop-zone';
        return false;
    }

}(jQuery);

*/

$(document).ready(function () {
    $('#postSOS').hide();
    var num = 0;

    //event click btn subir SOS
    $('#add').click(function () {
        var title = $('#titleSOS').val();
        var description = $('#description').val();
        var comuna = $("#comuna option:selected").text();
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        var date = dt.toLocaleDateString();
        //var comuna = $('#comuna').val();
        //var contactId = 'contact_' + num;
        //var deleteId = 'delete_' + num;

        //muestra contenedor
        $('#postSOS').show();

        //add SOS
        $('#title').append(
            '<h3 class="titleC">' + title + '</h3>'
        );
        $('#comunaText').text(comuna);
        $('#descriptionText').text(description);
        $('#timeText').text(time + '   ' + date);

        //remove contenedor 
        $('#uploadCont').remove();

        //input clean
        $('#title').val("");
        $('#description').val("");
        $('#comuna').val("");
        
        var image = new Image();
        var src = 'assets/img/intro.jpg'; //Esta es la variable que contiene la url de una imagen ejemplo, luego puedes poner la que quieras
        //image.src = src;

        $('#imgSOSpreview').append(image);
        $('#imgSOSpreview').append(
        '<img src="' + src + '" alt="" class="img-responsive imgSOS">'
        );



        /*
        $('#' + deleteId).click(function () {
            $('#' + contactId).remove();
        });
        */
    });

});