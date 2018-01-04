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
    var num = 0;

    //event click btn addSOS
    $('#add').click(function () {
        var title = $('#titleSOS').val();
        var description = $('#description').val();
        var comuna = $("#comuna option:selected").text();
        //var comuna = $('#comuna').val();
        //var contactId = 'contact_' + num;
        //var deleteId = 'delete_' + num;

        //add SOS
        $('#postSOS').append(
            '<p class="nameStyle">' + title + description + comuna + '</p>' 
        );
        
        //remove addSOS form
        $('.container').remove();

        //sum cont Id
        num++;

        //input clean
        $('#title').val("");
        $('#description').val("");
        $('#comuna').val("");


        /*
        $('#' + deleteId).click(function () {
            $('#' + contactId).remove();
        });
        */
    });

});