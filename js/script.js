let email = document.getElementById("campo-email");


function mostrarPopup(){
    window.alert("Hello Word")
}

function renderizarNoticias(){
    let espaco = document.getElementById("espaco-noticias");
    
    let listaNoticias = [
        {
            imagem: "img/fifa.png",
            titulo: "Brasil leva 1 gol no início do jogo",
            descricao: "Houve uma falha na defesa brasileira, que deixou o atacante do time adversario na cara do gol brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "O dólar está alto",
            descricao: "O dolar está alto há muito tempo"
        },
        {
            imagem: "img/fifa.png",
            titulo: "Brasil leva 1 gol no início do jogo",
            descricao: "Houve uma falha na defesa brasileira, que deixou o atacante do time adversario na cara do gol brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "O dólar está alto",
            descricao: "O dolar está alto há muito tempo"
        },
        {
            imagem: "img/fifa.png",
            titulo: "Brasil leva 1 gol no início do jogo",
            descricao: "Houve uma falha na defesa brasileira, que deixou o atacante do time adversario na cara do gol brasileiro"
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "O dólar está alto",
            descricao: "O dolar está alto há muito tempo"
        }
    ]

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticia = listaNoticias[index];
        
        template += ` <div class="cardnews">
        <img src= ${noticia.imagem} alt="Foto da jogadora profissional">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.descricao}</p>
    </div>`
    }

    espaco.innerHTML = template;
}
// DOM - Document Object Model 
// RegEx - Expressões Regulares

function cadastrarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)
}