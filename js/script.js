// Menu fixo no topo
window.addEventListener('scroll', function(){
  let menu = this.document.querySelector('.menu')
  menu.classList.toggle('sticky', this.window.scrollY > 40)
})

// Mensagem ao clicar no logo do whatsapp
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

 //Scroll Reveal 
  const sr = ScrollReveal({reset: true})

  sr.reveal(".toRight", {
    origin: "right", //Para ele surgir de cima para baixo.
    distance: "40px", // A distancia do origin para a posição original do elemento.
    duration: 1500, // A duração da animação em ms
    delay: 200, // O delay para a animação acontecer
    reset: true // Ao sair do campo de tela, a animação não acontecerá novamente caso eu passe por ela novamente.
  });

  sr.reveal(".toScale", {
    scale: 0.85,
    distance: "40px", // A distancia do origin para a posição original do elemento.
    duration: 1500, // A duração da animação em ms
    delay: 200, // O delay para a animação acontecer
    reset: true // Ao sair do campo de tela, a animação não acontecerá novamente caso eu passe por ela novamente.
  });
