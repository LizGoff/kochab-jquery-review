


//this is called a callback function
//it waits until the function is complete
$(document).ready(onReady);

console.log('Jquery review'); 

//on ready 
function onReady() {
    console.log('jquery is ready');
    //selectors - $()
    $('h1').addClass('funny');
    $('h1').css('color', 'red');;
//getters and setters

    console.log($('h2').text()); //get text value of h2
    $('h2').text('You have been set');
    console.log($('h2').text()); //get test value of h2


// input (also, a getter and setter)
    $('#nameInput').val('Name');
    //replaces the value (name)
    console.log($('#nameInput').val());
//let someVariable = '#(id)nameInput';

// events
//event handler

//scroll click hover enter fade

    $('#clickableButton').on('click', function() {
        console.log($('#nameInput').val());
    });
    
    $('#anotherButton').on('click', function() {
        console.log('I was clicked!');

    });
}






