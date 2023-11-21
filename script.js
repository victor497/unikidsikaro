document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todos os botões "Ver Mais" nas notícias existentes
  var readMoreButtons = document.querySelectorAll('.read-more-btn');

  // Adiciona um ouvinte de eventos a cada botão
  readMoreButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          // Seleciona o elemento irmão (próximo) com a classe "full-content"
          var fullContent = button.nextElementSibling;

          // Alterna a visibilidade do conteúdo completo
          if (fullContent.style.display === 'none' || fullContent.style.display === '') {
              fullContent.style.display = 'block';
          } else {
              fullContent.style.display = 'none';
          }
      });
  });

  // Seleciona todos os novos botões "Ver Mais" nas novas notícias
  var newReadMoreButtons = document.querySelectorAll('.new-read-more-btn');

  // Adiciona um ouvinte de eventos a cada novo botão
  newReadMoreButtons.forEach(function (newButton) {
      newButton.addEventListener('click', function () {
          // Seleciona o elemento irmão (próximo) com a classe "full-content"
          var newFullContent = newButton.nextElementSibling;

          // Alterna a visibilidade do conteúdo completo
          if (newFullContent.style.display === 'none' || newFullContent.style.display === '') {
              newFullContent.style.display = 'block';
          } else {
              newFullContent.style.display = 'none';
          }
      });
  });
});
function openPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function () {
  // ... (seu código existente)

  // Adicione esta parte para lidar com o botão "Devs"
  var devsButton = document.querySelector('.devs-button');
  var devsContainer = document.getElementById('devsContainer');

  devsButton.addEventListener('click', function () {
      toggleDevs();
  });

  function toggleDevs() {
      if (devsContainer.style.display === 'none' || devsContainer.style.display === '') {
          devsContainer.style.display = 'block';
      } else {
          devsContainer.style.display = 'none';
      }
  }
});