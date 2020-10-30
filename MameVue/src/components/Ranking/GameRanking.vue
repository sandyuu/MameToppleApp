<template>
<!-- 名次 -->
    <div class="mt-5">
        <div class="row ranking-container">
            <div class="col-12 col-md-12">
                <div class="title text-center">
                    RANKING
                </div>
            </div>


            <div class="content text-center ranking">
                <div class="player-container ">
                    <div class="row">
                        <div class="col-6 col-md-6 ">
                            <div class="player ">
                                <!-- #region 第一名獎牌圖片 -->

                                <div class="medal-img col-4">
                                    <img src="../../assets/images/Ranking/1st.png" alt="">
                                </div>
                                <!-- #endregion 第一名獎牌圖片 -->

                                <!-- #region 左邊玩家頭貼及名字 -->
                                <div class="player-info col-8">
                                    <img src="../../assets/images/Ranking/pngwave003.png" class="player-img" alt="">
                                    <span class="player-name">
                                        string
                                    </span>
                                </div>
                                <!-- <PlayerInfo/> -->
                                <!-- #endregion 左邊玩家頭貼及名字 -->

                            </div>
                        </div>
                        <div class="col-6 col-md-6">
                            <div class="player">
                                <!-- #region 第二名獎牌圖片 -->
                                <div class="medal-img col-4">
                                    <img src="../../assets/images/Ranking/2nd.png" alt="">
                                </div>
                                <!-- #endregion 第二名獎牌圖片 -->

                                <!-- #region 右邊玩家頭貼及名字 -->
                                <div class="player-info col-8">
                                    <img src="../../assets/images/Ranking/pngwave003.png" class="player-img" alt="">
                                    <span class="player-name">
                                        player
                                    </span>
                                </div>
                                <!-- <PlayerInfo/> -->
                                <!-- #endregion 右邊玩家頭貼及名字 -->

                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-12 col-md-12 text-center">
                        <!-- #region 返回遊戲按鈕 -->
                        <button type="button" class="btn btn-success back-btn">
                            Back to the game
                        </button>
                        <!-- #region 返回遊戲按鈕 -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import PlayerInfo from "../components/Ranking/PlayerInfo.vue";


</script>

<style lang="scss">

.ranking-container {
    align-items: center;
    justify-content: center;
    height: 80%;
    background-color: rgba(250, 236, 236, 0.7);
    margin-top: 2rem;
    
    .title {
        font-family: 'Comic Neue', cursive;
        font-size: 5vw;
        color: rgb(212, 176, 122);
        // color: rgb(212, 176, 122);
    }

    .ranking {
        .player-container {
            display: flex;
            
            text-align: center;
            justify-content: center;
            
            .player {
                // width: 100%;
                // height: 100%;
                // padding: 30px;
                display: flex;
                position: relative;

                .medal-img {
                    max-height: 100%;
                    max-width: 100%;
                    // width: auto;
                    // height: auto;
                    // position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                
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
            }
        }

        .back-btn {
            font-family: 'Comic Neue', cursive;
            font-size: 2vw;
            margin-bottom: 1rem;
            margin-top: 5vw;

        }
    }
}

</style>

