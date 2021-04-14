export default{
    props:{
        pokemon:{
            requires: true,
            type:Object,
            default:function(){
                return{
                    id: 816,
                    name:"啵啵",
                    hp: 100,
                    attack: 45,
                    defense: 10,
                    spAttack: 5,
                    spDefense: 4,
                    speed: 100,
                    type: "草",
                    Img: "",
                }
            }
        }
    },
    data:() => ({}),
    methods:{
        showPokemon(){
            this.$emit("button-click");
        },
    },
    template:`
    <div class="card" style="width: 16rem;">
        <div class="card-body">
            <h5 class="card-title">{{pokemon.name}}</h5>
            <img src="pokemon.img" alt="">
            <span id="type">{{pokemon.type}}</span>
            <a href="#" class="btn_detail">詳細內容</a>
        </div>
    </div>
    `

