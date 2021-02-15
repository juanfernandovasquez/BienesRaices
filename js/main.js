(function() {
    console.log('estamos en linea') 
    $('.hamburger').on('click', function() {
        $('.navegacion').slideToggle();
    });
})