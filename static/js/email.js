$(function () {
    $('.SendEmail').click(function (event) {
      var email = 'josh@wacollective.co.uk';
      var subject = 'Website Query';
      var emailBody = 'Hi Josh,';
      document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    });
  });