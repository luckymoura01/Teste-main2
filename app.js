const faqs = document.querySelectorAll(".faq");
    
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});


document.querySelectorAll('.faq').forEach((faq) => {
    const slider = faq.querySelector('.slider');
    if (!slider) return; // Se não existir slider, pula para a próxima FAQ
  
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;
  
    // Exibir o primeiro slide inicialmente
    slides[currentIndex].classList.add('active');
  
    // Função para mudar o slide
    function showSlide(index) {
      slides[currentIndex].classList.remove('active');
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add('active');
    }
  
    // Eventos para os botões de navegação
    const btnPrev = slider.querySelector('button.prev');
    const btnNext = slider.querySelector('button.next');
  
    if (btnPrev && btnNext) {
      btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(currentIndex - 1);
      });
  
      btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(currentIndex + 1);
      });
    }
  });

  
  // Variáveis globais para controle do modal
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");
let modalPrev = document.querySelector(".modal-prev");
let modalNext = document.querySelector(".modal-next");
let modalClose = document.querySelector(".close");

// Para armazenar o conjunto de imagens e o índice atual do slider clicado
let currentImages = [];
let currentIndex = 0;

// Adiciona evento de clique a cada imagem do slide
document.querySelectorAll(".slider .slide img").forEach((img, index) => {
    img.style.cursor = "pointer"; // Indica que a imagem é clicável

    img.addEventListener("click", function(e) {
        // Verifica qual é o slider que contém a imagem clicada
        const slider = img.closest(".slider");
        // Seleciona todas as imagens desse slider
        currentImages = Array.from(slider.querySelectorAll(".slide img"));
        // Encontra o índice da imagem clicada
        currentIndex = currentImages.indexOf(img);

        // Abre o modal com a imagem clicada
        openModal();
        e.stopPropagation();
    });
});

// Função para abrir o modal e exibir a imagem atual
function openModal() {
    modal.style.display = "flex";
    updateModalImage();
}

// Atualiza o src do modal com base no índice atual
function updateModalImage() {
    if (currentImages.length > 0) {
        modalImg.src = currentImages[currentIndex].src;
    }
}

// Botões de navegação do modal
modalPrev.addEventListener("click", function(e) {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateModalImage();
    e.stopPropagation();
});

modalNext.addEventListener("click", function(e) {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateModalImage();
    e.stopPropagation();
});

// Fechar o modal quando clicar no "x" ou fora do conteúdo
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", function(e) {
    // Se o clique for fora do conteúdo (na sobreposição)
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = "none";
}
