//ator do jogo

let xAtor = 90;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
        yAtor += 3; 
      }
    }
  if (keyIsDown(LEFT_ARROW)){
      xAtor -= 3;
    }
  if (keyIsDown(RIGHT_ARROW)){
      xAtor += 3;
    }
  }

function verificaColisao(){
  
  for (let i = 0; i < imagemCarros.length; i++){
  colisao = collideRectCircle(xCarros[i], yCarros[i],            comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
  if (colisao) {
      voltaAtorPosicaoInicial();
      somDaColisao.play();
    if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }    
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  text(meusPontos, width / 5, 27);
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 240, 60));
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos++;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}