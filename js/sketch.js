let xBolinha = 320;
let yBolinha = 200;
let diametro = 32;
let raio = diametro /2;

let velocidadeBolinhax = 9;
let velocidadeBolinhay = 7;

let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

let colidiu = false;

let xRaqueteOponente = 587;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

let meusPontos = 0;
let pontosOponente = 0;

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  velocidadeBolinha();
  colisaoBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentoDaRaquete();
  VerificaColisao(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  VerificaColisao(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  calculaChanceErrar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function velocidadeBolinha(){
  xBolinha += velocidadeBolinhax;
  yBolinha += velocidadeBolinhay;
}

function colisaoBolinha(){
   if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeBolinhax *= -1;
  }
  if (yBolinha + raio> height || yBolinha - raio < 0){
    velocidadeBolinhay *= -1;
  }
}

function mostraRaquete(x, y) {
    rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentoDaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisao(){
  if(xBolinha - raio < xRaquete + comprimentoRaquete 
  && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio   > yRaquete){
    velocidadeBolinhax *= -1;
    raquete.play();
  }
}

function VerificaColisao(x, y){
  colidiu =
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeBolinhax *= -1;
    raquetada.play();
  }
}

//Vs CPU
function movimentoRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete /2 - 30;
  yRaqueteOponente += velocidadeYOponente;
  calculaChanceErrar()
}

//Segundo Player
//function movimentoRaqueteOponente(){
  //if(keyIsDown(87)){
  //  yRaqueteOponente -= 10;
  //}
  //if(keyIsDown(83)){
   // yRaqueteOponente += 10;
  //}
// }

function calculaChanceErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(25, 25, 112));
  rect(178, 10, 40, 20)
  fill(255);
  text(meusPontos, 198, 26);
  fill(color(25, 25, 112));
  rect(381, 10, 40, 20)
  fill(255);
  text(pontosOponente, 401, 26);
}

function marcaPonto(){
  if(xBolinha + raio > 597){
    meusPontos += 1;
    ponto.play();
  }
  if(xBolinha + raio < 35){
    pontosOponente += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}