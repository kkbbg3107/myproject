// var app = new Vue({
//     el: '#app',
//     data:{
//         //寶可夢資料
//         pokemonData:{
//             pokemonRequestUrl:"https://raw.githubusercontent.com/apprunner/pokemon.json/master/pokedex.json",
//             pokemonArray:[],            
//             cardArray:[],
//             currentPokemon:{

//             }
//         },
//     },
//     created:function(){
//         this.getPokemonData();
//     },
//     computed:{},
//     methods:{
//         getPokemonData(){
//             axios.get(this.pokemonData.pokemonRequestUrl)
//             .then(res) => {
//                 console.log(res);
//             }
//         }
//     }
// })
import PokemonCard from './card.js';

var app=new Vue({
    el:"#app",
    data:{
        pokemonData:{
            pokemonRequestUrl:"https://raw.githubusercontent.com/apprunner/pokemon.json/master/pokedex.json",
            pokemonArray:[],
            cardArray:[],
            currentPokemon:{

            }
        },
    },
    created:function(){
        this.getPokemonData();
    },
    methods:{
        getPokemonData(){
            let vm = this;
            // $.ajax({
            //     url:"https://raw.githubusercontent.com/apprunner/pokemon.json/master/pokedex.json",

            // })

            axios.get(this.pokemonData.pokemonRequestUrl) //出來的是vue物件 this找最近的物件 Vue
                .then(res=>{
                    console.log(res);
                    if(Array.isArray(res.data)&& res.status == 200){
                        this.pokemonData.pokemonArray = res.data.map((item, index)=>({
                            Id: id,
                            Name: Name,
                            Hp: hp,
                            Attack: attack,
                            Defense: defense,
                            SpAttack: sp_attack,
                            SpDefense: sp_defense,
                            Speed: speed,
                            Type: type,
                            Img: img,
                        }))
                        console.log(this.pokemonData.pokemonArray);
                    }
                })
                .catch((err) => console.warn(err))
        }
        showModelData
    },
    components:{
        'pokemon': PokemonCard
    }
});