
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
