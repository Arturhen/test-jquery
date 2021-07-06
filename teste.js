const namePokemon = document.querySelector(".nome-pokemon");
const imagemPokemon = document.querySelector(".imagem-pokemon");

const hp = document.querySelector(".hp-pokemon");
const atk = document.querySelector(".atk-pokemon");
const def = document.querySelector(".def-pokemon");
const spa = document.querySelector(".spa-pokemon");
const spd = document.querySelector(".spd-pokemon");
const spe = document.querySelector(".speed-pokemon");

const barraDeHp = document.querySelector(".hp-barra");
const barraDeAtk = document.querySelector(".atk-barra");
const barraDeDef = document.querySelector(".def-barra");
const barraDeSpa = document.querySelector(".spa-barra");
const barraDeSpd = document.querySelector(".spd-barra");
const barraDeSpeed = document.querySelector(".speed-barra");

//chama a primeira vez para nao deixar o site sem pokemon
atualizaPokemon();

//calcula logaritmicamente a porcentagem da barra de status
function calculaPorcentagemDabarra(a) {
  return (Math.log10(a / 2.16) * 100) / 2;
}

function atualizaPokemon() {
  let pokemonId = parseInt(Math.random() * 878) + 1;

  urlImagem =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
    ("00" + pokemonId).slice(-3) +
    ".png";

  urlPokemon = `https://pokeapi.co/api/v2/pokemon/` + pokemonId;

  $.get(urlPokemon, (dadosPokemon) => {
    namePokemon.textContent = `${dadosPokemon.name}`;
    hp.textContent = `HP: ${dadosPokemon.stats[0].base_stat}`;
    barraDeHp.style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[0].base_stat) + "%";

    atk.textContent = `ATK: ${dadosPokemon.stats[1].base_stat}`;
    barraDeAtk.style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[1].base_stat) + "%";

    def.textContent = `DEF: ${dadosPokemon.stats[2].base_stat}`;
    barraDeDef.style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[2].base_stat) + "%";

    spa.textContent = `SpA: ${dadosPokemon.stats[3].base_stat}`;
    barraDeSpa.style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[3].base_stat) + "%";

    spd.textContent = `SpD: ${dadosPokemon.stats[4].base_stat}`;
    barraDeSpd.style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[4].base_stat) + "%";

    spe.textContent = `Speed: ${dadosPokemon.stats[5].base_stat}`;
    barraDeSpeed.style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[5].base_stat) + "%";

    console.log(dadosPokemon);
    console.log(dadosPokemon.id);
    console.log(dadosPokemon.name);
    console.log(dadosPokemon.forms);
  });

  imagemPokemon.innerHTML = ` <img class="card-pokemon" src=${urlImagem} >`;
}
