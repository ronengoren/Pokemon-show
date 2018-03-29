


class Pokemon {
  constructor(id, name, hp, attack, defense, abilities, types) {
  this.name = name;
  this.id = id;
  this.hp = hp;
  this.attack = attack;
  this.defense = defense;
  this.abilities = abilities;
  this.types = types;


}
}


class trainerName {
  constructor(name, pokemon){
    this.name = name;
    this.pokemon = [];
  }

  all() {
        return this.pokemon
    }
    get(pokemon) {
        let collection = this.pokemon.filter(function (character) {
            return character.name === pokemon
        })
        return collection.length === 1 ? collection[0] : collection
    } //need to find out exactly how this works

}

let pokemonData = {
    name: "",
    id: 0,
    hp: 0,
    defense: 0,
    attack: 0,
    abilities: [],
    types:[]
}


//Getting all informatiom from API when each function represrnt a different idnumber of the pokemon

let getPokemonData = function(idNumer){
  return $.ajax({
    method: 'GET',
    dataType: 'json',
    url: 'https://pokeapi.co/api/v2/pokemon' + idNumer,
    success: function(data){
      console.log(data)
      pokemonData.name = data.name;
      pokemonData.id = data.id;
      pokemonData.defense = data.stats[3].base_stat;
      pokemonData.attack = data.stats[4].base_stat;
      pokemonData.hp = data.stats[5].base_stat;
      pokemonData.abilities = data.abilities;
      pokemonData.types = data.types;



},

error: function() {
          alert('Error occurs!');
       }
})
}

      let pokemon = new Pokemon(pokemonData);


// nidoqueen function works when click
$("#nidoqueenimage").click(function(){


    getPokemonData("/31/").then(function(pokemonData){
    $("#nidoqueenTitle").text(pokemonData.name.toUpperCase());
    $("#nidoqueenReveal").text(pokemonData.name.toUpperCase());
    $("#nidoqueenDefenceInfo").text("Defence: " + pokemonData.stats[3].base_stat)
    $("#nidoqueenAttackInfo").text("Attack: " + pokemonData.stats[4].base_stat)
    $("#nidoqueenHpInfo").text("Hp: " + pokemonData.stats[5].base_stat)
    $("#nidoqueenabilitiesInfo").text("Abilities: " +pokemonData.abilities[0].ability.name + ", " + pokemonData.abilities[1].ability.name + ", " + pokemonData.abilities[2].ability.name)
    $("#nidoqueentypesInfo").text("Types: " + pokemonData.types[0].type.name + ", " + pokemonData.types[1].type.name)
    console.log(pokemonData.defense)

})
})



// pidgeot function works when click


    $("#pidgeotimage").click(function(){
        getPokemonData("/18/").then(function(pokemonData){
        $("#pidgeotTitle").text(pokemonData.name.toUpperCase());
        $("#pidgeotReveal").text(pokemonData.name.toUpperCase());
        $("#pidgeotDefenceInfo").text("Defence: " + pokemonData.stats[3].base_stat)
        $("#pidgeotAttackInfo").text("Attack: " + pokemonData.stats[4].base_stat)
        $("#pidgeotHpInfo").text("Hp: " + pokemonData.stats[5].base_stat)
        $("#pidgeotabilitiesInfo").text("Abilities: " +pokemonData.abilities[0].ability.name + ", " + pokemonData.abilities[1].ability.name + ", " + pokemonData.abilities[2].ability.name)
        $("#pidgeottypesInfo").text("Types: " + pokemonData.types[0].type.name + ", " + pokemonData.types[1].type.name)

    })
})
// arbok function works when click


      $("#arbokimage").click(function(){
          getPokemonData("/24/").then(function(pokemonData){
          $("#arbokTitle").text(pokemonData.name.toUpperCase());
          $("#arbokReveal").text(pokemonData.name.toUpperCase());
          $("#arbokDefenceInfo").text("Defence: " + pokemonData.stats[3].base_stat)
          $("#arbokAttackInfo").text("Attack: " + pokemonData.stats[4].base_stat)
          $("#arbokHpInfo").text("Hp: " + pokemonData.stats[5].base_stat)
          $("#arbokabilitiesInfo").text("Abilities: " +pokemonData.abilities[0].ability.name + ", " + pokemonData.abilities[1].ability.name + ", " + pokemonData.abilities[2].ability.name)
          $("#arboktypesInfo").text("Types: " + pokemonData.types[0].type.name)

        });
})

$("#slakothimage").click(function(){

    getPokemonData("/287/").then(function(pokemonData){
    $("#slakothTitle").text(pokemonData.name.toUpperCase());
    $("#slakothReveal").text(pokemonData.name.toUpperCase());
    $("#slakothDefenceInfo").text("Defence: " + pokemonData.stats[3].base_stat)
    $("#slakothAttackInfo").text("Attack: " + pokemonData.stats[4].base_stat)
    $("#slakothHpInfo").text("Hp: " + pokemonData.stats[5].base_stat)
    $("#slakothabilitiesInfo").text("Abilities: " +pokemonData.abilities[0].ability.name + ", " + pokemonData.abilities[1].ability.name + ", " + pokemonData.abilities[2].ability.name)
    $("#slakothtypesInfo").text("Types: " + pokemonData.types[0].type.name)

  });
})
$("#clefairyimage").click(function(){

    getPokemonData("/35/").then(function(pokemonData){
    $("#clefairyTitle").text(pokemonData.name.toUpperCase());
    $("#clefairyReveal").text(pokemonData.name.toUpperCase());
    $("#clefairyDefenceInfo").text("Defence: " + pokemonData.stats[3].base_stat)
    $("#clefairyAttackInfo").text("Attack: " + pokemonData.stats[4].base_stat)
    $("#clefairyHpInfo").text("Hp: " + pokemonData.stats[5].base_stat)
    $("#clefairyabilitiesInfo").text("Abilities: " +pokemonData.abilities[0].ability.name + ", " + pokemonData.abilities[1].ability.name + ", " + pokemonData.abilities[2].ability.name)
    $("#clefairytypesInfo").text("Types: " + pokemonData.types[0].type.name)

  });
})
$("#oddishimage").click(function(){

    getPokemonData("/43/").then(function(pokemonData){
    $("#oddishTitle").text(pokemonData.name.toUpperCase());
    $("#oddishReveal").text(pokemonData.name.toUpperCase());
    $("#oddishDefenceInfo").text("Defence: " + pokemonData.stats[3].base_stat)
    $("#oddishAttackInfo").text("Attack: " + pokemonData.stats[4].base_stat)
    $("#oddishHpInfo").text("Hp: " + pokemonData.stats[5].base_stat)
    $("#oddishabilitiesInfo").text("Abilities: " +pokemonData.abilities[0].ability.name + ", " + pokemonData.abilities[1].ability.name + ", " + pokemonData.abilities[2].ability.name)
    $("#oddishtypesInfo").text("Types: " + pokemonData.types[0].type.name)

  });
})
