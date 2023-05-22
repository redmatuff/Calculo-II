
//TODO: Construir footers com links

const conteudoFooter = `
	<footer>
		<div id="ft-col1">
			<p>História do Projeto</p>
			<p id="email">redmatuff@gmail.com</p>
			<p>Direitos Autorais</p>
		</div>
		<div id="ft-col2">

			<p>Descubra a matemática em uma nova dimensão, com o poder da tecnologia ao seu lado. Explore recursos interativos e ferramentas digitais para aprimorar seu aprendizado. Desvende conceitos complexos e desafie seus limites. Deixe a tecnologia elevar sua compreensão e ampliar sua visão da matemática. Navegue por um mundo de possibilidades e conquiste o domínio dessa ciência fascinante.</p>
		</div>
		<div id="ft-col3">
			<!-- <p>Páginas Relacionadas</p> -->
			<div><img class="logo-uff" src="assets/img/footer/uffIncon.png" alt="Logo da UFF"></div>
			<div class="logos-redes-soc">
				<img src="assets/img/footer/InstaIncon.png" alt="Logo Instagram">
				<img src="assets/img/footer/ytIncon.png" alt="Logo YouTube">
				<img src="assets/img/footer/geogebraIncon2.png" alt="Logo Geogebra">
			</div>
		</div>
	</footer>
`;

const conteudoFooterNv2 = `
	<footer>
		<div id="ft-col1">
			<p>História do Projeto</p>
			<p id="email">redmatuff@gmail.com</p>
			<p>Direitos Autorais</p>
		</div>
		<div id="ft-col2">

			<p>Descubra a matemática em uma nova dimensão, com o poder da tecnologia ao seu lado. Explore recursos interativos e ferramentas digitais para aprimorar seu aprendizado. Desvende conceitos complexos e desafie seus limites. Deixe a tecnologia elevar sua compreensão e ampliar sua visão da matemática. Navegue por um mundo de possibilidades e conquiste o domínio dessa ciência fascinante.</p>
		</div>
		<div id="ft-col3">
			<!-- <p>Páginas Relacionadas</p> -->
			<div><img class="logo-uff" src="../../assets/img/footer/uffIncon.png" alt="Logo da UFF"></div>
			<div class="logos-redes-soc">
				<img src="../../assets/img/footer/InstaIncon.png" alt="Logo Instagram">
				<img src="../../assets/img/footer/ytIncon.png" alt="Logo YouTube">
				<img src="../../assets/img/footer/geogebraIncon2.png" alt="Logo Geogebra">
			</div>
		</div>
	</footer>
`;

try {
    document.querySelector('.footer').innerHTML = conteudoFooter;
} catch{
}

try {
    document.querySelector('.footer-nv2').innerHTML = conteudoFooterNv2;
} catch{
}
