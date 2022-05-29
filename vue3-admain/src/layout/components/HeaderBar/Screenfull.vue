<template>
    <div @click="hanleToggleFull">
        <img v-if="isfull" src="@/assets/images/notFull.png" alt="" class="screenfull-img">
        <img v-else src="@/assets/images/isFull.png" alt="" class="screenfull-img">
    </div>
</template>

<script setup lang="ts">
import screenfull from 'screenfull'
import { ref } from "vue";

const isfull = ref(false)
const hanleToggleFull = () =>{
    screenfull.toggle()
    isfull.value = !isfull.value
}
</script>

<style lang="scss" scoped>
    .screenfull-img{
        width: 25px;
        height: 25px;
    }
</style>