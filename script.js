document.addEventListener("DOMContentLoaded", () => {
  // Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle?.addEventListener("click", () => {
    navLinks?.classList.toggle("active");
  });

  // Character Selection
  const characters = document.querySelectorAll(".character-card");
  let selectedCharacter = null; // Nenhum personagem inicialmente selecionado
  const characterImages = {
    walter: "/breaking-bad-site/img/heisenberg cat.jpg",
    jesse: "/breaking-bad-site/img/jesse pinkman cat.jpg",
    gustavo: "/breaking-bad-site/img/gustavo.jpg",
  };

  function getCharacterGreeting(character) {
    const greetings = {
      walter: `Cat White: Vamos aprender química!`,
      jesse: `Cat Pinkman: Yo! O que você quer saber sobre química?`,
      gustavo: `Cat Gustavo: Boa escolha. Vamos explorar a química com precisão!`,
    };
    return greetings[character] || greetings.walter;
  }

  characters.forEach((card) => {
    card.addEventListener("click", () => {
      characters.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      selectedCharacter = card.dataset.character;

      // Adiciona mensagem de saudação do personagem
      addCharacterMessage(getCharacterGreeting(selectedCharacter));
    });
  });

  // Chat Functionality
  const chatMessages = document.getElementById("chatMessages");
  const chatForm = document.getElementById("chatForm");
  const questionInput = document.getElementById("questionInput");
  const typingIndicator = document.querySelector(".typing-indicator");

  function addCharacterMessage(message) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message character-message";
    messageDiv.innerHTML = `
      <div class="message-content">
          <img src="${characterImages[selectedCharacter]}" alt="${selectedCharacter}" class="character-avatar">
          <p>${message}</p>
      </div>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function addUserMessage(message) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message user-message";
    messageDiv.innerHTML = `
      <div class="message-content">
          <i class="fa-solid fa-circle-user" style="color: #34d399; font-size: 40px;"></i> 
          <p>${message}</p>
      </div>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  questionInput.addEventListener("input", () => {
    // Exibe o indicador e ícone de perfil ao digitar
    if (questionInput.value.trim() !== "") {
      typingIndicator.style.visibility = "visible";
    } else {
      typingIndicator.style.visibility = "hidden";
    }
  });

  chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const question = questionInput.value.trim();

    if (!selectedCharacter) {
      addUserMessage("Por favor, selecione um personagem antes de perguntar.");
      return;
    }

    if (question) {
      addUserMessage(question);
      questionInput.value = "";
      typingIndicator.style.visibility = "hidden";

      // Exibe a animação de digitação com as bolinhas
      const typingDiv = document.createElement("div");
      typingDiv.className = "message character-message";
      typingDiv.innerHTML = `
        <div class="message-content">
            <img src="${characterImages[selectedCharacter]}" alt="${selectedCharacter}" class="character-avatar">
            <i class="fa-solid fa-circle typing-bubble fa-bounce" style="animation-delay: 0s;"></i>
            <i class="fa-solid fa-circle typing-bubble fa-bounce" style="animation-delay: 0.2s;"></i>
            <i class="fa-solid fa-circle typing-bubble fa-bounce" style="animation-delay: 0.4s;"></i>
            <p class="response-message">Quando eu tiver uma IA eu te respondo <i class='fa-regular fa-face-sad-cry'></i></p> <!-- Resposta já incluída -->
        </div>`;
      
      chatMessages.appendChild(typingDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Após 1.2s, esconder as bolinhas e mostrar a resposta
      setTimeout(() => {
        // Esconde as bolinhas com a classe hide-bubbles
        typingDiv.querySelector(".message-content").classList.add("hide-bubbles");

        // Após 0.3s (tempo da transição das bolinhas), faz a resposta aparecer
        setTimeout(() => {
          const responseMessage = typingDiv.querySelector(".response-message");
          responseMessage.style.opacity = "1"; // Torna a resposta visível
        }, 300); // Aguarda a transição das bolinhas desaparecerem
      }, 2000); // Espera 1.2s para esconder as bolinhas
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const verticalMenu = document.getElementById("verticalMenu");

  menuToggle.addEventListener("click", () => {
      verticalMenu.classList.toggle("show"); // Alterna a exibição
  });
});

  // Donation Button
  const donateButton = document.querySelector(".donate-button");
  donateButton?.addEventListener("click", () => {
    alert("Obrigado por querer contribuir! Esta funcionalidade será implementada em breve.");
  });
});
