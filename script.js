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



let getPokemonData = function(idNumer){
  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: 'https://pokeapi.co/api/v2/pokemon' + idNumer,
    success: function(data){
      // console.log(data)
      pokemonData.name = data.name;
      pokemonData.id = data.id;
      pokemonData.defensTitle = data.stats[3].stat.name;
      pokemonData.defense = data.stats[3].base_stat;
      pokemonData.attackTitle = data.stats[4].stat.name;
      pokemonData.attack = data.stats[4].base_stat;
      pokemonData.hpTitle = data.stats[5].stat.name;
      pokemonData.hp = data.stats[5].base_stat;
      var abilities = data.abilities;
    $.each(abilities, function(key, value) {
        var abilitiesList = value.ability.name;
        // if (url == 'https://pokeapi.co/api/v2/pokemon/31/') {
        //
        //   return
        //   $("#nidoqueenAbilitiesInfoAbilitiesInfo").append("<li>"  + abilitiesList + "</li>");
        //   $("#nidoqueenAbilitiesInfoAbilitiesInfo").show;
        // }
      });

        // console.log(abilitiesList)

  // let types = data.types;

// $.each(types, function(key, value) {
//     let typesList = value.type.name;
//     // console.log(typesList);
//     // console.log(abilitiesList)
//
//   })


},
error: function() {
          alert('Error occurs!');
       }
})
}

getPokemonData()

      let pokemon = new Pokemon(pokemonData);

//     let pokeContainer = (pokemon) => {
//     //div for all individual pokemon data
//     //values pulled from Pokemon object and displayed in new HTML elements
//
//     let pokemonNumber = $("<h3/>").text(pokemon.number)
//     let attack = $("<p/>").text("Attack: " + (pokemon.attack))
//     let defense = $("<p/>").text("Defense: " + (pokemon.defense))
//     let hp = $("<p/>").text("HP: " + (pokemon.hp))
//     //create abilities list
//     let abilitiesList = $("<ul/>").addClass("ability-list")
//     pokemon.abilities.forEach((ability) => {
//         if (ability.isHidden) {
//             $("<li/>").text(ability.name).addClass("hidden-ability").appendTo(abilitiesList)
//         }
//         $("<li/>").text(ability.name).appendTo(abilitiesList)
//     })
//
//
//         // pokemonData.push(Pokemon)
//         // console.log(pokemonData)
//         //  console.log(pokemon.id);
//         //  console.log(pokemon.id.name);
//         //  console.log(pokemon.id.defensTitle);
//         //  console.log(pokemon.id.defense);
//         //  console.log(pokemon.id.attackTitle);
//         //  console.log(pokemon.id.attack);
//         //  console.log(pokemon.id.hpTitle);
//         //  console.log(pokemon.id.hp);
//
//
//
// // })
// }});

// }

$("#nidoqueenimage").click(function(){
  var url31 = "/31/"
  var idNumer = url31
    getPokemonData(idNumer)
    $("#nidoqueenTitle").text(pokemonData.name.toUpperCase());
    $("#nidoqueenReveal").text(pokemonData.name.toUpperCase());
    $("#nidoqueenDefenceInfo").text("Defence: " + pokemonData.defense)
    $("#nidoqueenAttackInfo").text("Attack: " + pokemonData.attack)
    $("#nidoqueenHpInfo").text("Hp: " + pokemonData.hp)

  //   for ( let i = 0;  i < pokemonData.abilities.length; i++) {
  //
  // }
    // for ( let i = 0;  i < pokemonData.abilities.length; i++) {
    // 			 abilities.push(pokemonData.abilities[i].ability.name);
    // 				console.log( okemonData.abilities[i].ability.name);
    		// }
      // $("#nidoqueenAbilitiesInfo").append("<li>"  + abilitiesList + "</li>");
      // $("#nidoqueenAbilitiesInfo").show;



    // let abilities = pokemonData.abilities;
// $.each(abilities, function(key, value) {
//       // let abilitiesList = value.ability.name;
//     $("#nidoqueenAbilitiesInfo").text("Abilities: " + value.ability.name)


      // console.log(pokemonData.abilities.ability)

// })
    // console.log(abilities)



    // $(".nidoqueenRevealInfo").append("<p>" + pokemonData.attackTitle + ": " +pokemonData.attack +"</p>");
    // $(".nidoqueenRevealInfo").append("<p>" + pokemonData.hpTitle + ": " +pokemonData.hp +"</p>");
//     let abilities = pokemonData.abilities;
// $.each(abilities, function(key, value) {
//       let abilitiesList = value.ability.name;
// $(".nidoqueenRevealInfo").append("<li>"  + value.ability.name + "</li>");
// $(".nidoqueenRevealInfo").show;
//
//
// });
})

    // $("#nidoqueenRevealInfo").text(pokemonData.attackTitle + ": " +pokemonData.attack);
    // $("#nidoqueenRevealInfo").text(pokemonData.defensTitle + ": " +pokemonData.defense);
    // $("#nidoqueenRevealInfo").text(pokemonData.defensTitle + ": " +pokemonData.defense);





// console.log(pokemonData.name)


$("#pidgeotimage").click(function(e){
  e.preventDefault();
  var url18 = "/18/"
  var idNumer = url18
    getPokemonData(idNumer)
    $("#pidgeotTitle").text(pokemonData.name.toUpperCase());
    $("#pidgeotReveal").text(pokemonData.name.toUpperCase());
    $("#pidgeotDefenceInfo").text("Defence: " + pokemonData.defense)
    $("#pidgeotAttackInfo").text("Attack: " + pokemonData.attack)
    $("#pidgeotHpInfo").text("Hp: " + pokemonData.hp)

    // $(".pidgeotRevealInfo").append("<p>" + pokemonData.defensTitle + ": " +pokemonData.defense +"</p>");
    // $(".pidgeotRevealInfo").append("<p>" + pokemonData.attackTitle + ": " +pokemonData.attack +"</p>");
    // $(".pidgeotRevealInfo").append("<p>" + pokemonData.hpTitle + ": " +pokemonData.hp +"</p>");
//     let abilities = pokemonData.abilities;
// $.each(abilities, function(key, value) {
//       let abilitiesList = value.ability.name;
// $(".pidgeotRevealInfo").append("<li>"  + value.ability.name + "</li>");
// $(".pidgeotRevealInfo").show;
//
// });


  });
// console.log(pokemonData.name)

$("#arbokimage").click(function(){
  var url24 = "/24/"
  var idNumer = url24
    getPokemonData(idNumer)
    $("#arbokTitle").text(pokemonData.name.toUpperCase());
    $("#arbokReveal").text(pokemonData.name.toUpperCase());
    $("#arbokDefenceInfo").text("Defence: " + pokemonData.defense)
    $("#arbokAttackInfo").text("Attack: " + pokemonData.attack)
    $("#arbokHpInfo").text("Hp: " + pokemonData.hp)
//     let abilities = pokemonData.abilities;
// $.each(abilities, function(key, value) {
//       let abilitiesList = value.ability.name;
// $(".arbokRevealInfo").append("<li>"  + value.ability.name + "</li>");
// $(".arbokRevealInfo").show;
//
// });

  });
// console.log(pokemonData.name)

      // console.log(idNumer);
      // console.log(name);
      // console.log(defensTitle);
      // console.log(defense);
      // console.log(attackTitle);
      // console.log(attack);
      // console.log(hpTitle);
      // console.log(hp);
//
//
//
// // }});
// $.ajax({
//   method: 'GET',
//   dataType: 'json',
//   url: 'https://pokeapi.co/api/v2/pokemon/24/',
//   success: function(data){
//     console.log(data);
//     let name = data.name;
//     $("#name2").text(data.name)
//     let defensTitle = data.stats[3].stat.name;
//     $("#defence2").text(data.stats[3].stat.name + " : " + data.stats[3].base_stat)
//     let defense = data.stats[3].base_stat;
//     let attackTitle = data.stats[4].stat.name;
//     $("#attack2").text(data.stats[4].stat.name + " : " + data.stats[4].base_stat)
//
//     let attack = data.stats[4].base_stat;
//     let hpTitle = data.stats[5].stat.name;
//     $("#hp2").text(data.stats[5].stat.name + " : " + data.stats[5].base_stat)
//
//     let hp = data.stats[5].base_stat;
//     let abilities = data.abilities;
// $.each(abilities, function(key, value) {
//       let abilitiesList = value.ability.name;
//       $("#abilitiesList2").append("<li>"  + abilitiesList + "</li>");
//       $("#abilitiesList2").show;
//        console.log(abilitiesList);
//
//     });
// //
//
//
//
//
// }});
//
// $.ajax({
//   method: 'GET',
//   dataType: 'json',
//   url: 'https://pokeapi.co/api/v2/pokemon/18/',
//   success: function(data){
//     console.log(data);
//     let name = data.name;
//     $("#name3").text(data.name)
//     let defensTitle = data.stats[3].stat.name;
//     $("#defence3").text(data.stats[3].stat.name + " : " + data.stats[3].base_stat)
//     let defense = data.stats[3].base_stat;
//     let attackTitle = data.stats[4].stat.name;
//     $("#attack3").text(data.stats[4].stat.name + " : " + data.stats[4].base_stat)
//
//     let attack = data.stats[4].base_stat;
//     let hpTitle = data.stats[5].stat.name;
//     $("#hp3").text(data.stats[5].stat.name + " : " + data.stats[5].base_stat)
//
//     let hp = data.stats[5].base_stat;
//     let abilities = data.abilities;
//
//
//
// $.each(abilities, function(key, value) {
//
//       let abilitiesList = value.ability.name;
//       $("#abilitiesList3").append("<li>"  + abilitiesList + "</li>");
//       $("#abilitiesList3").show;


    // });
    // $.each(data, function(index) {
    //   return index > 13;
    //   console.log(data.findIndex(index));
    //       //
    //       // let abilitiesTitle = key.index;
    //       // console.log(abilitiesTitle);
    //
    //
    //     });





// }});

//
//
// let name = $("#name");
// let defence = $("defence");
// // let picture = $("#profilePicture");
// // let repositories = $("#repositories")
// // let button = $("#button")
// // // let repolist = $("#repolist")
// // let repolist = $("#repolist")
//
//
//
//
//



// function abilitiesListfunc(){
// for (var index = 0; index < abilitiesList.length;  index++)
// {

// }
// }

// abilitiesListfunc()

// $("#abilities").text(value.ability.name)




      // $.each(data, function(name, value){
      //   $("#name").text(value.name);
      //
      // // $.each(data1, function(name, value){
      // //   console.log(value.name)
      //   // $("#defence").length(forms.stats[3].effort)
      //
      // })
      // console.log(forms.stats[].effort)
      //   $("#defence").text(value.name);



      // }});
      // // let avatar_url = data.avatar_url;
      //   // console.log(data[1].forms)
      //   // $("#profilePicture").html('<img src="' + data.avatar_url + '" />');
      //   // $("#repositories").text(data.public_repos);
      //   // $("#button").click(function(){
      //   //   window.location = data.html_url;
      //
      //
      //
      //
      //
      //   // $("#repolist").text
      // },
