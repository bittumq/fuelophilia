/**
* PHP Email form Validation - v3.2
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (e) {
    e.addEventListener('submit', function (event) {
      event.preventDefault();

      let thisform = this;

      let action = thisform.getAttribute('action');
      let recaptcha = thisform.getAttribute('data-recaptcha-site-key');

      if (!action) {
        displayError(thisform, 'The form action property is not set!')
        return;
      }
      thisform.querySelector('.loading').classList.add('d-block');
      thisform.querySelector('.error-message').classList.remove('d-block');
      thisform.querySelector('.sent-message').classList.remove('d-block');

      let formData = new formData(thisform);

      if (recaptcha) {
        if (typeof grecaptcha !== "undefined") {
          grecaptcha.ready(function () {
            try {
              grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
                .then(token => {
                  formData.set('recaptcha-response', token);
                  php_email_form_submit(thisform, action, formData);
                })
            } catch (error) {
              displayError(thisform, error)
            }
          });
        } else {
          displayError(thisform, 'The reCaptcha javascript API url is not loaded!')
        }
      } else {
        php_email_form_submit(thisform, action, formData);
      }
    });
  });

  function php_email_form_submit(thisform, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
      .then(response => {
        if (response.ok) {
          return response.text()
        } else {
          throw new Error(`${response.status} ${response.statusText} ${response.url}`);
        }
      })
      .then(data => {
        thisform.querySelector('.loading').classList.remove('d-block');
        if (data.trim() == 'OK') {
          thisform.querySelector('.sent-message').classList.add('d-block');
          thisform.reset();
        } else {
          throw new Error(data ? data : 'form submission failed and no error message returned from: ' + action);
        }
      })
      .catch((error) => {
        displayError(thisform, error);
      });
  }

  function displayError(thisform, error) {
    thisform.querySelector('.loading').classList.remove('d-block');
    thisform.querySelector('.error-message').innerHTML = error;
    thisform.querySelector('.error-message').classList.add('d-block');
  }

})();
