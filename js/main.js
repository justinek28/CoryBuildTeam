$(function() {
  $('.submit-form').click(submitForm);
});

function submitForm() {
  if ($('#human').val() == 5) {
    var email = {
      key: "DV6iDBf0ZF_bcscqfJalXw",
      message: {
        to: [
          {
            email: "cory@goldenmeansolutions.com"
          }
        ],
        from_email: $('#email').val(),
        from_name: $('#name').val(),
        subject: $('#name').val() + ' sent you an email',
        html: $("#message").val(),
        autotext: "true"
      }
    };
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: email,
      success: function(msg){
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        $('#human').val('');
        alert('Email sent successfuly!');
      }, error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert('Somethin went wrong! Try again.');
      }
    });
  } else {
    alert('Are you sure you\'re human?');
  }
}
