const tela = document.querySelector('.tela');
tela.style.position = 'relative';
let vetBact = Array();

// Captura o valor do input range
var numColInput = document.getElementById('num-col-bar');
var numColOutput = document.getElementById('num-col-value');
let nCol;
nCol = numColInput.value;
numColOutput.value = nCol;
numColInput.addEventListener('input', function() {
    nCol = numColInput.value;
    nLin = numLinInput.value;
    numColOutput.value = nCol;
    vetBact = [];
    // matrizBac = [];
    while (tela.firstChild) {
        tela.removeChild(tela.firstChild);
    }
    for (let j = 0; j < nLin; j++) {
        // linBac = [];
        for (let i = 0; i < nCol; i++) {
            const celula = document.createElement('div');
            celula.className = 'celula';
            celula.id = 'cel' + j + '.' + i;
            celula.style.position = 'absolute';
            celula.style.width = (100/nCol) + '%';
            celula.style.height = (100/nLin) + '%';
            tela.appendChild(celula);
            celula.style.left = (100/nCol)*i + '%';
            celula.style.top = (100/nLin)*j + '%';
            // linBac.push(0);
        }
        // matrizBac.push(linBac);
    }
    for (let j=0; j<nLin*nCol; j++){
        vetBact.push(j);
    }

});

var numLinInput = document.getElementById('num-lin-bar');
var numLinOutput = document.getElementById('num-lin-value');
let nLin;
nLin = numLinInput.value;
numLinOutput.value = nLin;
numLinInput.addEventListener('input', function() {
    nLin = numLinInput.value;
    nCol = numColInput.value;
    numLinOutput.value = nLin;
    vetBact = [];
    // matrizBac = [];
    while (tela.firstChild) {
        tela.removeChild(tela.firstChild);
    }
    for (let j = 0; j < nLin; j++) {
        // linBac = [];
        for (let i = 0; i < nCol; i++) {
            const celula = document.createElement('div');
            celula.className = 'celula';
            celula.id = 'cel' + j + '.' + i;
            celula.style.position = 'absolute';
            celula.style.width = (100/nCol) + '%';
            celula.style.height = (100/nLin) + '%';
            tela.appendChild(celula);
            celula.style.left = (100/nCol)*i + '%';
            celula.style.top = (100/nLin)*j + '%';
            // linBac.push(0);
        }
        // matrizBac.push(linBac);
    }
    for (let j=0; j<nLin*nCol; j++){
        vetBact.push(j);
    }

});

var numBacInicInput = document.getElementById('num-bac-inic-bar');
var numBacInicOutput = document.getElementById('num-bac-inic-value');
var nBacIn;
nBacIn = numBacInicInput.value;
numBacInicOutput.value = nBacIn;
numBacInicInput.addEventListener('input', function() {
    nBacIn = numBacInicInput.value;
    numBacInicOutput.value = nBacIn;
});

var txCrescInput = document.getElementById('tx-cresc-bar');
var txCrescOutput = document.getElementById('tx-cresc-value');
var txCresc;
txCresc = txCrescInput.value;
txCrescOutput.value = 'x' + txCresc;
txCrescInput.addEventListener('input', function() {
    txCresc = txCrescInput.value;
    txCrescOutput.value = 'x' + txCresc;
});

var linhaTempo = document.getElementById('linha-tempo');
var tempoValue = document.getElementById('tempo-value');
var btnResp = document.getElementById('btn-resp');
var tempo;
tempo = linhaTempo.value;
tempoValue.value = tempo;
linhaTempo.addEventListener('input', function(){
    tempo = linhaTempo.value;
    tempoValue.value = tempo;
});

const tempoMax = 20;
const passo = 0.05;
let isLoopRunning = false;
var numBact;
var txtSol = document.getElementById('txt-sol');

let numAleat;
let indiceVetBact;
let indiceXVetBact;
let indiceYVetBact;
var celDaVez;
var respAluno = document.getElementById("resp-aluno");
var msg = document.getElementById("msg");

numBact = nBacIn * Math.exp(tempo*Math.log(txCresc));
btnResp.addEventListener('click', async function(){
    if (isLoopRunning == false){
        isLoopRunning = true;
        
        vetBact = [];
        for (let j=0; j<nLin*nCol; j++){
            vetBact.push(j);
        }
        
        txtSol.value = '';
        respAluno.style.backgroundColor = 'white';

        btnResp.style.backgroundColor = 'rgba(255, 255, 0, 0.75)';
        msg.innerHTML='Calculando...';
        let i = 0;
        let j = 0;
        let numBacAnt = nBacIn;
        encheu = false;
        
        //APAGAR BACTÉRIAS
        Array.from(tela.children).forEach(childElement => {
            // childElement.innerHTML = '';
            childElement.style.backgroundImage = 'radial-gradient(#3f3f3f, #000000)';
        });
        var celulas = document.getElementsByClassName('celula');
        // celulas.style.backgroundImage = 'radial-gradient(#3f3f3f, #000000)';

        


        // DESENHAR AS BACTERIAS INICIAIS
        while (j < nBacIn) {
            numAleat = (Math.random() * (vetBact.length - 1)).toFixed(0);
            indiceVetBact = vetBact[numAleat];
            indiceXVetBact = indiceVetBact % nLin + 0;
            indiceYVetBact = Math.floor(indiceVetBact/nLin) + 0;
            vetBact.splice(numAleat, 1);
            celDaVez = document.getElementById('cel'+ indiceXVetBact + '.' + indiceYVetBact);
            try {
                // celDaVez.innerHTML = 'A';
                celDaVez.style.color = 'white';
                celDaVez.style.textAlign = 'center';
                celDaVez.style.backgroundImage = 'radial-gradient(#220000, #000)';
            }catch{
                console.log('nao achou a célula');
                console.log('j = ', j);
                console.log('Vetor de Bacterias: ' + vetBact);
                console.log('Número sorteado: ' + numAleat);
                console.log('Índice x calculado: ' + indiceXVetBact);
                console.log('Índice y calculado: ' + indiceYVetBact);
                console.log('Número de bactérias calculado: ' + numBact);
            }
            j++;
        }


        await new Promise(resolve => setTimeout(resolve, (500)));

        while (i <= (tempoMax/passo) && encheu == false ){
            await new Promise(resolve => setTimeout(resolve, (2/passo)));
            tempo = i/tempoMax;
            linhaTempo.value = tempo;
            tempoValue.value = (tempo-passo/2).toFixed(1);
            i++;
            numBact = nBacIn * Math.exp(tempo*Math.log(txCresc));

            if (numBact > nCol * nLin){
                encheu = true;
            }
            console.log('Tempo: ', tempo, '; numBact', numBact);


            // DESENHAR BACTÉRIAS
            
            j = Math.floor(numBacAnt);
            while (j < Math.floor(numBact) && j < (nCol * nLin)) {
                
                numAleat = (Math.random() * (vetBact.length - 1)).toFixed(0);
                indiceVetBact = vetBact[numAleat];

                indiceXVetBact = indiceVetBact % nLin + 0;
                indiceYVetBact = Math.floor(indiceVetBact/nLin) + 0;
                
                vetBact.splice(numAleat, 1);
                celDaVez = document.getElementById('cel'+ indiceXVetBact + '.' + indiceYVetBact);

                console.log(indiceXVetBact, indiceYVetBact, indiceVetBact, '; numAleat = ', numAleat);
                try {
                    // celDaVez.innerHTML = '*';
                    celDaVez.style.color = 'white';
                    celDaVez.style.textAlign = 'center';
                    celDaVez.style.backgroundImage = 'radial-gradient(#000000, #000)';

                }catch{
                    console.log('nao achou a célula');
                    console.log('j = ', j);
                    console.log('Vetor de Bacterias: ' + vetBact);
                    console.log('Número sorteado: ' + numAleat);
                    console.log('Índice x calculado: ' + indiceXVetBact);
                    console.log('Índice y calculado: ' + indiceYVetBact);
                    console.log('Número de bactérias calculado: ' + numBact);
                }

                j++;
            }

            numBacAnt = numBact;
        
        
        }
        let tempoCalc = (Math.log(nCol * nLin / nBacIn))/(Math.log(txCresc))
        txtSol.value = tempoCalc.toFixed(2);          
        isLoopRunning = false;


        







        if (tempoCalc*100%100 == 0) {
            respAluno.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            msg.innerHTML=' Este valor é fácil de fazer de cabeça. Tente calcular algo mais difícil!';
        }else if (Math.round(respAluno.value * 10000000000) == Math.round(tempoCalc * 10000000000)){
            respAluno.style.backgroundColor = 'rgba(0, 0, 255, 0.75)';
            msg.innerHTML='Parabéns! Você conseguiu chegar na solução!';
        } else if (Math.round(respAluno.value * 100000) == Math.round(tempoCalc * 100000)){
            respAluno.style.backgroundColor = 'rgba(0, 255, 0, 0.75)';
            msg.innerHTML='Ótimo, agora me prove que isso não é um chute! Apresente um número com dez casas decimais corretas!';
            
        } else if (Math.round(respAluno.value * 1000) == Math.round(tempoCalc * 1000)){
            respAluno.style.backgroundColor = 'rgba(255, 255, 0, 0.75)';
            msg.innerHTML='Boa resposta, mas tente algo um pouco mais preciso.';
        } else if (Math.round(respAluno.value * 100) == Math.round(tempoCalc * 100)){
            respAluno.style.backgroundColor = 'rgba(255, 125, 0, 0.75)';
            msg.innerHTML='Esta resposta está correta até a segunda casa decimal, mas o simulador já apresenta esta precisão. Apresente um valor mais preciso.';
        } else {
            respAluno.style.backgroundColor = 'rgba(255, 0, 0, 0.75)';
            msg.innerHTML='Resposta incorreta ou pouco precisa. Tente novamente!';
        }
        
        btnResp.style.backgroundColor = '#e5e5e5';







    }
});


// let matrizBac = new Array();
// let linBac = new Array();
for (let j = 0; j < nLin; j++) {
    // linBac = [];
    for (let i = 0; i < nCol; i++) {
        const celula = document.createElement('div');
        celula.className = 'celula';
        celula.id = 'cel' + j + '.' + i;
        celula.style.position = 'absolute';
        celula.style.width = (100/nCol) + '%';
        celula.style.height = (100/nLin) + '%';
        tela.appendChild(celula);
        celula.style.left = (100/nCol)*i + '%';
        celula.style.top = (100/nLin)*j + '%';
        // linBac.push(0);
    }
    // matrizBac.push(linBac);

}

for (let j=0; j<nLin*nCol; j++){
    vetBact.push(j);
}



