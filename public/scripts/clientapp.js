$(document).ready(function() {

    $('#submit-button').on('click', postData);


});

function postData() {
    event.preventDefault();

    var values = {};
    $.each($('#sql-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/people',
        data: values,
        success: function(data) {
            if(data) {
                // everything went ok
                console.log('from server:', data);
                getData();
            } else {
                console.log('error');
            }
        }
    });

}

function getData() {
    $.ajax({
        type: 'GET',
        url: '/people',
        success: function(data) {
            console.log(data);
            appendDom(data);
        }
    });
}

function appendDom(data){
  for(var i = 0; i < data.length; i++){
  $('.divAppend').append("<div></div>");
  var $uperman = $('.divAppend').children().last();

  $uperman.append("<p>Name: " + data[i].name + "</p>");
  $uperman.append("<p>Address: " + data[i].address + "</p>");
  $uperman.append("<p>City: " + data[i].city + "</p>");
  $uperman.append("<p>State: " + data[i].state + "</p>");
  $uperman.append("<p>Zip Code: " + data[i].zip_code + "</p>");
}


}
