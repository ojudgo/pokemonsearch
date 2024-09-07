const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

//Stat/Sprite constants
const pName = document.getElementById('pokemon-name');
const pID = document.getElementById('pokemon-id');
const spriteContainer = document.getElementById('sprite-container');
const pWeight = document.getElementById('weight');
const pHeight = document.getElementById('height');
const pTypes = document.getElementById('types');
const pHP = document.getElementById('hp');
const pAttack = document.getElementById('attack');
const pDefence = document.getElementById('defense');
const pSpecialA = document.getElementById('special-attack');
const pSpecialD = document.getElementById('special-defense');
const pSpeed = document.getElementById('speed');

const fetchData = async () => {
  try {
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`);
    const data = await res.json();
    console.log(data);
    pName.textContent = data.name.toUpperCase();
    pID.textContent = `#${data.id}`;
    spriteContainer.innerHTML = `<img id='sprite' src=${data.sprites.front_default} alt='${data.name}' >`;
    pHP.textContent = `HP: ${data.stats[0].base_stat}`;

pSpeed.textContent = `Speed: ${data.stats[5].base_stat}`;

pAttack.textContent = `Attack: ${data.stats[1].base_stat}`;

pDefence.textContent = `Defence: ${data.stats[2].base_stat}`;

pSpecialA.textContent = `Special Attack: ${data.stats[3].base_stat}`;

pSpecialD.textContent = `Special Defence: ${data.stats[4].base_stat}`;

pHeight.textContent = `Height: ${data.height}`;

pWeight.textContent = `Weight: ${data.weight}`;


    pTypes.innerHTML = 'Type(s): ' + data.types.map(
      obj => `<span>${obj.type.name.toUpperCase()}</span>`
      ).join(' | ')
    ;
    
     
  }

  catch (err) {
   alert("Pokémon not found");
  }
};




searchButton.addEventListener('click', (e) =>
{e.preventDefault;
fetchData()}
)

searchInput.addEventListener('keydown', e => {
if (e.key === 'Enter') {
searchButton.click();
}
})
