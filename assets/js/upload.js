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

//subir POST SOS y comentar dentro de la página
$(document).ready(function () {
    $('#postSOS').hide();
    //event click btn publicar SOS post
    $('#add').click(function () {
        var title = $('#titleSOS').val();
        var description = $('#description').val();
        var comuna = $("#comuna option:selected").text();
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        var date = dt.toLocaleDateString();
        var image = new Image();
        var src = 'assets/img/intro.jpg';
        //muestra contenedor de post publicado
        $('#postSOS').show();
        //agrega los datos
        $('#title').append(
            '<h3 class="titleC">' +
            title +
            '</h3>'
        );
        $('#comunaText').text(comuna);
        $('#descriptionText').text(description);
        $('#timeText').text(time + '  ' + date);
        $('#imgSOSpreview').append(
            '<img src="' +
            src +
            '" alt="" class="img-responsive imgSOS">'
        );
        //remueve contenedor formulario
        $('#uploadCont').remove();
        //funcion para publicar comentarios
        $('#sendComment').click(function () {
            var comment = $('#comment').val();
            $('#commentsCont').append(
                '<hr>' +
                '<div class="media">' +
                '<div class="media-left">' +
                '<a href="javascript:void(0)">' +
                '<img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="media-object img-circle avatarPost">' +
                '</a>' +
                '</div>' +
                '<div class="media-body">' +
                '<h4 class="media-heading"> Lucky Sans' +
                '<br>' +
                '<small>' +
                '<i class="fa fa-clock-o">' +
                '</i>' +
                date +
                ','+
                ' ' +
                time +
                ' hrs' +
                '</small>' +
                '</h4>' +
                '<p>' + comment +
                '</p>' +
                '<ul class="nav nav-pills pull-left">' +
                '<li>' +
                '<a href="" title="">' +
                '<i class="glyphicon glyphicon-thumbs-up">' +
                '</i>' +
                ' 8' +
                '</a>' +
                '</li>' +
                '<li>' +
                '<a href="" title="">' +
                '<i class=" glyphicon glyphicon-comment">' +
                '</i>' +
                ' 8' +
                '</a>' +
                '</li>' +
                '<li>' +
                '<a href="" title="">' +
                '<i class="glyphicon glyphicon-share-alt">' +
                '</i>' +
                ' 10' +
                '</a>' +
                '</li>' +
                '</ul>' +
                '</div>' +
                '</div>'
            );
            //limpia input
            $('#comment').val("");
        });
    });
});