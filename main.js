function meowth(){
axios.get("https://fizal.me/pokeapi/api/v2/name/meowth.json")
  .then(function(response) {
    let meowth_img = "meowthstrum.gif";
    let meowth_name = "Meowth";
    let meowth_hp = response.data.stats[5].base_stat;
    let meowth_attack = response.data.stats[4].base_stat;
    let meowth_defense = response.data.stats[3].base_stat;

    let meowth_ability = response.data.abilities[0].ability.name;
    for (let i = 0; i < response.data.abilities[i].ability.length; i++) {
      let result = response.data.abilities[i].ability.name;
    }


    meowth = new Pokemon(meowth_img, meowth_name, meowth_hp, meowth_attack, meowth_defense, meowth_ability,);
    meowth.display();

  })
}


function wobbuffet(){
axios.get("https://fizal.me/pokeapi/api/v2/name/wobbuffet.json")
  .then(function(response) {
    let wobb_image = "wobbuffetfood.gif";
    let wobb_name = "Wobbuffet";
    let wobb_hp = response.data.stats[5].base_stat;
    let wobb_attack = response.data.stats[4].base_stat;
    let wobb_defense = response.data.stats[3].base_stat;

    let wobb_ability = response.data.abilities[0].ability.name;
    for (let i = 0; i < response.data.abilities[i].ability.length; i++) {
      let result = response.data.abilities[i].ability.name;

    }


    wobbuffet = new Pokemon(wobb_image, wobb_name, wobb_hp, wobb_attack, wobb_defense, wobb_ability);
    wobbuffet.display();

  })
}

function arbok(){
axios.get("https://fizal.me/pokeapi/api/v2/name/arbok.json")
  .then(function(response) {
    let arbok_image = "arbokhiss.gif";
    let arbok_name = "Arbok";
    let arbok_hp = response.data.stats[5].base_stat;
    let arbok_attack = response.data.stats[4].base_stat;
    let arbok_defense = response.data.stats[3].base_stat;


    let arbok_ability = response.data.abilities[0].ability.name;
    for (let i = 0; i < response.data.abilities[i].ability.length; i++) {
      let result = response.data.abilities[i].ability.name;
    }
    arbok = new Pokemon(arbok_image, arbok_name, arbok_hp, arbok_attack, arbok_defense, arbok_ability);
    arbok.display();

  })
}
