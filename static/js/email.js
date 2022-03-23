$(function () {
    $('.SendEmail').click(function (event) {
      var email = 'alex@wacollective.co.uk';
      var subject = 'Test';
      var emailBody = 'Hi Alex,';
      document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    });
  });