       //O QUE TENHO QUE FAZER?
//PASSO 1: Capturar o valor da textarea para criar tweet
//PASSO 2: Construir tweet
//PASSO 3: Imprimir esse tweet

let TextArea = document.querySelector('textarea');
let Tweetar = document.querySelector('button');
const feed = document.querySelector('.main-content-listTweets');

function CollectTweet(event){
    event.preventDefault();

    const TweetTextarea = TextArea.value;
    CreatTweet(TweetTextarea);
}

Tweetar.addEventListener('click', CollectTweet);


function CreatTweet(TweetText){
    
/*
CRIAR TWEET
TEXTO DO TWEET
NOME 
FOTO
NOME USUÁRIO
HORÁRIO
*/

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();

const Tweet = {
    nome: "Petrysson",
    foto: './assets/img/avatar-clipart-maker-15.png',
    usuario: "@DevPetrysson",
    texto:TweetText,
    tempo: `${hours}:${minutes}`
}

    ListTemplate_Tweet(Tweet);
}

/* TENHO QUE CRIAR UMA FUNÇÃO QUE MOSTRE A MINHA
 LISTA DE TWEET NA TELA DO MEU DISPOSITIVO*/

function ListTemplate_Tweet(tweet){
    console.log(tweet)

    const {nome,foto,usuario,texto,tempo} = tweet

    let li = document.createElement('li');
    li.classList.add('main-content-Tweets')

    let img = document.createElement('img');
    img.src = foto
    img.classList.add('tweet-img')

    let div = document.createElement('div');
    div.classList.add('Tweet-content')

    let h2 = document.createElement('h2');
    h2.innerText = nome

    let span = document.createElement('span');
    span.innerText =  ` ${usuario} - ${tempo} `
    

    let p = document.createElement('p');
    p.innerText = texto

    //ADICIONANDO ELEMENTO DENTTRO DA DIV
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    //ADICIONANDO ELEMENTOS DENTRO DA LI
    li.appendChild(img);
    li.appendChild(div);
    
    feed.appendChild(li);
    TextArea.value = '';
}