$(function OpenEmail() {
    $('.SendEmail').click(function (event) {
      var email = 'josh@wacollective.co.uk';
      var subject = 'Website Query';
      var emailBody = 'Hi Josh,';
      window.location.href = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    });
  });