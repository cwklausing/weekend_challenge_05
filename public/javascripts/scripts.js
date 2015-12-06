/**
 * Created by cwklausing on 12/6/15.
 */
$(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log('Submit worked');
        //$.ajax({
        //    url: '/users'
        //}).done(function (data) {
        //    console.log('Does this work?');
        //    $('.success').text('Success!');
        //});
    });
});