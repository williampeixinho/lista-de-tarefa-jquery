
        $(document).ready(function(){
            $('#button').click(function(event){
    event.preventDefault();
    var input = $('#input').val();
    if (input !== '') {
        $('ul').append('<li>' + input + '<i class="fas fa-check"></i> <i class="fas fa-trash"></i> </li>');
        $('#input').val('');
    }
    return false;
});
                $('ul').on('click','.fa-trash', function(){
                    $(this).parent('li').fadeOut(200);
                });
                $('ul').on('click','.fa-check', function(){
                    $(this).parent('li').toggleClass('checked');
                });
            });