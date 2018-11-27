console.log("battle");

function startanimation() {
  let key =  document.getElementById('slider');
  console.log("thisworks",  window.scrollY);
    if ( 65 >= window.scrollY){
      console.log('dfdfdfd')
      key.className = "row anim";
    }
}
window.addEventListener("scroll", startanimation);

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
    this.element = document.getElementById('info');
    this.element.className = 'product';
  }
display(){

  let pokePic = document.getElementById("pPic");
  pokePic.src = this.pokePic;
//  this.element.appendChild(pokePic);

 this.container.appendChild(this.element);

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

function rayq(){
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

      let pic= "ray1.gif";

      let rayquaza = new Pokemon(name,hp,attack,defense,ability,pic);
      rayquaza.display();
});
}


 //****************************Kevin's Pokemon****************************************************

function meow(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/meowth.json")
    .then(function(response){

      let name="Meowth";

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

      let pic= "meowthbounce.gif";

      let meowth = new Pokemon(name,hp,attack,defense,ability,pic);
      meowth.display();


});
}

function arb(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/meowth.json")
    .then(function(response){

      let name="Arbok";

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

      let pic= "arbokmoving.gif";

      let arbok = new Pokemon(name,hp,attack,defense,ability,pic);
      arbok.display();


});
}

function wobb(){
  axios.get
    ("https://fizal.me/pokeapi/api/v2/name/wobbuffet.json")
      .then(function(response){

        let name="Wobbuffet";

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

        let pic= "wobbuffetwave.gif";

        let wobbuffet = new Pokemon(name,hp,attack,defense,ability,pic);
        wobbuffet.display();


  });
}
//
// //**************************************Ana's Pokemon**************************
function charman(){
  axios.get
    ("https://fizal.me/pokeapi/api/v2/name/charmander.json")
      .then(function(response){

        let name="Charmander";

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

        let pic= "fmuv.gif";

        let charmander = new Pokemon(name,hp,attack,defense,ability,pic);
        charmander.display();


  });
}
//
function turtle(){
  axios.get
    ("https://fizal.me/pokeapi/api/v2/name/squirtle.json")
      .then(function(response){

        let name="Squirtle";

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

        let pic= "smuv.gif";

        let squirtle = new Pokemon(name,hp,attack,defense,ability,pic);
        squirtle.display();


  });
}
//

function jigg(){
  axios.get
    ("https://fizal.me/pokeapi/api/v2/name/jigglypuff.json")
      .then(function(response){

        let name="Jigglypuff";

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

        let pic= "jmuv.gif";

        let jigglypuff = new Pokemon(name,hp,attack,defense,ability,pic);
        jigglypuff.display();


  });
}


// ************************************ Shakiem's Pokemon **********************
function zoroark() {
  axios.get("https://fizal.me/pokeapi/api/v2/id/571.json")
  .then(function (response) {
  let somePokemon1 = new Pokemon(response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name, "https://play.pokemonshowdown.com/sprites/xyani/zoroark.gif");
  somePokemon1.display()
})
}
function reshiram() {
  axios.get("https://fizal.me/pokeapi/api/v2/id/643.json")
  .then(function (response) {
  let somePokemon1 = new Pokemon(response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name, "https://play.pokemonshowdown.com/sprites/xyani/reshiram.gif");
  somePokemon1.display()
})
}
function kartana() {
  axios.get("https://fizal.me/pokeapi/api/v2/id/798.json")
  .then(function (response) {
  let somePokemon1 = new Pokemon(response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name, "https://play.pokemonshowdown.com/sprites/xyani/kartana.gif");
  somePokemon1.display()
})
}

//***************************** Dennys' Pokemon***************************
// function lopunny(){
// axios.get('https://fizal.me/pokeapi/api/v2/name/lopunny.json')
//   .then(function (response) {
//     let lopunny = new Pokemon(response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name,  "http://i.imgur.com/Y5MhMmG.gif");
//         lopunny.display();
//   });
// }
//
//
// // function gardevior(){
// //   axios.get('https://fizal.me/pokeapi/api/v2/name/gardevoir.json')
// //   .then(function (response) {
// //         let gardevior = new Pokemon(response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name,  "http://rs38.pbsrc.com/albums/e102/GlowCat/gardevoir_zps7b3a4dab.gif~c200");
// //         gardevior.display();
// //   });
// // }
// // function primarina(){
// // axios.get('https://fizal.me/pokeapi/api/v2/name/primarina.json')
// //   .then(function (response) {
// //     let primarina = new Pokemon(response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name, "https://i.pinimg.com/originals/e4/d2/4b/e4d24b35acd40b51b2d292762207a737.gif");
// //         primarina.display();
// //   });
// // }
// //
// /

//******************* Kamran Event Listener ********************************************
  //  let hoOh_Clicker = document.getElementById("poke1");
  //  hoOh_Clicker.addEventListener('click',ho_Oh);
  //
  // let lugia_Clicker = document.getElementById("poke2");
  // lugia_Clicker.addEventListener('click',lu);
  //
  // let ray_Clicker = document.getElementById("poke3");
  // ray_Clicker.addEventListener('click',rayq);


 //****************************Ana's listner************************************
//   let charm_Clicker = document.getElementById("poke1");
//   charm_Clicker.addEventListener('click',charman);
//
//   let squirtle_Clicker = document.getElementById("poke2");
//   squirtle_Clicker.addEventListener('click',turtle);
//
//   let jiggly_Clicker = document.getElementById("poke3");
//   jiggly_Clicker.addEventListener('click',jigg);


 //************************* Kevin's Event Listener ****************************
//   let meowth_event = document.getElementById("poke1");
//   meowth_event.addEventListener('click', meow);

//  let wobbuffet_event = document.getElementById("poke2");
//  wobbuffet_event.addEventListener('click', wobb);

//  let arbok_event = document.getElementById("poke3");
//  arbok_event.addEventListener('click', arb);



// //********************** Shakiem's event listener *****************************
//  let zoro = document.getElementById("poke1");
//  zoro.addEventListener('click',zoroark);
//
// let reshi = document.getElementById("poke2");
// reshi.addEventListener('click',reshiram);
//
// let kart = document.getElementById("poke3");
// kart.addEventListener('click',kartana);

// ********************************Denny************************************
// let lopunny_event = document.getElementById("poke1");
// lopunny_event.addEventListener('click', lopunny);
//
// let gardevior_event = document.getElementById("poke2");
// gardevior_event.addEventListener('click', gardevior);
//
// let primarina_event = document.getElementById("poke3");
// primarina_event.addEventListener('click', primarina);
