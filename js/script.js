const canvas = document.querySelector('canvas');
const perso = document.querySelector('.perso');
const npc = document.querySelector(".npc");
const fundo = document.querySelector(".fundo");




// Função para fazer o personagem principal pular

const jump = () => { // Adiciona a classe "jump" ao elemento do personagem
    perso.classList.add("jump");

    setTimeout(() => {
      perso.classList.remove("jump");
      perso.src = "./img/1.gif";
    }, 900);
  };
// Loop que verifica colisões e atualiza o jogo continuamente
  const loop = setInterval(() => {
    const npcPosition = npc.offsetLeft;
    const persoPosition = +window
      .getComputedStyle(perso)
      .bottom.replace("px", "");
  
    if (npcPosition < 110 && npcPosition > 0 && persoPosition < 220) {
      npc.style.animation = "none";
      npc.style.left = `${npcPosition}px`;
  

  
      fundo.src = "./img/morreu.png";// Altera a imagem de fundo para indicar que o personagem morreu
    }
  }, 10);// Intervalo de tempo entre as verificações de colisão (10 milissegundos)
  
  
  document.addEventListener("click", jump);
  




