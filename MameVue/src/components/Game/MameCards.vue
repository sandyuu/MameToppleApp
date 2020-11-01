<template>
    <div class="w-100 h-100 d-flex justify-content-around">
        <div
            v-for="item in cards"
            v-bind:key="item.id"
            class="mame-card-wrap d-flex"
        >
            <label :for="'mame-card-' + item.id">
                <input
                    type="radio"
                    :id="'mame-card-' + item.id"
                    name="mame-card-group"
                />
                <div
                    class="mame-card"
                    v-on:click="selectCard(item)"
                    :id="'mame-card-' + item.id"
                >
                    <div
                        class="card-style card-front is-active"
                        v-bind:style="{
                            'background-image': 'url(' + item.image + ')',
                        }"
                    ></div>
                    <div class="card-style card-back"></div>
                </div>
            </label>
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
    console.log(`${str} | 一共 ${counts} 只 goma`);
}

export default {
    props: ["cards", "signalRConnection", "MissionDolls", "dolls"],
    created() {
        // let vm = this;
        this.newdolls = this.dolls;
        // console.log(`card conn ${this.signalRConnection}`);
        // console.log("建立");
    },
    data() {
        return {
            // userName: "",
            items: [],
        };
    },

    components: {
        // HelloWorld
    },
    methods: {
        selectCard: function (item) {
            let cardName;
            let vm = this;
            cardName = item.name;
            // console.log(`列出全部 ${JSON.stringify(this.cards)}`);
            // console.log(`before DOLLS`);
            if (this.dolls.length == 0) {
                return;
            }
            if (_newdolls == null) {
                _newdolls = this.dolls;
            }

            // getDolls(_newdolls);

            console.log(`現在使用 ${cardName} 卡片`);
            console.log(this.signalRConnection);

            // console.log(`card conn ${this.signalRConnection}`);
            this.signalRConnection.invoke("UseCard", vm.dolls, cardName);
            // this.signalRConnection.off("UseCard", null);

            this.signalRConnection.on("UseCard", function (new_dolls) {
                if (cardName == "Discard") {
                    _newdolls = new_dolls;

                    this.off("UseCard", null);
                    vm.$emit("CardDisDolls", _newdolls, cardName);
                }
                if (cardName == "DropDown") {
                    this.off("UseCard", null);
                    vm.$emit("CardChooseDolls", cardName);
                }
                if (
                    cardName == "UpOne" ||
                    cardName == "UpTwo" ||
                    cardName == "UpThree"
                ) {
                    this.off("UseCard", null);
                    vm.$emit("CardChooseDolls", cardName);
                }
            });

            // this.$nextTick(function () {
            //     console.log("離開後");
            //     getDolls(null);
            // });
            // getDolls(_newdolls);
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

input[type="radio"] {
    display: none;
    // position: absolute;
    // bottom: -20px;
    &:checked + .mame-card .card-front {
        position: absolute;
        border: 1px solid #ff91fa;
        // box-shadow: 0 0 0 5px #ffee8b9d;
        box-shadow: 0 0 5px 5px #ff91faa8;
        filter: drop-shadow(6px 7px 4px rgba(0, 0, 0, 0.3));
        width: 110%;
        height: 110%;
        top: -30px;
    }
}
.mame-card-wrap {
    width: 120px;
    height: 180px;
}
.mame-card {
    width: 120px;
    height: 180px;
    border-radius: 10px;
    animation: rotate-inverse $card-transition-time $card-transition-delay-time
        linear both;

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
        font-size: 2rem;
        color: #fff;
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
    }

    .card-back {
        position: absolute;

        transform: rotateY(180deg);
        background-image: url("https://mamegoma.azurewebsites.net/img/mame_card_back.1d2cf644.png");
    }
}
</style>