<template>
    <div class="container-fuild background-image">
        <!-- #region 背景音樂 -->
        <div
            style="
                position: relative;
                width: 267px;
                height: 25px;
                overflow: hidden;
            "
        >
            <div style="position: absolute; top: -276px; left: -5px">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ejvrtZ29H-Q?&rel=0&autoplay=1"
                    frameborder="0"
                    allow="autoplay"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
        <!-- #endregion 背景音樂 -->

        <div class="row ranking-container">
            <div class="col-8 ranking">
                <div class="player-container pt-5">
                    <div class="player d-inline-block col-2">
                        <!-- #region 左邊任務卡區塊  -->
                        <MissionCard
                            v-on:GetMissionDolls="SetMissionDolls"
                            v-bind:MissionDolls="MissionDolls"
                            v-bind:signalRConnection="signalRConnectionInstance"
                        />
                        <div class="player-info col-10">
                            <!-- <img src="assets/images/pngwave003.png" class="player-img" alt=""> -->
                            <!-- <span class="player-name">
                                string
                            </span> -->
                        </div>
                        <!-- #endregion 左邊任務卡區塊  -->
                    </div>

                    <div class="col-10">
                        <!-- #region 六隻mame-tiki的區塊 -->
                        <MameLine
                            v-bind:dolls="dollsTowerData"
                            v-bind:cardName="cardName"
                            v-bind:signalRConnection="signalRConnectionInstance"
                        />
                        <!-- <div class="mame-line ">
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                        </div> -->
                        <!-- #endregion 六隻mame-tiki的區塊 -->
                    </div>

                    <!-- #region 右邊任務卡區塊 -->
                    <div class="player text-center d-inline-block">
                        <div class="mission-card">
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                        </div>
                        <div class="player-info col-12">
                            <!-- <img src="assets/images/pngwave003.png" class="player-img" alt=""> -->
                            <!-- <span class="player-name" v-for="(item,index) in list" :key="index">
                                player
                                {{item}}
                            </span> -->
                            <span class="player-name"> string </span>
                        </div>
                    </div>
                    <!-- #endregion 右邊任務卡區塊 -->
                </div>
            </div>
        </div>
        <!-- #region 排名區塊 -->
        <GameRanking />
        <!-- #endregion 排名區塊 -->
    </div>
</template>

<script>
// import NAME from "../components/Ranking/FinalResult.vue";
import MameLine from "../components/Game/MameLine.vue";
// import NAME from "../components/Ranking/MissionCard.vue";
import GameRanking from "../components/Ranking/GameRanking.vue";
import MissionCard from "../components/Game/MissionCard.vue";

export default {
    name: "Ranking",
    data() {
        return {
            dollsTowerData: [
                {
                    id: 8,
                    name: "Salt",
                    image: "https://sandy.s-ul.eu/dWXzZvJc",
                },
                {
                    id: 5,
                    name: "Hamster",
                    image: "https://sandy.s-ul.eu/7GlJLiJL",
                },
                {
                    id: 1,
                    name: "White",
                    image: "https://sandy.s-ul.eu/WWTVi8nZ",
                },
                {
                    id: 2,
                    name: "Sakura",
                    image: "https://sandy.s-ul.eu/NHghYux2",
                },
                {
                    id: 4,
                    name: "Panda",
                    image: "https://sandy.s-ul.eu/FqRRkn3Y",
                },
                {
                    id: 6,
                    name: "Stripe",
                    image: "https://sandy.s-ul.eu/CeENB9CO",
                },
            ],
            cardsData: [],
            cardName: [],
            signalRConnectionInstance: {},
            MissionDolls: [
                { id: 3, name: "Sky", image: "https://sandy.s-ul.eu/ODPpkXxx" },
                {
                    id: 4,
                    name: "Panda",
                    image: "https://sandy.s-ul.eu/FqRRkn3Y",
                },
                {
                    id: 5,
                    name: "Hamster",
                    image: "https://sandy.s-ul.eu/7GlJLiJL",
                },
            ],
        };
    },
    components: {
        MameLine,
        GameRanking,
        MissionCard,
        // PlayerInfo,
    },
    methods: {
        SetMissionDolls: function (MissionDolls) {
            this.MissionDolls = MissionDolls;

            // console.log(`現在使用 ${this.cardName} 卡片`);
        },
    },
};

document.ondragstart = function () {
    return false;
};
</script>


<style lang="scss" >
html {
    height: 100vh;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.background-image {
    background-image: url("../assets/images/Ranking/ranking.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    // background-color: rgb(247, 214, 214);
}

.ranking-container {
    align-items: center;
    justify-content: center;
    height: 80%;
    background-color: rgba(250, 236, 236, 0.7);
    margin-top: 2rem;

    .title {
        font-family: "Comic Neue", cursive;
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
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .player-info {
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
                        font-family: "Comic Neue", cursive;
                        font-size: 3vw;
                    }
                }
            }
        }

        .back-btn {
            font-family: "Comic Neue", cursive;
            font-size: 2vw;
            margin-bottom: 1rem;
            margin-top: 5vw;
        }
    }
}
</style>

