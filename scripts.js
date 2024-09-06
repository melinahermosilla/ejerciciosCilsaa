document.getElementById('dark-mode').addEventListener('click', function() {
    const body = document.body;
    const currentMode = body.classList.contains('light-mode');
    
    if (currentMode) {
        body.classList.remove('light-mode');
        this.textContent = 'Estilo 1';
    } else {
        body.classList.add('light-mode');
        this.textContent = 'Estilo de Alto Contraste';
    }
});



document.addEventListener('DOMContentLoaded', () => {

    let buttonSend = document.getElementById('button-send');
    
    buttonSend.addEventListener('click', (event) => {
      event.preventDefault();
  
      let name = document.getElementById('first-name');
      let lastname = document.getElementById('last-name');
      let email = document.getElementById('email');
      let date = document.getElementById('date');
      let country = document.getElementById('country');
  document.getElementById('error-name').innerHTML = '';
      document.getElementById('error-last').innerHTML = '';
      document.getElementById('error-email').innerHTML = '';
      document.getElementById('error-date').innerHTML = '';
      document.getElementById('error-country').innerHTML = '';
  
      let formError = false;
      let message = "Debes completar este campo";
  
      const format = /^[A-Za-z]+$/;
  
      if (!name.value) {
        document.getElementById('error-name').innerHTML = message;
        formError = true;
      } else if (!format.test(name.value)) {
        document.getElementById('error-name').innerHTML = messageFormat;
        formError = true;
      }
  
      if (!lastname.value) {
        document.getElementById('error-last').innerHTML = message;
        formError = true;
      } else if (!format.test(lastname.value)) {
        document.getElementById('error-last').innerHTML = messageFormat;
        formError = true;
      }
      
      if (!email.value) {
        document.getElementById('error-email').innerHTML = message;
        formError = true;
      } else {
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailFormat.test(email.value)) {
          document.getElementById('error-email').innerHTML = 'El formato del correo no es válido';
          formError = true;
        }
      }
      
      const today = new Date();
      const birthDay = new Date(date.value);
  
      if (!date.value){
        document.getElementById('error-date').innerHTML = message;
        formError = true;
      }else{
  
        if (birthDay > today) {
  
        document.getElementById('error-date').innerHTML = 'La fecha de nacimiento es incorrecta';
        formError = true;
  
        }
  
        const age = today.getFullYear() - birthDay.getFullYear();

        
      }
  
      if (!country.value) {
        document.getElementById('error-country').innerHTML = message;
        formError = true;
      }
  
      if (!formError) {
        alert("Gracias por su tiempo!");
      }
    });
  
  });
