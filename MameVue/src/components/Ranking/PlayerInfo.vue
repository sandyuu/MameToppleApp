<template>
    <div class="player-info col-8">
        <img src="../../assets/images/Ranking/pngwave003.png" class="player-img" alt="">
        <span class="player-name">
            player
        </span>
    </div>
</template>
<script>
// export default {
//     name:"PlayerInfo",
//     data(){
//         return{
//             account:[{"image":"https://sandy.s-ul.eu/dWXzZvJc","name":"hello"},{"image":"https://sandy.s-ul.eu/dWXzZvJc","name":"bye"}]
//         }
//     }
    
// }
</script>
<style lang="scss" scoped>

.player-info{
    // display: flex;
    width: 120px;
    height: 160px;
    
    .player-img {
        background-color: rgb(223, 215, 253);
        border-radius: 50%;
        width: 80%;
        height: auto;
    }

    .player-name {
        
        font-family: 'Comic Neue', cursive;
        font-size: 3vw;
    }
}

</style>