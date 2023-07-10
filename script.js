
$(document).ready(function() {

  document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Show the overlay and pop-up
    document.getElementById('overlay').style.display = 'block';
  });
  
  document.getElementById('closeBtn').addEventListener('click', function() {
    // Hide the overlay and pop-up
    document.getElementById('overlay').style.display = 'none';
  
  });

  $('.ajax-link').click(function(e) {
    e.preventDefault();
    var targetPage = $(this).data('target');

    $.ajax({
      url: targetPage,
      type: 'GET',
      dataType: 'html',
      success: function(response) {
        // Update the content of the <body> element with the loaded page
        $('body').html(response);
      },
      error: function(xhr, status, error) {
        console.log('Error loading page: ' + error);
      }
    });
  });
});