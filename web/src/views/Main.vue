<template>
    <div>
        <div class="topbar bg-dark py-2 px-3 d-flex ai-center">
            <img src="../assets/images/logo.png" alt="" height="30">
            <div class="px-2 flex-1">
                <div class="text-white">王者荣耀</div>
                <div class="text-grey-1 fs-xxs">团队成就更多</div>
            </div>
            <button type="button" class="btn bg-primary">立即下载</button>
        </div>
        <div class="bg-primary py-3 pb-2">
            <div class="nav nav-inverse pb-1 jc-around text-white">
                <div class="nav-item active">
                    <router-link class="nav-link" tag="div" to="/">首页</router-link>
                </div>
                <div class="nav-item">
                    <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
                </div>
                <div class="nav-item">
                    <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
                </div>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<style lang="scss">
.topbar {
    background: url('../assets/images/index.png') no-repeat 0 87.195%;
	background-size: 28.8462rem 35rem;
	width: 28.8462rem;
    height: 3.4615rem;
    position: sticky;
    top: 0;
    z-index: 999;
}
</style>