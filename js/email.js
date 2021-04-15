function sendEmail(){

  var templateParams = {
      name: jQuery('#name').val(),
      email: jQuery('#email').val(),
      phone: jQuery('#phone').val(),
      message: jQuery('.email-message').val()
  };
  console.log(templateParams);

  emailjs.init("user_6P9Wygp8sEAKC4NKoVgrF");

  emailjs.send('service_ir8ppsd', 'template_6dbf596', templateParams)
  .then(function(response) {
     if(response.status == 200)
      jQuery('#openEmailOK').click();
  }, function(error) {
     jQuery('#openEmailFail').click();
  });
};
