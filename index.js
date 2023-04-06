let Barrabuscar = document.getElementById('Barrabuscar')
let SpellsList = document.getElementById('SpellsList')
let hpSpells = [];

Barrabuscar.addEventListener('keyup',(e) => {
    var buscarString = e.target.value.toLowerCase();
    var filteredSpells = hpSpells.filter((spell) => {
        return (
            spell.name.toLowerCase().includes(buscarString) ||
            spell.description.toLowerCase().includes(buscarString)
        );
    });
    displaySpells(filteredSpells);
});
  
  var loadSpells = async () => {
    try {
        const res = await fetch('https://hp-api.onrender.com/api/spells');
        hpSpells = await res.json();
        displaySpells(hpSpells);
    } catch (err) {
        console.error(err);
    }
};
  
const displaySpells = (spell) => {
  const htmlString = spell
      .map((spell) => {
          return `
          <li class="spell">
              <h2>${spell.name}</h2>
              <p>Description: ${spell.description}</p>
          </li>
      `;
      })
      .join('');
  SpellsList.innerHTML = htmlString;
};

loadSpells(); 
