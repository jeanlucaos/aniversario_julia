// Array que define a apresentação
const presentationSlides = [
    { 
        id: 1, 
        image: "imagens/slide1.jpg", 
        options: [
            { text: "Ir para Slide 2", nextSlide: 2 },
            { text: "Recomeçar Apresentação", nextSlide: 1 } // Exemplo de loop
        ] 
    },
    { 
        id: 2, 
        image: "imagens/slide2.jpg", 
        options: [
            { text: "Opção A (Vai para Slide 3)", nextSlide: 3 },
            { text: "Opção B (Vai para Slide 4)", nextSlide: 4 } 
        ] 
    },
    { 
        id: 3, 
        image: "imagens/slide3.jpg", 
        options: [
            { text: "Continuar no Slide 5", nextSlide: 5 }
        ] 
    },
    { 
        id: 4, 
        image: "imagens/slide4.jpg", 
        options: [
            { text: "Voltar para o Slide 3", nextSlide: 3 },
            { text: "Seguir para o Slide 5", nextSlide: 5 } 
        ] 
    },
    { 
        id: 5, 
        image: "imagens/slide5.jpg", 
        options: [
            { text: "Avançar para o Slide 6", nextSlide: 6 }
        ] 
    },
    { 
        id: 6, 
        image: "imagens/slide6.jpg", 
        options: [
            { text: "Ir para o Slide 7 (Final)", nextSlide: 7 },
            { text: "Voltar para o Slide 1", nextSlide: 1 }
        ] 
    },
    { 
        id: 7, 
        image: "imagens/slide7.jpg", 
        options: [
            { text: "🎉 Fim da Apresentação! Recomeçar.", nextSlide: 1 }
        ] 
    }
];

let currentSlideIndex = 0; // Começamos no índice 0 (Slide 1)

// Função que inicia a apresentação
function iniciarApresentacao() {
    document.querySelector('.hello-container').classList.add('hidden');
    document.getElementById('presentation-container').classList.remove('hidden');
    showSlide(1); // Exibe o Slide 1
}

// Função principal para exibir um slide
function showSlide(slideNumber) {
    // slideNumber será de 1 a 7, mas o array é de 0 a 6
    const slide = presentationSlides[slideNumber - 1]; 
    
    if (!slide) {
        console.error("Slide não encontrado:", slideNumber);
        return;
    }

    currentSlideIndex = slideNumber - 1;

    // 1. Atualiza a imagem
    document.getElementById('slide-image').src = slide.image;
    document.getElementById('slide-image').alt = `Slide ${slide.id}`;

    // 2. Atualiza o progresso
    document.getElementById('current-slide').textContent = slide.id;

    // 3. Atualiza os botões de controle
    const controlsDiv = document.getElementById('controls');
    controlsDiv.innerHTML = '<h2>O que você deseja fazer agora?</h2>'; // Limpa os botões antigos

    slide.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        // Quando o botão é clicado, chama a função showSlide com o ID do próximo slide
        button.onclick = () => showSlide(option.nextSlide);
        controlsDiv.appendChild(button);
    });
}