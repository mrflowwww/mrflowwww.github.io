// JS damit der Button die Eigenschaften des Input(file) erbt und man diesen stylen kann

$('#input-file').before('<input type="button" id="button-file" value="Datei hochladen" />');
$('#input-file').hide();
$('body').on('click', '#button-file', function() { 
    $('#input-file').trigger('click');    
});