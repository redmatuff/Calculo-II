const conteudoTitulos = `
	<div>
		<div class="titulos">
			<h1><a href="../../index.html">Cálculo Diferencial</a></h1>
			<h2>RECURSOS EDUCACIONAIS DIGITAIS PARA O ENSINO DE MATEMÁTICA</h2>
		</div>
	</div>
`;

const conteudoTitulosNv3 = `
	<div class = "container-titulos">
		<div class="titulos">
			<h1><a href="../../../index.html">Cálculo Diferencial</a></h1>
			<h2>RECURSOS EDUCACIONAIS DIGITAIS PARA O ENSINO DE MATEMÁTICA</h2>
		</div>
	</div>
`;

const conteudoTitulosNv4 = `
	<div class = "container-titulos">
		<div class="titulos">
			<h1><a href="../../../../index.html">Cálculo Diferencial</a></h1>
			<h2>RECURSOS EDUCACIONAIS DIGITAIS PARA O ENSINO DE MATEMÁTICA</h2>
		</div>
	</div>
`;

try {
document.querySelector('.container-titulos').innerHTML = conteudoTitulos;
} catch{};

try {
	document.querySelector('.container-titulos-nv3').innerHTML = conteudoTitulosNv3;
} catch {};

try {
	document.querySelector('.container-titulos-nv4').innerHTML = conteudoTitulosNv4;
} catch {};
