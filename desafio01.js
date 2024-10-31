let heroi = "Superman";
let xpHeroi = 9999;
let nivel = "";

switch (true) {
  case xpHeroi < 1000:
    nivel = "Ferro";
    break;
  case xpHeroi < 2000:
    nivel = "Bronze";
    break;
  case xpHeroi < 5000:
    nivel = "Prata";
    break;
  case xpHeroi < 7000:
    nivel = "Ouro";
    break;
  case xpHeroi < 8000:
    nivel = "Ferro";
    break;
  case xpHeroi < 1000:
    nivel = "Platina";
    break;
  case xpHeroi < 9000:
    nivel = "Ascendente";
    break;
  case xpHeroi < 10000:
    nivel = "Imortal";
    break;
  default:
    nivel = "Radiante";
    break;
}

console.log(`O Heroi de nome ${heroi} está no nivel ${nivel}`);
