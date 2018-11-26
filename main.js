class Pokemon{
  constructor(name,pokeHealth,pokeAttack,pokeDefense,pokeAbilities,pokePic){
    this.name=name;
    this.pokeHealth=pokeHealth;
    this.pokeAttack=pokeAttack;
    this.pokeDefense=pokeDefense;
    this.pokeAbilities=pokeAbilities;
    this.pokePic=pokePic;

    this.container = document.getElementById('pokeInfo');
    //make a div with classname product
    this.element = document.getElementById('dis');
    this.element.className = 'product';
  }

display(){
  //if statement to check if elements have been created
  let name = document.querySelector("ol");
  name.innerHTML = "Name: " + this.name;
  this.element.appendChild(name);

  this.container.appendChild(this.element);

  let pokeHealth = document.querySelector("ol");
  pokeHealth.innerHTML = "HP: " + this.pokeHealth;
  this.element.appendChild(pokeHealth);

  this.container.appendChild(this.element);


  let pokeAttack = document.querySelector("ol");
  pokeAttack.innerHTML = "Attack: " + this.pokeAttack;
  this.element.appendChild(pokeAttack);

  this.container.appendChild(this.element);

  let pokeDefense = document.querySelector("ol");
  pokeDefense.innerHTML = "Defense: " + this.pokeDefense;
  this.element.appendChild(pokeDefense);

  this.container.appendChild(this.element);

  let pokeAbilities = document.querySelector("ol");
  pokeAbilities.innerHTML = "Ability: " + this.pokeAbilities;
  this.element.appendChild(pokeAbilities);

  this.container.appendChild(this.element);

  let pokePic = document.getElementById("imgHolder");
  pokePic.src = this.pokePic;
  this.element.appendChild(pokePic);

  this.container.appendChild(this.element);

}
}


//**********************************************Kamran's Pokemon***************
function ho_Oh(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/ho-oh.json")
    .then(function(response){

      let name="Ho-oh";

      let hp = response.data.stats[5].base_stat;
      console.log("HP: ", hp);

      let ability = response.data.abilities[0].ability.name;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }

      let attack= response.data.stats[4].base_stat;
      console.log("Attack: ", attack);

      let defense= response.data.stats[3].base_stat;
      console.log("Defense: ", defense);

      let pic="Ho-oh.gif";

      let hooh = new Pokemon(name, hp, attack, defense, ability,pic);
      hooh.display();

});
}

function lu(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/lugia.json")
    .then(function(response){

      let name = "Lugia";

      let hp = response.data.stats[5].base_stat;
      console.log("HP: ", hp);

      let ability = response.data.abilities[0].ability.name;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }

      let attack= response.data.stats[4].base_stat;
      console.log("Attack: ", attack);

      let defense= response.data.stats[3].base_stat;
      console.log("Defense: ", defense);

      let pic="Lugia_Shiny.gif";


      let lugia = new Pokemon(name,hp,attack,defense,ability,pic);
      lugia.display();


});
}

function ray(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/rayquaza.json")
    .then(function(response){

      let name="Rayquaza";

      let hp = response.data.stats[5].base_stat;
      console.log("HP: ", hp);

      let ability = response.data.abilities[0].ability.name;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }

      let attack= response.data.stats[4].base_stat;
      console.log("Attack: ", attack);

      let defense= response.data.stats[3].base_stat;
      console.log("Defense: ", defense);

      let pic= "Rayquaza.gif";

      let rayquaza = new Pokemon(name,hp,attack,defense,ability,pic);
      rayquaza.display();


});
}

//*******************Event Listener********************************************
let hoOh_Clicker = document.getElementById("pokeBall1");
hoOh_Clicker.addEventListener('click',ho_Oh);

let lugia_Clicker = document.getElementById("pokeBall3");
lugia_Clicker.addEventListener('click',lu);

let ray_Clicker = document.getElementById("pokeBall6");
ray_Clicker.addEventListener('click',ray);


//*********************************************************************************

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

//
//  /////////******ANAS POKEMON***************/
// function charmander(){
//   let charmanderURL ="https://fizal.me/pokeapi/api/v2/name/charmander.json";
//   axios.get(charmanderURL)
//     .then(function(response){
//
//       let abi = response.data.abilities;
//       let all1 = [];
//       for(let i=0;i<abi.length;i++){
//         all1.push(abi[i].ability.name);
//       }
//
//       let concatenate = "";
//       for(let i=0;i<abi.length;i++){
//         concatenate +=all1[i] + " ";
//       }
//
//       let name = "charmander";
//       let hp = response.data.stats[5].base_stat;
//       let attack = response.data.stats[4].base_stat;
//       let defense = response.data.stats[3].base_stat;
//       let charr = new Pokemon(name, hp, attack, defense, concatenate, "stats1");
//       charr.display();
//
//    })
// }
//
//        let button = document.getElementById('fire');
//          button.addEventListener('click', function(){
//           charmander();
//
// })
//
//
// function squirts(){
//   let squirtleURL ="https://fizal.me/pokeapi/api/v2/name/squirtle.json";
//     axios.get(squirtleURL)
//     .then(function(response){
//
//       let abi2 = response.data.abilities;
//       let all2 = [];
//       for(let i=0;i<abi2.length;i++){
//         all2.push(abi2[i].ability.name);
//       }
//
//       let concatenate = "";
//       for(let i=0;i<abi2.length;i++){
//         concatenate +=all2[i] + " ";
//       }
//
//       let name = "Squirtle";
//       let hp = response.data.stats[5].base_stat;
//       let attack = response.data.stats[4].base_stat;
//       let defense = response.data.stats[3].base_stat;
//
//       let squir = new Pokemon(name,hp,attack,defense,concatenate, "stats2");
//       squir.display();
//     })
// }
//
//        let button2 = document.getElementById('water');
//          button2.addEventListener('click', function(){
//           squirts();
// })
//
//
// function jiggly(){
//   let jigglyURL ="https://fizal.me/pokeapi/api/v2/name/jigglypuff.json";
//   axios.get(jigglyURL)
//     .then(function(response){
//
//       let abi3 = response.data.abilities;
//       let all3 = [];
//       for(let i=0;i<abi3.length;i++){
//         all3.push(abi3[i].ability.name);
//       }
//
//       let concatenate = "";
//       for(let i=0;i<abi3.length;i++){
//         concatenate +=all3[i] + " ";
//       }
//
//       let name = "Jigglypuff";
//       let hp = response.data.stats[5].base_stat;
//       let attack = response.data.stats[4].base_stat;
//       let defense = response.data.stats[3].base_stat;
//       let jigglypf = new Pokemon(name, hp, attack, defense, concatenate, "stats3");
//       jigglypf.display();
//
//    })
// }
//
// let button3 = document.getElementById('sleep');
// sleep.addEventListener('click', function(){
//   jiggly();
// });

/////////******ANAS POKEMON***************/
