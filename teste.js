const namePokemon = document.querySelector(".nome-pokemon");
const imagemPokemon = document.querySelector(".imagem-pokemon");

const atributos = document.querySelectorAll(".atributo");
const barrazinhas = document.querySelectorAll(".barrazinha");

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

    for (var i = 0; i <= 5; i++) {
      atributos[i].textContent = `${dadosPokemon.stats[i].base_stat}`;
      barrazinhas[i].style.width =
        calculaPorcentagemDabarra(dadosPokemon.stats[i].base_stat) + "%";
    }
  });

  imagemPokemon.innerHTML = ` <img class="card-pokemon" src=${urlImagem} >`;
}
