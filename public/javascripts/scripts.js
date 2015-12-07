/**
 * Created by cwklausing on 12/6/15.
 */
$(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        var newPerson = $(this).serializeArray();
        var personObject = {
            firstName: newPerson[0].value,
            lastName: newPerson[1].value,
            desiredJob: newPerson[2].value,
            remote: newPerson[3].value,
            city: newPerson[4].value,
            state: newPerson[5].value
        };
        $.ajax({
            url: '/users',
            type: 'post',
            data: personObject
        }).done(apSuccess);
        function apSuccess() {
            $('.success').text('Application Submitted!');
        }
    });
});