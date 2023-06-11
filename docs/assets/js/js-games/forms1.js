// TODO: CRIAR UM APAGADOR
// TODO: CRIAR UM BOTÃO DE CONFERIR
// TODO: FAZER A LÓGICA DA CONFERÊNCIA DA FÓRMULA
    // LÓGICA:
		// 1 2 3 4 5
		// 1 2 5 4 3
		// 3 4 5 2 1
		// 5 4 3 2 1
        // 1 2 3 5
		// 1 2 5 3
		// 3 5 2 1
		// 5 3 2 1
		// 1 6 3 2 5
		// 1 6 5 2 3
		// 5 2 1 6 3
		// 3 2 1 6 5


var contaclick = 0;
const areaMontagem = document.getElementById('area-montagem-1');


const form1 = document.getElementById('f1-1');
var form1click = 0;
const form1mat = document.createElement('div');
form1mat.className = 'form-area';
form1mat.innerHTML = '\\( \\frac{{dN}}{{dt}} \\)';
form1.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form1mat);
    MathJax.typesetPromise([form1mat]).then(() => {});
});
form1mat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form1mat);
});


const form2 = document.getElementById('f1-2'); 
var form2click = 0;
const form2mat = document.createElement('div');
form2mat.className = 'form-area';
form2mat.innerHTML = '\\( = \\)';
form2.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form2mat);
    MathJax.typesetPromise([form2mat]).then(() => {});
});


form2mat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form2mat);
});


const form3 = document.getElementById('f1-3');
var form3click = 0;
const form3mat = document.createElement('div');
form3mat.className = 'form-area';
form3mat.innerHTML = '\\( k \\)';
form3.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form3mat);
    MathJax.typesetPromise([form3mat]).then(() => {});
});
form3mat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form3mat);
});


const form4 = document.getElementById('f1-4');
var form4click = 0;
const form4mat = document.createElement('div');
form4mat.className = 'form-area';
form4mat.innerHTML = '\\( \\cdot \\)';
form4.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form4mat);
    MathJax.typesetPromise([form4mat]).then(() => {});
});
form4mat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form4mat);
});


const form5 = document.getElementById('f1-5');
var form5click = 0;
const form5mat = document.createElement('div');
form5mat.className = 'form-area';
form5mat.innerHTML = '\\( N_{(t)} \\)';
form5.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form5mat);
    MathJax.typesetPromise([form5mat]).then(() => {});
});
form5mat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form5mat);
});

const form6 = document.getElementById('f1-6');
var form6click = 0;
const form6mat = document.createElement('div');
form6mat.className = 'form-area';
form6mat.innerHTML = '\\( / \\)';
form6.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form6mat);
    MathJax.typesetPromise([form6mat]).then(() => {});
});
form6mat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form6mat);
});


const form_A = document.getElementById('f1-a');
var form_Aclick = 0;
const form_Amat = document.createElement('div');
form_Amat.className = 'form-area';
form_Amat.innerHTML = '\\( N_1 \\)';
form_A.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Amat);
    MathJax.typesetPromise([form_Amat]).then(() => {});
});
form_Amat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Amat);
});

const form_B = document.getElementById('f1-b');
var form_Bclick = 0;
const form_Bmat = document.createElement('div');
form_Bmat.className = 'form-area';
form_Bmat.innerHTML = '\\( N_2 \\)';
form_B.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Bmat);
    MathJax.typesetPromise([form_Bmat]).then(() => {});
});
form_Bmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Bmat);
});

const form_C = document.getElementById('f1-c');
var form_Cclick = 0;
const form_Cmat = document.createElement('div');
form_Cmat.className = 'form-area';
form_Cmat.innerHTML = '\\( \\overline{N}_{(t_1, t_2)} \\)';
form_C.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Cmat);
    MathJax.typesetPromise([form_Cmat]).then(() => {});
});
form_Cmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Cmat);
});


const form_D = document.getElementById('f1-d');
var form_Dclick = 0;
const form_Dmat = document.createElement('div');
form_Dmat.className = 'form-area';
form_Dmat.innerHTML = '\\( N_f \\)';
form_D.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Dmat);
    MathJax.typesetPromise([form_Dmat]).then(() => {});
});
form_Dmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Dmat);
});


const form_E = document.getElementById('f1-e');
var form_Eclick = 0;
const form_Emat = document.createElement('div');
form_Emat.className = 'form-area';
form_Emat.innerHTML = '\\( N_i \\)';
form_E.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Emat);
    MathJax.typesetPromise([form_Emat]).then(() => {});
});
form_Emat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Emat);
});

const form_F = document.getElementById('f1-f');
var form_Fclick = 0;
const form_Fmat = document.createElement('div');
form_Fmat.className = 'form-area';
form_Fmat.innerHTML = '\\( \\Delta N_{1,2} \\)';
form_F.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Fmat);
    MathJax.typesetPromise([form_Fmat]).then(() => {});
});
form_Fmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Fmat);
});


const form_G = document.getElementById('f1-g');
var form_Gclick = 0;
const form_Gmat = document.createElement('div');
form_Gmat.className = 'form-area';
form_Gmat.innerHTML = '\\( \\Delta N_{/s} \\)';
form_G.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Gmat);
    MathJax.typesetPromise([form_Gmat]).then(() => {});
});
form_Gmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Gmat);
});

const form_H = document.getElementById('f1-h');
var form_Hclick = 0;
const form_Hmat = document.createElement('div');
form_Hmat.className = 'form-area';
form_Hmat.innerHTML = '\\( + \\)';
form_H.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Hmat);
    MathJax.typesetPromise([form_Hmat]).then(() => {});
});
form_Hmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Hmat);
});

const form_I = document.getElementById('f1-i');
var form_Iclick = 0;
const form_Imat = document.createElement('div');
form_Imat.className = 'form-area';
form_Imat.innerHTML = '\\( - \\)';
form_I.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Imat);
    MathJax.typesetPromise([form_Imat]).then(() => {});
});
form_Imat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Imat);
});

const form_J = document.getElementById('f1-j');
var form_Jclick = 0;
const form_Jmat = document.createElement('div');
form_Jmat.className = 'form-area';
form_Jmat.innerHTML = '\\( ( \\)';
form_J.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Jmat);
    MathJax.typesetPromise([form_Jmat]).then(() => {});
});
form_Jmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Jmat);
});

const form_K = document.getElementById('f1-k');
var form_Kclick = 0;
const form_Kmat = document.createElement('div');
form_Kmat.className = 'form-area';
form_Kmat.innerHTML = '\\( ) \\)';
form_K.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Kmat);
    MathJax.typesetPromise([form_Kmat]).then(() => {});
});
form_Kmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Kmat);
});

const form_L = document.getElementById('f1-l');
var form_Lclick = 0;
const form_Lmat = document.createElement('div');
form_Lmat.className = 'form-area';
form_Lmat.innerHTML = '\\( log \\)';
form_L.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Lmat);
    MathJax.typesetPromise([form_Lmat]).then(() => {});
});
form_Lmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Lmat);
});


const form_M = document.getElementById('f1-m');
var form_Mclick = 0;
const form_Mmat = document.createElement('div');
form_Mmat.className = 'form-area';
form_Mmat.innerHTML = '\\( ln \\)';
form_M.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Mmat);
    MathJax.typesetPromise([form_Mmat]).then(() => {});
});
form_Mmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Mmat);
});

const form_N = document.getElementById('f1-n');
var form_Nclick = 0;
const form_Nmat = document.createElement('div');
form_Nmat.className = 'form-area';
form_Nmat.innerHTML = '\\( exp \\)';
form_N.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Nmat);
    MathJax.typesetPromise([form_Nmat]).then(() => {});
});
form_Nmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Nmat);
});

const form_O = document.getElementById('f1-o');
var form_Oclick = 0;
const form_Omat = document.createElement('div');
form_Omat.className = 'form-area';
form_Omat.innerHTML = '\\( {^2} \\)';
form_O.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Omat);
    MathJax.typesetPromise([form_Omat]).then(() => {});
});
form_Omat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Omat);
});


const form_P = document.getElementById('f1-p');
var form_Pclick = 0;
const form_Pmat = document.createElement('div');
form_Pmat.className = 'form-area';
form_Pmat.innerHTML = '\\( \\frac{{d^2N}}{{dt^2}} \\)';
form_P.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Pmat);
    MathJax.typesetPromise([form_Pmat]).then(() => {});
});
form_Pmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Pmat);
});

const form_Q = document.getElementById('f1-q');
var form_Qclick = 0;
const form_Qmat = document.createElement('div');
form_Qmat.className = 'form-area';
form_Qmat.innerHTML = '\\( t \\)';
form_Q.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Qmat);
    MathJax.typesetPromise([form_Qmat]).then(() => {});
});
form_Qmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Qmat);
});

const form_R = document.getElementById('f1-r');
var form_Rclick = 0;
const form_Rmat = document.createElement('div');
form_Rmat.className = 'form-area';
form_Rmat.innerHTML = '\\( F \\)';
form_R.addEventListener('click', function(){
    contaclick += 1;
    areaMontagem.appendChild(form_Rmat);
    MathJax.typesetPromise([form_Rmat]).then(() => {});
});
form_Rmat.addEventListener('click', function(){
    contaclick -= 1;
    areaMontagem.removeChild(form_Rmat);
});