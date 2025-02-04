const faqs = document.querySelectorAll(".faq");
function checkForSearchTerm() {
    const searchTerm = window.find(""); 
    if (!searchTerm) return;

    faqs.forEach((faq) => {
        const resposta = faq.querySelector(".resposta p").innerText;
        if (resposta.toLowerCase().includes(searchTerm.toLowerCase())) {
            faq.classList.add("active");  
        } else {
            faq.classList.remove("active"); 
        }
    });
}

window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'f') {
        setTimeout(checkForSearchTerm, 0);  
    }
});
    
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
