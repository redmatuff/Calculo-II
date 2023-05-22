const conteudoHeader = `
        <header>
            <div>
                <!-- <img src="assets/img/header/logo-ime.png" alt="Logo do IME"> -->
                <h1><a href="https://www.uff.br/?q=setor/instituto-de-matematica-e-estatistica">Instituto de Matemática e Estatística</a></h1>
                <h2><a href="https://www.uff.br">Universidade Federal Fluminense</a></h2>
                <hr>
            </div>
        </header>
`;

try {
document.querySelector('.header').innerHTML = conteudoHeader;
} catch{
    
}
