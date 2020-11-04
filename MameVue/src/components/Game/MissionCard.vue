<template>
    <div class="w-100 h-100">
        <div class="mission-card">
            <div class="card-style card-front is-active w-100 h-100">
                <div
                    v-for="(item, index) in MissionDolls"
                    v-bind:key="item.id"
                    class="mission-doll-block"
                >
                    <div class="row w-100 h-100">
                        <div
                            class="col-4 col-md-4 p-0 d-flex text-center align-items-center"
                        >
                            <div
                                class="mission-doll-icon w-100 h-100"
                                :style="{
                                    'background-image':
                                        'url(' + item.image + ')',
                                }"
                            ></div>
                        </div>
                        <div class="col-8 col-md-8 p-0">
                            <div class="mission-doll-score-content w-100 h-100">
                                <div class="mission-doll-name">
                                    {{ item.name }}
                                </div>
                                <div class="mission-doll-score d-flex w-100">
                                    <div
                                        v-if="index == 0"
                                        class="score-icon w-100"
                                        :style="{
                                            'background-image':
                                                'url(' +
                                                require('../../assets/images/mission-icons/mission-beans.png') +
                                                ')',
                                        }"
                                    ></div>
                                    <div
                                        v-if="index == 1"
                                        class="score-icon w-100"
                                        :style="{
                                            'background-image':
                                                'url(' +
                                                require('../../assets/images/mission-icons/mission-candy.png') +
                                                ')',
                                        }"
                                    ></div>
                                    <div
                                        v-if="index == 2"
                                        class="score-icon w-100"
                                        :style="{
                                            'background-image':
                                                'url(' +
                                                require('../../assets/images/mission-icons/mission-squid.png') +
                                                ')',
                                        }"
                                    ></div>
                                    <div
                                        v-if="index == 0"
                                        class="score-point w-100 h-100"
                                    >
                                        9pt
                                    </div>
                                    <div
                                        v-if="index == 1"
                                        class="score-point w-100 h-100"
                                    >
                                        5pt
                                    </div>
                                    <div
                                        v-if="index == 2"
                                        class="score-point w-100 h-100"
                                    >
                                        2pt
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-style card-back"></div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
let _newdolls = null;
function getDolls(dolls) {
    if (dolls == null) {
        return;
    }
    var str = "";
    var counts = 0;
    for (let prop in dolls) {
        if (typeof dolls[prop] === "object") {
            for (let current_prop in dolls[prop]) {
                if (current_prop == "name") {
                    str += `${dolls[prop][current_prop]}, `;
                    counts++;
                }
                // console.log(`${current_prop}: ${dolls[prop][current_prop]}`);
            }
        } else {
            console.log(`${prop}: ${dolls[prop]}`); //person[prop] 相當於 person['Name']
        }
    }
    // console.log(`${str} | 一共 ${counts} 只 goma`);
}

export default {
    props: ["MissionDolls", "signalRConnection"],
    computed: {
        isConnected() {
            // if (this.signalRConnection.constructor.name === "HubConnection") {
            if (this.signalRConnection !== undefined) {
                console.log(this.signalRConnection);
                this.GetMissionDolls();
                return true;
            }
            return false;
        },
    },
    created() {
        console.log(this.signalRConnection);
        this.GetMissionDolls();
    },

    data() {
        return {};
    },

    components: {},
    methods: {
        GetMissionDolls: function () {
            let vm = this;
            console.log("mission test");
            // var myconnection = JSON.parse(
            //     JSON.stringify(this.signalRConnection)
            // );
            // console.log(myconnection);

            // console.log(this);

            // console.log(this.signalRConnection);
            // console.log("mission end");

            // console.log(`mission conn ${this.signalRConnection}`);
            this.signalRConnection.invoke("GetMission");
            this.signalRConnection.on("GetMission", function (mission_dolls) {
                getDolls(mission_dolls);
                console.log("娃娃");

                this.off("GetMission", null);
                vm.$emit("GetMissionDolls", mission_dolls);
            });
        },
    },
};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");
$card-transition-time: 1s;
$card-transition-delay-time: 1s;

@keyframes rotate {
    0% {
        transform: rotateY(0);
    }
    70% {
        transform: rotateY(200deg);
    }
    100% {
        transform: rotateY(180deg);
    }
}

@keyframes rotate-inverse {
    0% {
        transform: rotateY(180deg);
    }
    70% {
        transform: rotateY(-20deg);
    }
    100% {
        transform: rotateY(0);
    }
}

.mission-card {
    width: 120px;
    height: 180px;
    border-radius: 10px;
    animation: rotate-inverse $card-transition-time $card-transition-delay-time
        linear both;
    width: 120px;
    height: 180px;
    position: absolute;
    perspective: 75rem;
    transform-style: preserve-3d;
    bottom: 0;
    // &:hover {
    // 	.back {
    // 		transform: rotateY(0deg);
    // 	}
    // }

    .card-style {
        backface-visibility: hidden;
        transition: transform 0.8s ease;
        overflow: hidden;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-radius: 10px;

        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
        font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
        // font-size: 2rem;
        color: rgb(0, 0, 0);
        text-transform: uppercase;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
        overflow: hidden;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .card-front {
        height: 100%;
        display: flex;
        flex-direction: column;

        // height: 100vh;
        padding: 0;
        &.is-active {
            position: static;
        }
        background-image: url("https://sandy.s-ul.eu/YQD9ib2P");
        // background-image: url("https://bin.jvnv.net/file/NFuNn/Mamegoma_up_1.png");
        position: absolute;
        &:hover {
            position: absolute;
            border: 1px solid #ffef91;
            // box-shadow: 0 0 0 5px #ffee8b9d;
            box-shadow: 0 0 5px 5px #ffee8bbb;
            filter: drop-shadow(6px 7px 4px rgba(0, 0, 0, 0.3));
            width: 110%;
            height: 110%;
            top: -30px;
        }

        .mission-doll-block {
            margin: 0;
            width: 100%;
            height: 100%;

            flex-grow: 1;
            display: flex;
            margin-top: 20px;
            align-items: center;

            justify-content: center;
            .mission-doll-icon {
                background-size: 75%;
                background-position: center;
                background-repeat: no-repeat;
            }
            .mission-doll-score-content {
                display: flex;
                flex-direction: column;
                // align-items: center;
                justify-content: center;
                .mission-doll-name {
                    font-family: "Luckiest Guy", cursive;
                    // font-size: ;
                    // font-weight: bold;
                }
                .mission-doll-score {
                    padding: 0 5px;

                    .score-icon {
                        background-size: 50%;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                    .score-point {
                        font-family: "Luckiest Guy", cursive;

                        // font-weight: bold;
                    }
                }
            }
        }

        & > :nth-child(1) {
            margin: 0;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;

            // background-color: rgba(140, 232, 255, 0.623);#E85D2D);
            // background: #ee9ca7;  /* fallback for old browsers */
            background: -webkit-linear-gradient(
                to bottom,
                #ffb8c0,
                #ee9ca7
            ); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(
                to bottom,
                #ffb8c0,
                #ee9ca7
            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        & > :nth-child(2) {
            margin: 0;

            // border-radius: 8px;
            background: -webkit-linear-gradient(
                to bottom,
                #f0f5c4,
                #fff89c
            ); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(
                to bottom,
                #f0f5c4,
                #fff89c
            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        & > :nth-child(3) {
            margin: 0;

            // background-color: #99ffa69f;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;

            background: -webkit-linear-gradient(
                to bottom,
                #b8c9ff,
                #9bb2ff
            ); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(
                to bottom,
                #b8c9ff,
                #9bb2ff
            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
    }

    .card-back {
        position: absolute;

        transform: rotateY(180deg);
        background-image: url("https://mamegoma.azurewebsites.net/img/mame_card_back.1d2cf644.png");
    }
}
</style>