window.onload = function() {
    var botones = document.querySelectorAll('.see-more');
  
    botones.forEach(function(boton) {
      boton.addEventListener('click', function() {
        var cardBody = boton.parentNode;
        var descripcion = cardBody.querySelector('.card-text');
  
        if (boton.innerHTML === 'Descripción ↓') {
            descripcion.style.maxHeight = descripcion.scrollHeight + 'px';
            boton.innerHTML = 'Ver menos ↑';
          } else {
            descripcion.style.maxHeight = '0px'; // Ajusta este valor según tu preferencia
            boton.innerHTML = 'Descripción ↓';
          }
      });
  
      // Inicialmente, colapsamos la descripción
      var descripcion = boton.parentNode.querySelector('.card-text');
      descripcion.style.maxHeight = '0px'; // Ajusta este valor según tu preferencia
      descripcion.style.overflow = 'hidden';
      descripcion.style.transition = 'max-height 0.3s ease-out';
    });
  };
