export const emailContact = () => {
  var form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
      e.preventDefault();
      var datos = new FormData(this);
      var select = document.getElementById("contactService");
      datos.append("service", select.options[select.selectedIndex].innerText);

      fetch('./email.php', {
          method: 'POST',
          body: datos
      })

      .then(function (response) {
          return response.text();
      }).then(function (text) {
          console.log(text);
          location.reload();
      }).catch(function (error) {
          console.error(error);
      });
  })
}
