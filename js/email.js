function sendEmail(){

  var templateParams = {
      name: jQuery('#name').val(),
      email: jQuery('#email').val(),
      phone: jQuery('#phone').val(),
      message: jQuery('.email-message').val()
  };
  console.log(templateParams);

  emailjs.init("user_6P9Wygp8sEAKC4NKoVgrF");

  emailjs.send('service_4j7enxa', 'template_6dbf596', templateParams)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  });
};
