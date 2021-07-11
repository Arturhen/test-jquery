const namePokemon = document.querySelector(".nome-pokemon");
const imagemPokemon = document.querySelector(".imagem-pokemon");

const atributos = document.querySelectorAll(".atributo")

const barrazinhas = document.querySelectorAll(".barrazinha")

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
    atributos[0].textContent = `HP: ${dadosPokemon.stats[0].base_stat}`;
    barrazinhas[0].style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[0].base_stat) + "%";

    atributos[1].textContent = `ATK: ${dadosPokemon.stats[1].base_stat}`;
    barrazinhas[1].style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[1].base_stat) + "%";

    atributos[2].textContent = `DEF: ${dadosPokemon.stats[2].base_stat}`;
    barrazinhas[2].style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[2].base_stat) + "%";

    atributos[3].textContent = `SpA: ${dadosPokemon.stats[3].base_stat}`;
    barrazinhas[3].style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[3].base_stat) + "%";

    atributos[4].textContent = `SpD: ${dadosPokemon.stats[4].base_stat}`;
    barrazinhas[4].style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[4].base_stat) + "%";

    atributos[5].textContent = `Speed: ${dadosPokemon.stats[5].base_stat}`;
    barrazinhas[5].style.width =
      calculaPorcentagemDabarra(dadosPokemon.stats[5].base_stat) + "%";
    

    console.log(dadosPokemon);
    console.log(dadosPokemon.id);
    console.log(dadosPokemon.name);
    console.log(dadosPokemon.forms);
  });

  imagemPokemon.innerHTML = ` <img class="card-pokemon" src=${urlImagem} >`;
}
