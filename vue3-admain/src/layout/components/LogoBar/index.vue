<template>
    <div class="logo">
        <img src="@/assets/logo.png" alt="">
        <h2 v-show="!collapsed" class="title">vue3-admin</h2>
    </div>
</template>

<script setup lang="ts">

defineProps({
    collapsed:{
        type:Boolean
    }
})
</script>

<style lang="scss" scoped>
.logo{
    display: flex;
    align-items: center;
    padding-left: 14px;
    height: 64px;
    padding-left: 14px;
    overflow: hidden;
    white-space: nowrap;
    img{
        height: 32px;
        margin-left: 8px;
    }
    .title{
        font-size: 20px;
        color: #fff;
        margin-bottom: 0;
    }
}
</style>