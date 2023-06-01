// Script usado para exibir corretamente as fórmulas matemáticas.
// Muitas páginas chamam este script, e caso os desenvolvedores destes scrips deixem de fazer a manutenção, podemos utilizar o código de outros desenvolvedores apenas mudando a chamada a partir daqui.

(function () {
  // Carregar o polyfill
  var polyfillScript = document.createElement('script');
  polyfillScript.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
  polyfillScript.onload = function () {
    console.log('Polyfill carregado');

    // Após o carregamento do polyfill, carregar o MathJax
    var mathjaxScript = document.createElement('script');
    mathjaxScript.id = 'MathJax-script';
    mathjaxScript.async = true;
    mathjaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    mathjaxScript.onload = function () {
      console.log('MathJax carregado');
    };

    document.head.appendChild(mathjaxScript);
  };

  document.head.appendChild(polyfillScript);
})();



