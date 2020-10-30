<template>
<!-- 終局結果(最後六隻小海豹,玩家任務牌卡) -->
    <div class=" container">
        <div class="row ranking-container">
            <div class="col-8 ranking">
                <div class="player-container pt-5">

                    <!-- 左邊任務卡區塊 頭 -->
                    <div class="player d-inline-block ">
                        <div class="mission-card">
                            <div v-for="(item,index) in items" :key="index">
                                <div class="mame-tiki">
                                    <img v-bind:src="item.image" v-bind:alt="item.name" />
                                    <div class="mame-tiki-img col-6">

                                        <img src="../src/assets/images/Ranking/Cherry-Blossom-goma.png" alt=""  srcset=""> 

                                    </div>
                                    <div class="mame-tiki-name col-6">mame-tiki-name</div>
                                </div>
                            </div>
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                        </div>

                        <div class="player-info col-12">
                            <!-- <img src="assets/images/pngwave003.png" class="player-img" alt=""> -->
                            <span class="player-name">
                                player
                            </span>
                        </div>
                    </div>
                    <!-- 左邊任務卡區塊 尾 -->

                    <div class="col-10">
                        <!-- 六隻mame-tiki的區塊 頭-->
                        <div class="mame-line ">
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                        </div>
                        <!-- 六隻mame-tiki的區塊 尾-->
                    </div>

                    <!-- 右邊任務卡區塊 頭 -->
                    <div class="player text-center d-inline-block">
                        <div class="mission-card ">
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                            <div class="mame-tiki"></div>
                        </div>
                        <div class="player-info  col-12">
                            <!-- <img src="assets/images/pngwave003.png" class="player-img" alt=""> -->
                            <span class="player-name">
                                player
                            </span>
                        </div>

                    </div>
                    <!-- 右邊任務卡區塊 尾 -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>
