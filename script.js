function initCombobox(placeholder, id) {
    // TODO: add event listeners for searching functionality
    
    const comboBox = document.createElement("div");
    comboBox.classList.add("combobox");

    const newId = "combo-input-" + id;
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholder;
    input.autocomplete = "off";
    input.id = newId;

    const ul = document.createElement("ul");
    ul.id = "combo-list";
    ul.classList.add("options", "hidden");

    comboBox.appendChild(input);
    comboBox.appendChild(ul);

    return comboBox;
    // we'll deal with the full ul li later
}

function initPokemonCard(num) {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");

    const left = document.createElement("div");
    left.classList.add("left");

    // left is two comboboxes plus image
    // TODO: deal with images

    // p(num)
    // p(num)a
    const nameBox = initCombobox("Name", "p" + num);
    const abilityBox = initCombobox("Ability", "p" + num + "a");
    left.appendChild(nameBox);
    left.appendChild(abilityBox);

    pokemonCard.appendChild(left);

    const right = document.createElement("div");
    right.classList.add("right");

    // right is 5 comboboxes
    // p(num)m(1-4)
    // p(num)i

    for (let i = 1; i < 5; i++) {
        const moveBox = initCombobox("Move " + i, "p" + num + i);
        right.appendChild(moveBox);
    }

    const itemBox = initCombobox("Item", "p" + num + "i");
    
    right.appendChild(itemBox);

    pokemonCard.appendChild(left);
    pokemonCard.appendChild(right);

    return pokemonCard;
}

function initTeams() {
    const leftTeam = document.getElementById("left-team");
    const rightTeam = document.getElementById("right-team");
    
    for (let i = 1; i < 7; i++) {
        const user = initPokemonCard(i);
        const opp = initPokemonCard(i+6);

        leftTeam.appendChild(user);
        rightTeam.appendChild(opp);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initTeams();
    console.log("initialized");
});