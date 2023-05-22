const conteudoHeader = `
    <header>
		<div>
			<!-- <img src="assets/img/header/logo-ime.png" alt="Logo do IME"> -->
			<h1>Instituto de Matemática e Estatística</h1>
			<h2>Universidade Federal Fluminense</h2>
			<hr>
		</div>
	</header>
`;

try {
document.querySelector('.header').innerHTML = conteudoHeader;
} catch{
    
}
