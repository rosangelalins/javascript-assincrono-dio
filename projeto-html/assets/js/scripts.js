//armazenar o endereço da API em uma constante.
//Nesse exercicio será feito somente uma requisição a uma API,
//mas no futuro caso queira chamar outras APIs, 
//então para não ficar escrevendo a mesma string o tempo todo
//vamos chamar pela variável ou constante:
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');



//função para carregar os gatinhos
const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

//essa função vai dar o await no getCat
//sempre que quiser carregar a imagem,colocar no campo da imagem a url que vamos receber do getCat
//que vamos pegar a webpurl, vamos retornar dentro da imagem
const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

catBtn.addEventListener('click', loadImg);//quando clicar ela muda de imagem

loadImg();//a página já começar com uma imagem

//const btn = document.getElementById('change-cat');
//btn.addEventListener('click', loadImg);//quando clicar ela muda de imagem