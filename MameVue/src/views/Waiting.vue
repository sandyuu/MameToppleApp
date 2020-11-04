<template>
    <div class="home">
        <div class="title">Waiting for players....</div>
        <div class="d-flex">
            <div
                class="col-3 player"
                v-for="(player, index) in players"
                :key="index"
            >
                <div class="one d-flex align-items-center flex-column">
                    <div class="Avatar text-center">
                        <img
                            v-bind:src="player.avatar"
                            alt=""
                            class="w-50 bg-white rounded-circle"
                        />
                    </div>
                    <div class="info justify-content-start">
                        <span>name：{{ player.nickname }}</span>
                        <!-- <span>{{ Object.keys(item)[1] }}：{{item.name}}</span> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { CONFIG } from "@/config.js";

// import HelloWorld from '@/components/HelloWorld.vue'
// import { LoginPageService } from "../services/LoginPageService";
const signalR = require("@microsoft/signalr");

export default {
    name: "Waiting",
    data() {
        return {
            players: [],
            signalRConnection: {},
        };
    },
    watch: {
        // players() {
        //     this.getUserAccount();
        // },
    },
    components: {},
    activated() {},
    created() {
        this.getUserAccount();
    },
    methods: {
        getUserAccount: async function () {
            var vm = this;
            var getUserAccount = sessionStorage.getItem("account");

            var connection = new signalR.HubConnectionBuilder()
                .withUrl(CONFIG.API_URL + "/mamehub", {
                    skipNegotiation: true,
                    transport: signalR.HttpTransportType.WebSockets,
                })
                .build();
            connection.serverTimeoutInMilliseconds = 120000;

            connection
                .start()
                .then(() => {
                    console.log("連線成功");
                    connection.invoke("PlayerJoin", getUserAccount);

                    connection.on("SomeOneJoin", function (players) {
                        vm.players = players;
                    });
                    connection.on("GameStart", vm.gameStart);
                })
                .catch(function (err) {
                    console.error(err.toString());
                });

            this.signalRConnection = connection;
        },
        gameStart: function () {
            let vm = this;
            // console.log(vm.players);

            vm.$router.push({
                name: "Game",
                params: {
                    players: vm.players,
                    signalRConnection: vm.signalRConnection,
                },
            });
        },
    },
};
</script>
<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap"); */
.title {
    font-family: "Comic Neue", cursive;
    font-size: 72px;
    text-align: center;
}
.one {
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: solid 5px hsla(0, 95%, 35%, 1);
    padding: 1em;
    line-height: 1.5em;
}

@keyframes example {
    0% {
        margin-top: 0px;
    }

    50% {
        margin-top: 20px;
    }

    100% {
        margin-top: 0px;
    }
}

@keyframes example1 {
    0% {
        margin-top: 20px;
    }

    50% {
        margin-top: 0px;
    }

    100% {
        margin-top: 20px;
    }
}

.player:nth-child(1) {
    display: inline-block;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

.player:nth-child(2) {
    display: inline-block;
    animation-name: example1;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
</style>