function notify() {
    alert('Notifying');
    $.get( "/notify", function( data ) {
        alert( data );
      });
}