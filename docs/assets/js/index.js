
// TODO: Fazer transição suave

const sc1 = document.querySelector('#sc1');
const sc2 = document.querySelector('#sc2');
const sc3 = document.querySelector('#sc3');
const sc4 = document.querySelector('#sc4');
const sc5 = document.querySelector('#sc5');
var qualEstavaExpandido = 0;


document.addEventListener('click', function(event) {
    var qualEstaExpandido = 0;
    if(sc1.contains(event.target)) {
        sc1.classList.add('expandido');
        qualEstaExpandido = 1;
    }else{
        sc1.classList.remove('expandido');
    }
    if(sc2.contains(event.target)) {
        sc2.classList.add('expandido');
        qualEstaExpandido = 2;
    }else{
        sc2.classList.remove('expandido');
    }
    if(sc3.contains(event.target)) {
        sc3.classList.add('expandido');
        qualEstaExpandido = 3;
    }else{
        sc3.classList.remove('expandido');
    }
    if(sc4.contains(event.target)) {
        sc4.classList.add('expandido');
        qualEstaExpandido = 4;
    }else{
        sc4.classList.remove('expandido');
    }
    if(sc5.contains(event.target)) {
        sc5.classList.add('expandido');
        qualEstaExpandido = 5;
    }else{
        sc5.classList.remove('expandido');
    }


    if(sc1.contains(event.target) && qualEstavaExpandido != 1) {
        scrollToCenter(sc1);
    }else if(sc2.contains(event.target) && qualEstavaExpandido != 2) {
        scrollToCenter(sc2);
    }else if(sc3.contains(event.target) && qualEstavaExpandido != 3) {
        scrollToCenter(sc3);
    }else if(sc4.contains(event.target) && qualEstavaExpandido != 4) {
        scrollToCenter(sc4);
    }else if(sc5.contains(event.target) && qualEstavaExpandido != 5) {
        scrollToCenter(sc5);
    }

    qualEstavaExpandido = qualEstaExpandido;


});




// var items = document.getElementsByClassName('tiles');

// for (var i = 0; i < items.length; i++) {
//     items[i].addEventListener('click', scrollToCenter);
// }





//Rolar para centralizar elemento clicado


// function scrollToCenter() {
    
//     var element = this.target;
//     var elementRect = element.getBoundingClientRect();
//     var elementOffsetTop = elementRect.top + window.pageYOffset;
//     var windowHeight = window.innerHeight;

//     // Calcula a posição de rolagem para centralizar o elemento
//     var scrollToPosition = elementOffsetTop - (windowHeight * 0 / 2);

//     // Rola a página suavemente usando a função 'scrollTo'
//     window.scrollTo({
//     top: scrollToPosition,
//     behavior: 'smooth'
//     });
// }


function scrollToCenter(element) {
  // Obtém as dimensões da janela do navegador
  const windowHeight = window.innerHeight;
  const windowScroll = window.scrollY || window.pageYOffset;

  // Obtém as dimensões do elemento
  const elementHeight = element.offsetHeight;

  // Calcula a posição desejada para o elemento ficar centralizado na tela
  var centraliza = 0
  if (windowHeight > elementHeight) {
    centraliza = 1
  }
  const desiredScroll = element.offsetTop - centraliza * (windowHeight - elementHeight) / 2;

  // Rola a página até a posição desejada
  window.scrollTo({
    top: desiredScroll,
    behavior: 'smooth'
  });
}
